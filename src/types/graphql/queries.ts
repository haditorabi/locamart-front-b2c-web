// Example query type definition for getting business listings
export interface GetBusinessesQuery {
  businesses: {
    id: string;
    name: string;
    category: string;
    rating: number;
  }[];
}

export interface GetBusinessQuery {
  business: {
    id: string;
    name: string;
    category: string;
    rating: number;
    address: string;
  };
}
