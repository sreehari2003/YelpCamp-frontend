module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "images.unsplash.com"],
  },
  env: {
    STRIPE: process.env.STRIPE,
    MAPBOX: process.env.MAPBOX,
  },
};
