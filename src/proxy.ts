import { NextRequest, NextResponse } from "next/server";

/**
 * Génère une CSP stricte avec un nonce unique par requête.
 * Le nonce est transmis au layout via l'en-tête x-nonce ; Next.js le détecte
 * dans la CSP de la requête et l'applique automatiquement à ses scripts.
 */
export default function proxy(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID());
  const isDev = process.env.NODE_ENV === "development";

  const csp = [
    "default-src 'self'",
    // unsafe-eval est requis uniquement par le HMR en développement
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("content-security-policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("content-security-policy", csp);

  return response;
}

export const config = {
  matcher: [
    {
      // Tout sauf les assets statiques et les fichiers générés
      source:
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest|llms.txt).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
