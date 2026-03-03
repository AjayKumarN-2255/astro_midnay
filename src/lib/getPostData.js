import { gql } from "@apollo/client";
import client from "../apollo/client.js";

export const fetchPosts = async (pageSize = 6, afterCursor = null) => {
  const GET_POSTS = gql`
    query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after) {
        nodes {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_POSTS,
    variables: { first: pageSize, after: afterCursor },
    fetchPolicy: "no-cache",
  });

  return {
    posts: data?.posts?.nodes || [],
    pageInfo: data?.posts?.pageInfo || {},
  };
};