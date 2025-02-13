/**
 * API Configuration with endpoint URLs for different environments
 */
export const apiConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://api.example.com",
  endpoints: {
    getBusiness: "/business",
    createBusiness: "/business/create",
    getBusinesses: "/businesses",
    updateBusiness: "/business/update",
  },
};
