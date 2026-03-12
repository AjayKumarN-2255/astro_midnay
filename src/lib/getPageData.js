import { gql } from "@apollo/client";
import client from "../apollo/client.js";

export const fetchPageBySlug = async (slug) => {
    const GET_PAGE = gql`
    query GetPage($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        title
        content
      }
    }
  `;

    const { data } = await client.query({
        query: GET_PAGE,
        variables: {
            id: slug,       
            idType: "URI",      
        }
    });

    return data?.page || null;
};