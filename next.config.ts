import type { NextConfig } from "next";

// Export statique pour Hostinger (hébergement mutualisé, pas de serveur Node).
// Les en-têtes de sécurité, HTTPS, redirections et cache sont gérés par
// public/.htaccess, copié tel quel dans out/ au build.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // 404 global : requis car le site a deux root layouts (FR et EN)
    globalNotFound: true,
  },
};

export default nextConfig;
