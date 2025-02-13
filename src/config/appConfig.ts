/**
 * General App Configuration for theming, debugging, and other global settings
 */
export const appConfig = {
  theme: process.env.REACT_APP_THEME || "light", // Default to light theme
  enableDebugging: process.env.REACT_APP_ENABLE_DEBUGGING === "true", // Debug flag based on env
  maxItemsPerPage: 20, // Example of a constant value that could be environment-dependent
};
