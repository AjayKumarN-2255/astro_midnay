import { gql } from "@apollo/client";
import client from "../apollo/client.js";

export const fetchPosts = async () => {
    const GET_POSTS = gql`
    query GetPosts {
      posts {
        nodes {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
        }
      }
    }
  `;

    const { data } = await client.query({
        query: GET_POSTS,
    });

    return data?.posts?.nodes || [];
};
fetchPosts()