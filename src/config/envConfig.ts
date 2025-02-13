/**
 * Loads and types environment variables for type safety
 */
export const envConfig = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "https://api.default.com",
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  sendGridApiKey: process.env.REACT_APP_SENDGRID_API_KEY || "",
  // You can add more environment-specific variables here as needed
};
