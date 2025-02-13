// API functions for businesses
// import { graphqlClient } from '../client';
// import { gql } from 'graphql-request';

// // GraphQL query to fetch businesses
// const GET_BUSINESSES = gql`
//   query GetBusinesses {
//     businesses {
//       id
//       name
//       location
//       rating
//     }
//   }
// `;

// // Fetch businesses function
// export const fetchBusinesses = async () => {
//   return graphqlClient.request(GET_BUSINESSES);
// };

// // GraphQL mutation to add a new business
// const ADD_BUSINESS = gql`
//   mutation AddBusiness($name: String!, $location: String!) {
//     addBusiness(name: $name, location: $location) {
//       id
//       name
//       location
//     }
//   }
// `;

// // Function to add a new business
// export const addBusiness = async (name: string, location: string) => {
//   return graphqlClient.request(ADD_BUSINESS, { name, location });
// };
