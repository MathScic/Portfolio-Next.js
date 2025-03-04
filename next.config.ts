import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Important si tu utilises SSR
  trailingSlash: true, // Essaye de voir si ça aide
};

export default nextConfig;
