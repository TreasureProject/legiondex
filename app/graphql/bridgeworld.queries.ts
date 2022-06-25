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
    advancedQuests(
      first: 1000
      where: { token_in: $ids, status_in: $statuses }
    ) {
      token {
        id
      }
      user {
        id
      }
    }
    crafts(first: 1000, where: { token_in: $ids, status_in: $statuses }) {
      token {
        id
      }
      user {
        id
      }
    }
    quests(first: 1000, where: { token_in: $ids, status_in: $statuses }) {
      token {
        id
      }
      user {
        id
      }
    }
    stakedTokens(first: 1000, where: { token_in: $ids }) {
      token {
        id
      }
      user {
        id
      }
    }
    summons(first: 1000, where: { token_in: $ids, status_in: $statuses }) {
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
      advancedQuests(
        first: 1000
        where: { status_in: [Idle, Revealable, Revealed] }
      ) {
        token {
          ...legionFields
        }
      }
      crafts(first: 1000, where: { status_in: [Idle, Revealable, Revealed] }) {
        token {
          ...legionFields
        }
      }
      quests(first: 1000, where: { status_in: [Idle, Revealable, Revealed] }) {
        token {
          ...legionFields
        }
      }
      staked(
        first: 1000
        where: {
          token_starts_with: "0xfe8c1ac365ba6780aec5a985d989b327c27670a1"
        }
      ) {
        token {
          ...legionFields
        }
      }
      summons(first: 1000, where: { status_in: [Idle, Revealable, Revealed] }) {
        token {
          ...legionFields
        }
      }
      tokens(
        first: 1000
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
