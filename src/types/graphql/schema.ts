// Example: Types for GraphQL schema related to a Business entity
export interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  address: string;
}

export interface Query {
  getBusiness: (id: string) => Promise<Business>;
  getBusinesses: () => Promise<Business[]>;
}

export interface Mutation {
  createBusiness: (input: CreateBusinessInput) => Promise<Business>;
  updateBusiness: (id: string, input: UpdateBusinessInput) => Promise<Business>;
}

export interface CreateBusinessInput {
  name: string;
  category: string;
  address: string;
}

export interface UpdateBusinessInput {
  name?: string;
  category?: string;
  address?: string;
}
