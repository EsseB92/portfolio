# Déploiement sur Hostinger Cloud Startup

Le site est un export statique Next.js (`out/`), déployé en FTPS par GitHub Actions
à chaque push sur `main`. Aucun serveur Node n'est nécessaire.

## 1. Côté hPanel

1. **Domaine** : `erdus.fr` doit pointer sur l'hébergement (nameservers Hostinger
   ou enregistrement A). Le site canonique est l'apex : `www.erdus.fr` est
   redirigé vers `erdus.fr` par le `.htaccess`.
2. **Racine du document** : `domains/erdus.fr/public_html` (structure Hostinger
   multi-sites). Le workflow dépose le contenu de `out/` directement dedans,
   `.htaccess` compris.
3. **SSL** : *Sécurité → SSL* → installer le certificat Let's Encrypt gratuit
   sur `erdus.fr` et `www.erdus.fr`. Ne pas activer « Forcer HTTPS » dans hPanel
   si vous préférez laisser le `.htaccess` gérer la redirection (les deux
   fonctionnent, mais une seule méthode évite les doubles redirections).
4. **Sous-domaines** : `game.erdus.fr` et `rdv.erdus.fr` sont d'autres sites.
   Créez-les dans *Domaines → Sous-domaines* avec leur propre dossier
   (par exemple `public_html/game` ou un dossier hors `public_html`), sans
   toucher au `.htaccess` racine. HSTS avec `includeSubDomains` est activé :
   ces sous-domaines doivent aussi être servis en HTTPS.
5. **Compte FTP** : *Fichiers → Comptes FTP* → créez un compte dédié au
   déploiement. Notez l'hôte (`ftp.erdus.fr` ou l'IP), l'identifiant et le mot de
   passe. Compte principal : hôte `45.13.252.81`, utilisateur `u997960870`, racine =
   dossier personnel (`/home/u997960870`).
6. **Cache CDN** : le CDN Hostinger (`Server: hcdn`) garde les pages HTML en
   cache selon leur en-tête `Cache-Control`. Le nouveau `.htaccess` sert le HTML
   en `max-age=0, must-revalidate`, donc les déploiements suivants sont visibles
   immédiatement. Si une page reste figée : *Performances → CDN → Vider le
   cache* (erdus.fr).
7. **game.erdus.fr** est un domaine parqué servi depuis `domains/erdus.fr/public_html/game`.
   Ne jamais activer `dangerous-clean-slate` dans le workflow : cela effacerait
   le jeu en même temps que les anciens fichiers.

## 2. Côté GitHub (Settings → Secrets and variables → Actions)

Secrets (environnement `production` ou dépôt) :

| Secret            | Valeur                                          |
| ----------------- | ----------------------------------------------- |
| `FTP_SERVER`      | hôte FTP donné par hPanel                       |
| `FTP_USERNAME`    | identifiant du compte FTP                       |
| `FTP_PASSWORD`    | mot de passe du compte FTP                      |
| `WEB3FORMS_KEY`   | clé d'accès Web3Forms (formulaire de contact)   |

Variable (optionnelle) :

| Variable          | Valeur                                                        |
| ----------------- | ------------------------------------------------------------- |
| `FTP_SERVER_DIR`  | dossier distant, `./domains/erdus.fr/public_html/` par défaut (la racine du compte FTP principal est le dossier personnel, dont le lien `public_html` est cassé) |

Le premier déploiement envoie tout ; les suivants ne transfèrent que les
fichiers modifiés grâce au fichier d'état `.ftp-deploy-sync-state.json` déposé
sur le serveur.

## 3. Web3Forms (formulaire de contact)

1. Créer une clé sur <https://web3forms.com> avec l'adresse de réception.
2. La renseigner dans le secret `WEB3FORMS_KEY` (et dans `.env.local` en
   développement, voir `.env.example`).
3. Après envoi sans JavaScript, le visiteur est redirigé vers `/merci/` ou
   `/en/thank-you/` ; avec JavaScript, le message de confirmation s'affiche
   dans la page.

## 4. Vérifications après le premier déploiement

- `https://erdus.fr/` répond en 200, `http://` et `www.` redirigent en 301.
- `https://erdus.fr/une-page-inexistante/` affiche la 404 personnalisée.
- `https://erdus.fr/sitemap.xml` et `/robots.txt` sont accessibles.
- Les en-têtes de sécurité sont présents (`curl -I https://erdus.fr/`).
- Soumettre `sitemap.xml` dans Google Search Console.
