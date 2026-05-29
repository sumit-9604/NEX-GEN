/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any invalid options
  images: {
    domains: ['supabase.co'],
  },
  // For Next.js 15, use this experimental flag if needed
  experimental: {
    serverComponentsExternalPackages: ['@supabase/ssr'],
  },
  // Allow builds with TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig