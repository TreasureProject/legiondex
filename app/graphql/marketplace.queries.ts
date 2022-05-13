import gql from "graphql-tag";

export const getLegionsListings = gql`
  query getLegionsListings($ids: [String!]!) {
    listings(where: { status: Active, token_in: $ids }) {
      token {
        tokenId
      }
      seller {
        id
      }
      pricePerItem
    }
  }
`;

export const getUserListings = gql`
  query getUserListings($id: String!) {
    listings(
      where: {
        seller: $id
        status: Active
        collection_in: [
          "0xfe8c1ac365ba6780aec5a985d989b327c27670a1-0"
          "0xfe8c1ac365ba6780aec5a985d989b327c27670a1-1"
        ]
      }
    ) {
      token {
        tokenId
      }
    }
  }
`;
