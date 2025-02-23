// filepath: /c:/Users/PC/Source/Repos/sae-dashboard/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
      return [
        {
          source: "/",
          destination: "/support",
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;