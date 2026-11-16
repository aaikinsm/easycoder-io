import type { NextConfig } from "next";

const NODE_ORIGIN = "https://ec2-a.easycoder.io";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/app", destination: "/download", permanent: false },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      {
        source: "/easy-coder-privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      { source: "/easy-coder-privacy-policy/", destination: "/privacy", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/compile", destination: `${NODE_ORIGIN}/compile` },
      { source: "/cache/:path*", destination: `${NODE_ORIGIN}/cache/:path*` },
      { source: "/ios", destination: `${NODE_ORIGIN}/ios` },
      { source: "/code/:id", destination: `${NODE_ORIGIN}/code/:id` },
      { source: "/codeui/:id", destination: `${NODE_ORIGIN}/codeui/:id` },
      { source: "/site", destination: `${NODE_ORIGIN}/site` },
      { source: "/quote", destination: `${NODE_ORIGIN}/quote` },
      { source: "/projects/:type", destination: `${NODE_ORIGIN}/projects/:type` },
      {
        source: "/validate/:cert_id",
        destination: `${NODE_ORIGIN}/validate/:cert_id`,
      },
      { source: "/IAP", destination: `${NODE_ORIGIN}/IAP` },
      { source: "/sites/:path*", destination: `${NODE_ORIGIN}/sites/:path*` },
      { source: "/temp/:path*", destination: `${NODE_ORIGIN}/temp/:path*` },
      { source: "/webfiles", destination: `${NODE_ORIGIN}/webfiles` },
      { source: "/webfiles/:path*", destination: `${NODE_ORIGIN}/webfiles/:path*` },
    ];
  },
};

export default nextConfig;
