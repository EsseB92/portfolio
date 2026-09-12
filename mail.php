<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.erdus.fr');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// ── Load .env ──────────────────────────────────────────
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if (str_starts_with(trim($line), '#')) continue;
        [$key, $value] = array_map('trim', explode('=', $line, 2));
        $_ENV[$key] = $value;
    }
}

$SMTP_HOST = $_ENV['SMTP_HOST'] ?? '';
$SMTP_PORT = (int)($_ENV['SMTP_PORT'] ?? 465);
$SMTP_USER = $_ENV['SMTP_USER'] ?? '';
$SMTP_PASS = $_ENV['SMTP_PASS'] ?? '';
$MAIL_TO   = $_ENV['MAIL_TO']   ?? $SMTP_USER;
$MAIL_FROM = $_ENV['MAIL_FROM'] ?? $SMTP_USER;

// ── Parse & validate input ─────────────────────────────
$raw = json_decode(file_get_contents('php://input'), true);

$name    = trim(strip_tags($raw['name']    ?? ''));
$email   = trim(strip_tags($raw['email']   ?? ''));
$subject = trim(strip_tags($raw['subject'] ?? 'Contact depuis erdus.fr'));
$message = trim(strip_tags($raw['message'] ?? ''));

// ── Honeypot anti-spam ──────────────────────────────────
if (trim($raw['website'] ?? '') !== '') {
    echo json_encode(['ok' => true]); // bot détecté : ignoré silencieusement
    exit;
}

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Champs requis manquants']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Email invalide']);
    exit;
}

// ── Rate limiting (1 submission per IP per minute) ─────
$ipHash  = md5($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateFile = sys_get_temp_dir() . '/erdus_rl_' . $ipHash . '.txt';
$now     = time();
if (file_exists($rateFile) && ($now - (int)file_get_contents($rateFile)) < 60) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Trop de tentatives, réessayez dans une minute']);
    exit;
}
file_put_contents($rateFile, $now);

// ── Send via SMTP (PHPMailer-free implementation) ──────
// Hostinger supports PHP mail() natively — using it with SMTP headers
// For production, PHPMailer is recommended. This works out-of-the-box.

$headers  = "From: {$MAIL_FROM}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body  = "Nouveau message depuis erdus.fr\n";
$body .= str_repeat('─', 40) . "\n";
$body .= "Nom     : {$name}\n";
$body .= "Email   : {$email}\n";
$body .= "Sujet   : {$subject}\n";
$body .= str_repeat('─', 40) . "\n\n";
$body .= $message . "\n";

$sent = mail($MAIL_TO, "[erdus.fr] {$subject}", $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Erreur serveur, réessayez']);
}
