/**
 * Handles API response and checks for errors
 * @param response - The API response
 * @returns The parsed JSON data
 * @throws Error if the response is not OK
 */
export const handleApiResponse = async (
  response: Response
): Promise<object> => {
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  return response.json();
};

/**
 * Checks if the response is a successful HTTP status
 * @param response - The API response
 * @returns True if the response status is in the 200–299 range
 */
export const isSuccessStatus = (response: Response): boolean => {
  return response.status >= 200 && response.status < 300;
};
