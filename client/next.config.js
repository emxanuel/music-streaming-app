/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'e-cdns-images.dzcdn.net',
            protocol: 'https'
        }]
    },
    
}

module.exports = nextConfig
