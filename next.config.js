/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ["lh3.googleusercontent.com", "jizcevknjxmffwlkgbeg.supabase.co"],
      unoptimized: true,
      dangerouslyAllowSVG: true,
    },
  }
  
  module.exports = nextConfig