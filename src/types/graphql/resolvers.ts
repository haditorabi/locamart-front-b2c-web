import { Business, Mutation, Query, CreateBusinessInput } from "./schema";

export interface BusinessResolvers {
  Query: Query;
  Mutation: Mutation;
}

export interface BusinessResolver {
  getBusiness: (parent: any, args: { id: string }) => Promise<Business>;
  createBusiness: (
    parent: any,
    args: { input: CreateBusinessInput }
  ) => Promise<Business>;
}
