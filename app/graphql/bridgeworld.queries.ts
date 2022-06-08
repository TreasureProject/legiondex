import gql from "graphql-tag";

const legionFieldsFragment = gql`
  fragment legionFields on Token {
    id
    tokenId
    generation
    rarity
    name
    image
    imageAlt
    metadata {
      ... on LegionInfo {
        role
        constellation {
          dark
          earth
          fire
          light
          water
          wind
        }
        crafting
        craftingXp
        questing
        questingXp
        summons
      }
    }
    owners {
      user {
        id
      }
    }
  }
`;

export const getLegionDetails = gql`
  query getLegionDetails($id: ID!, $token: String!) {
    token(id: $id) {
      ...legionFields
    }
    summons(
      where: { token: $token }
      orderBy: endTimestamp
      orderDirection: desc
    ) {
      id
      endTimestamp
      status
      success
      resultToken {
        ...legionFields
      }
    }
  }
  ${legionFieldsFragment}
`;

export const getLegionId = gql`
  query getLegionId($tokenId: BigInt!) {
    tokens(where: { category: Legion, tokenId: $tokenId }) {
      id
    }
  }
`;

export const getLegionsActivities = gql`
  query getLegionsActivities(
    $ids: [String!]!
    $statuses: [Status!] = [Idle, Revealable, Revealed]
  ) {
    advancedQuests(where: { token_in: $ids, status_in: $statuses }) {
      token {
        id
      }
      user {
        id
      }
    }
    crafts(where: { token_in: $ids, status_in: $statuses }) {
      token {
        id
      }
      user {
        id
      }
    }
    quests(where: { token_in: $ids, status_in: $statuses }) {
      token {
        id
      }
      user {
        id
      }
    }
    stakedTokens(where: { token_in: $ids }) {
      token {
        id
      }
      user {
        id
      }
    }
    summons(where: { token_in: $ids, status_in: $statuses }) {
      token {
        id
      }
      user {
        id
      }
    }
  }
`;

export const getLegions = gql`
  query getLegions(
    $skip: Int = 0
    $first: Int = 30
    $where: Token_filter
    $orderBy: Token_orderBy = tokenId
    $orderDirection: OrderDirection = asc
  ) {
    tokens(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
    ) {
      ...legionFields
    }
  }
  ${legionFieldsFragment}
`;

export const getUserLegions = gql`
  query getUserLegions($id: ID!) {
    user(id: $id) {
      advancedQuests(where: { status_in: [Idle, Revealable, Revealed] }) {
        token {
          ...legionFields
        }
      }
      crafts(where: { status_in: [Idle, Revealable, Revealed] }) {
        token {
          ...legionFields
        }
      }
      quests(where: { status_in: [Idle, Revealable, Revealed] }) {
        token {
          ...legionFields
        }
      }
      staked(
        where: {
          token_starts_with: "0xfe8c1ac365ba6780aec5a985d989b327c27670a1"
        }
      ) {
        token {
          ...legionFields
        }
      }
      summons(where: { status_in: [Idle, Revealable, Revealed] }) {
        token {
          ...legionFields
        }
      }
      tokens(
        where: {
          token_starts_with: "0xfe8c1ac365ba6780aec5a985d989b327c27670a1"
        }
      ) {
        token {
          ...legionFields
        }
      }
    }
  }
  ${legionFieldsFragment}
`;
