// Example mutation type for creating a business
export interface CreateBusinessMutation {
  createBusiness: {
    id: string;
    name: string;
    category: string;
    rating: number;
  };
}

export interface UpdateBusinessMutation {
  updateBusiness: {
    id: string;
    name: string;
    category: string;
  };
}
