
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PLACES_AUTOCOMPLETE_API_KEY: process.env.PLACES_AUTOCOMPLETE_API_KEY,
    BACKEND_ENDPOINT_API_KEY:process.env.BACKEND_ENDPOINT_API_KEY,
    GOOGLE_RECAPTCHA_SITE_KEY:process.env.GOOGLE_RECAPTCHA_SITE_KEY,
    GOOGLE_RECAPTCHA_SECRET_KEY:process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
    BACKEND_ENDPOINT_AUTHORIZATION_KEY:process.env.BACKEND_ENDPOINT_AUTHORIZATION_KEY

  },
};

export default nextConfig;