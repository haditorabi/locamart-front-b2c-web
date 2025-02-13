// API functions for authentication
// import { graphqlClient } from '../client';
// import { gql } from 'graphql-request';

// // GraphQL mutation for user login
// const LOGIN_USER = gql`
//   mutation Login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         id
//         name
//         email
//       }
//     }
//   }
// `;

// // Function to log in a user
// export const loginUser = async (email: string, password: string) => {
//   return graphqlClient.request(LOGIN_USER, { email, password });
// };
