/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: (d, ctx) => {
    console.log("默认的导出:", d);
    return {
      '/': { page: '/' },
      '/404': { page: '/404' }
    };
  }
}

module.exports = nextConfig
