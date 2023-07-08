/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ["lh3.googleusercontent.com", "jizcevknjxmffwlkgbeg.supabase.co"]
    },
  }
  
  module.exports = nextConfig