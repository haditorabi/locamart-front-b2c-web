// Example types for API requests and responses
export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface CreateBusinessApiRequest {
  name: string;
  category: string;
  address: string;
}

export interface CreateBusinessApiResponse {
  id: string;
  name: string;
  category: string;
  address: string;
}
