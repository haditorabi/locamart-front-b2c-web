// API functions for reviews
// import { graphqlClient } from "../client";
// import { gql } from "graphql-request";

// GraphQL query to get reviews for a business
// const GET_REVIEWS = gql`
//   query GetReviews($businessId: ID!) {
//     reviews(businessId: $businessId) {
//       id
//       rating
//       comment
//       user {
//         name
//       }
//     }
//   }
// `;

// // Fetch reviews function
// export const fetchReviews = async (businessId: string) => {
//   return graphqlClient.request(GET_REVIEWS, { businessId });
// };

// // GraphQL mutation to add a review
// const ADD_REVIEW = gql`
//   mutation AddReview($businessId: ID!, $rating: Int!, $comment: String!) {
//     addReview(businessId: $businessId, rating: $rating, comment: $comment) {
//       id
//       rating
//       comment
//     }
//   }
// `;

// // Function to add a review
// export const addReview = async (businessId: string, rating: number, comment: string) => {
//   return graphqlClient.request(ADD_REVIEW, { businessId, rating, comment });
// };
