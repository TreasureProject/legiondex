import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Approval = {
  __typename?: "Approval";
  contract: Scalars["Bytes"];
  id: Scalars["ID"];
  operator: Scalars["Bytes"];
  users: Array<UserApproval>;
};

export type ApprovalUsersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserApproval_Filter>;
};

export type Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars["Bytes"]>;
  contract_contains?: InputMaybe<Scalars["Bytes"]>;
  contract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contract_not?: InputMaybe<Scalars["Bytes"]>;
  contract_not_contains?: InputMaybe<Scalars["Bytes"]>;
  contract_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  operator?: InputMaybe<Scalars["Bytes"]>;
  operator_contains?: InputMaybe<Scalars["Bytes"]>;
  operator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  operator_not?: InputMaybe<Scalars["Bytes"]>;
  operator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum Approval_OrderBy {
  Contract = "contract",
  Id = "id",
  Operator = "operator",
  Users = "users",
}

export type AtlasMine = {
  __typename?: "AtlasMine";
  deposits: Array<Deposit>;
  id: Scalars["ID"];
  utilization: Scalars["BigInt"];
  withdrawals: Array<Withdraw>;
};

export type AtlasMineDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type AtlasMineWithdrawalsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Withdraw_Filter>;
};

export type AtlasMine_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  utilization?: InputMaybe<Scalars["BigInt"]>;
  utilization_gt?: InputMaybe<Scalars["BigInt"]>;
  utilization_gte?: InputMaybe<Scalars["BigInt"]>;
  utilization_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  utilization_lt?: InputMaybe<Scalars["BigInt"]>;
  utilization_lte?: InputMaybe<Scalars["BigInt"]>;
  utilization_not?: InputMaybe<Scalars["BigInt"]>;
  utilization_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum AtlasMine_OrderBy {
  Deposits = "deposits",
  Id = "id",
  Utilization = "utilization",
  Withdrawals = "withdrawals",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type Broken = {
  __typename?: "Broken";
  id: Scalars["ID"];
  outcome: Outcome;
  quantity: Scalars["BigInt"];
  token: Token;
};

export type Broken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  outcome?: InputMaybe<Scalars["String"]>;
  outcome_contains?: InputMaybe<Scalars["String"]>;
  outcome_contains_nocase?: InputMaybe<Scalars["String"]>;
  outcome_ends_with?: InputMaybe<Scalars["String"]>;
  outcome_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  outcome_gt?: InputMaybe<Scalars["String"]>;
  outcome_gte?: InputMaybe<Scalars["String"]>;
  outcome_in?: InputMaybe<Array<Scalars["String"]>>;
  outcome_lt?: InputMaybe<Scalars["String"]>;
  outcome_lte?: InputMaybe<Scalars["String"]>;
  outcome_not?: InputMaybe<Scalars["String"]>;
  outcome_not_contains?: InputMaybe<Scalars["String"]>;
  outcome_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  outcome_not_ends_with?: InputMaybe<Scalars["String"]>;
  outcome_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  outcome_not_in?: InputMaybe<Array<Scalars["String"]>>;
  outcome_not_starts_with?: InputMaybe<Scalars["String"]>;
  outcome_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  outcome_starts_with?: InputMaybe<Scalars["String"]>;
  outcome_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  quantity?: InputMaybe<Scalars["BigInt"]>;
  quantity_gt?: InputMaybe<Scalars["BigInt"]>;
  quantity_gte?: InputMaybe<Scalars["BigInt"]>;
  quantity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quantity_lt?: InputMaybe<Scalars["BigInt"]>;
  quantity_lte?: InputMaybe<Scalars["BigInt"]>;
  quantity_not?: InputMaybe<Scalars["BigInt"]>;
  quantity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Broken_OrderBy {
  Id = "id",
  Outcome = "outcome",
  Quantity = "quantity",
  Token = "token",
}

export enum Category {
  Consumable = "Consumable",
  Crystal = "Crystal",
  Legion = "Legion",
  Treasure = "Treasure",
}

export type Constellation = {
  __typename?: "Constellation";
  dark: Scalars["Int"];
  earth: Scalars["Int"];
  fire: Scalars["Int"];
  id: Scalars["ID"];
  light: Scalars["Int"];
  water: Scalars["Int"];
  wind: Scalars["Int"];
};

export type Constellation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dark?: InputMaybe<Scalars["Int"]>;
  dark_gt?: InputMaybe<Scalars["Int"]>;
  dark_gte?: InputMaybe<Scalars["Int"]>;
  dark_in?: InputMaybe<Array<Scalars["Int"]>>;
  dark_lt?: InputMaybe<Scalars["Int"]>;
  dark_lte?: InputMaybe<Scalars["Int"]>;
  dark_not?: InputMaybe<Scalars["Int"]>;
  dark_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  earth?: InputMaybe<Scalars["Int"]>;
  earth_gt?: InputMaybe<Scalars["Int"]>;
  earth_gte?: InputMaybe<Scalars["Int"]>;
  earth_in?: InputMaybe<Array<Scalars["Int"]>>;
  earth_lt?: InputMaybe<Scalars["Int"]>;
  earth_lte?: InputMaybe<Scalars["Int"]>;
  earth_not?: InputMaybe<Scalars["Int"]>;
  earth_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  fire?: InputMaybe<Scalars["Int"]>;
  fire_gt?: InputMaybe<Scalars["Int"]>;
  fire_gte?: InputMaybe<Scalars["Int"]>;
  fire_in?: InputMaybe<Array<Scalars["Int"]>>;
  fire_lt?: InputMaybe<Scalars["Int"]>;
  fire_lte?: InputMaybe<Scalars["Int"]>;
  fire_not?: InputMaybe<Scalars["Int"]>;
  fire_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  light?: InputMaybe<Scalars["Int"]>;
  light_gt?: InputMaybe<Scalars["Int"]>;
  light_gte?: InputMaybe<Scalars["Int"]>;
  light_in?: InputMaybe<Array<Scalars["Int"]>>;
  light_lt?: InputMaybe<Scalars["Int"]>;
  light_lte?: InputMaybe<Scalars["Int"]>;
  light_not?: InputMaybe<Scalars["Int"]>;
  light_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  water?: InputMaybe<Scalars["Int"]>;
  water_gt?: InputMaybe<Scalars["Int"]>;
  water_gte?: InputMaybe<Scalars["Int"]>;
  water_in?: InputMaybe<Array<Scalars["Int"]>>;
  water_lt?: InputMaybe<Scalars["Int"]>;
  water_lte?: InputMaybe<Scalars["Int"]>;
  water_not?: InputMaybe<Scalars["Int"]>;
  water_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  wind?: InputMaybe<Scalars["Int"]>;
  wind_gt?: InputMaybe<Scalars["Int"]>;
  wind_gte?: InputMaybe<Scalars["Int"]>;
  wind_in?: InputMaybe<Array<Scalars["Int"]>>;
  wind_lt?: InputMaybe<Scalars["Int"]>;
  wind_lte?: InputMaybe<Scalars["Int"]>;
  wind_not?: InputMaybe<Scalars["Int"]>;
  wind_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum Constellation_OrderBy {
  Dark = "dark",
  Earth = "earth",
  Fire = "fire",
  Id = "id",
  Light = "light",
  Water = "water",
  Wind = "wind",
}

export type ConsumableInfo = Metadata & {
  __typename?: "ConsumableInfo";
  id: Scalars["ID"];
  size?: Maybe<Size>;
  type: Scalars["String"];
};

export type ConsumableInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  size?: InputMaybe<Size>;
  size_in?: InputMaybe<Array<Size>>;
  size_not?: InputMaybe<Size>;
  size_not_in?: InputMaybe<Array<Size>>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_ends_with?: InputMaybe<Scalars["String"]>;
  type_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_gt?: InputMaybe<Scalars["String"]>;
  type_gte?: InputMaybe<Scalars["String"]>;
  type_in?: InputMaybe<Array<Scalars["String"]>>;
  type_lt?: InputMaybe<Scalars["String"]>;
  type_lte?: InputMaybe<Scalars["String"]>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_not_ends_with?: InputMaybe<Scalars["String"]>;
  type_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<Scalars["String"]>>;
  type_not_starts_with?: InputMaybe<Scalars["String"]>;
  type_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type_starts_with?: InputMaybe<Scalars["String"]>;
  type_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ConsumableInfo_OrderBy {
  Id = "id",
  Size = "size",
  Type = "type",
}

export type Craft = {
  __typename?: "Craft";
  difficulty: Difficulty;
  endTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  outcome?: Maybe<Outcome>;
  random: Random;
  status: Status;
  token: Token;
  user: User;
};

export type Craft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  difficulty?: InputMaybe<Difficulty>;
  difficulty_in?: InputMaybe<Array<Difficulty>>;
  difficulty_not?: InputMaybe<Difficulty>;
  difficulty_not_in?: InputMaybe<Array<Difficulty>>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  outcome?: InputMaybe<Scalars["String"]>;
  outcome_contains?: InputMaybe<Scalars["String"]>;
  outcome_contains_nocase?: InputMaybe<Scalars["String"]>;
  outcome_ends_with?: InputMaybe<Scalars["String"]>;
  outcome_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  outcome_gt?: InputMaybe<Scalars["String"]>;
  outcome_gte?: InputMaybe<Scalars["String"]>;
  outcome_in?: InputMaybe<Array<Scalars["String"]>>;
  outcome_lt?: InputMaybe<Scalars["String"]>;
  outcome_lte?: InputMaybe<Scalars["String"]>;
  outcome_not?: InputMaybe<Scalars["String"]>;
  outcome_not_contains?: InputMaybe<Scalars["String"]>;
  outcome_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  outcome_not_ends_with?: InputMaybe<Scalars["String"]>;
  outcome_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  outcome_not_in?: InputMaybe<Array<Scalars["String"]>>;
  outcome_not_starts_with?: InputMaybe<Scalars["String"]>;
  outcome_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  outcome_starts_with?: InputMaybe<Scalars["String"]>;
  outcome_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  random?: InputMaybe<Scalars["String"]>;
  random_contains?: InputMaybe<Scalars["String"]>;
  random_contains_nocase?: InputMaybe<Scalars["String"]>;
  random_ends_with?: InputMaybe<Scalars["String"]>;
  random_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  random_gt?: InputMaybe<Scalars["String"]>;
  random_gte?: InputMaybe<Scalars["String"]>;
  random_in?: InputMaybe<Array<Scalars["String"]>>;
  random_lt?: InputMaybe<Scalars["String"]>;
  random_lte?: InputMaybe<Scalars["String"]>;
  random_not?: InputMaybe<Scalars["String"]>;
  random_not_contains?: InputMaybe<Scalars["String"]>;
  random_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  random_not_ends_with?: InputMaybe<Scalars["String"]>;
  random_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  random_not_in?: InputMaybe<Array<Scalars["String"]>>;
  random_not_starts_with?: InputMaybe<Scalars["String"]>;
  random_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  random_starts_with?: InputMaybe<Scalars["String"]>;
  random_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Status>;
  status_in?: InputMaybe<Array<Status>>;
  status_not?: InputMaybe<Status>;
  status_not_in?: InputMaybe<Array<Status>>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Craft_OrderBy {
  Difficulty = "difficulty",
  EndTimestamp = "endTimestamp",
  Id = "id",
  Outcome = "outcome",
  Random = "random",
  Status = "status",
  Token = "token",
  User = "user",
}

export type Deposit = {
  __typename?: "Deposit";
  amount: Scalars["BigInt"];
  depositId: Scalars["BigInt"];
  endTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  lock: Scalars["Int"];
  mine: AtlasMine;
  user: User;
  withdrawal?: Maybe<Withdraw>;
};

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositId?: InputMaybe<Scalars["BigInt"]>;
  depositId_gt?: InputMaybe<Scalars["BigInt"]>;
  depositId_gte?: InputMaybe<Scalars["BigInt"]>;
  depositId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositId_lt?: InputMaybe<Scalars["BigInt"]>;
  depositId_lte?: InputMaybe<Scalars["BigInt"]>;
  depositId_not?: InputMaybe<Scalars["BigInt"]>;
  depositId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lock?: InputMaybe<Scalars["Int"]>;
  lock_gt?: InputMaybe<Scalars["Int"]>;
  lock_gte?: InputMaybe<Scalars["Int"]>;
  lock_in?: InputMaybe<Array<Scalars["Int"]>>;
  lock_lt?: InputMaybe<Scalars["Int"]>;
  lock_lte?: InputMaybe<Scalars["Int"]>;
  lock_not?: InputMaybe<Scalars["Int"]>;
  lock_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  mine?: InputMaybe<Scalars["String"]>;
  mine_contains?: InputMaybe<Scalars["String"]>;
  mine_contains_nocase?: InputMaybe<Scalars["String"]>;
  mine_ends_with?: InputMaybe<Scalars["String"]>;
  mine_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  mine_gt?: InputMaybe<Scalars["String"]>;
  mine_gte?: InputMaybe<Scalars["String"]>;
  mine_in?: InputMaybe<Array<Scalars["String"]>>;
  mine_lt?: InputMaybe<Scalars["String"]>;
  mine_lte?: InputMaybe<Scalars["String"]>;
  mine_not?: InputMaybe<Scalars["String"]>;
  mine_not_contains?: InputMaybe<Scalars["String"]>;
  mine_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  mine_not_ends_with?: InputMaybe<Scalars["String"]>;
  mine_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  mine_not_in?: InputMaybe<Array<Scalars["String"]>>;
  mine_not_starts_with?: InputMaybe<Scalars["String"]>;
  mine_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  mine_starts_with?: InputMaybe<Scalars["String"]>;
  mine_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  withdrawal?: InputMaybe<Scalars["String"]>;
  withdrawal_contains?: InputMaybe<Scalars["String"]>;
  withdrawal_contains_nocase?: InputMaybe<Scalars["String"]>;
  withdrawal_ends_with?: InputMaybe<Scalars["String"]>;
  withdrawal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  withdrawal_gt?: InputMaybe<Scalars["String"]>;
  withdrawal_gte?: InputMaybe<Scalars["String"]>;
  withdrawal_in?: InputMaybe<Array<Scalars["String"]>>;
  withdrawal_lt?: InputMaybe<Scalars["String"]>;
  withdrawal_lte?: InputMaybe<Scalars["String"]>;
  withdrawal_not?: InputMaybe<Scalars["String"]>;
  withdrawal_not_contains?: InputMaybe<Scalars["String"]>;
  withdrawal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  withdrawal_not_ends_with?: InputMaybe<Scalars["String"]>;
  withdrawal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  withdrawal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  withdrawal_not_starts_with?: InputMaybe<Scalars["String"]>;
  withdrawal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  withdrawal_starts_with?: InputMaybe<Scalars["String"]>;
  withdrawal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Deposit_OrderBy {
  Amount = "amount",
  DepositId = "depositId",
  EndTimestamp = "endTimestamp",
  Id = "id",
  Lock = "lock",
  Mine = "mine",
  User = "user",
  Withdrawal = "withdrawal",
}

export enum Difficulty {
  Easy = "Easy",
  Hard = "Hard",
  Medium = "Medium",
}

export type LegionInfo = Metadata & {
  __typename?: "LegionInfo";
  boost: Scalars["String"];
  constellation?: Maybe<Constellation>;
  cooldown?: Maybe<Scalars["BigInt"]>;
  crafting: Scalars["Int"];
  craftingXp: Scalars["Int"];
  id: Scalars["ID"];
  questing: Scalars["Int"];
  questingXp: Scalars["Int"];
  rarity: Scalars["String"];
  /** This is `class`, but we can't use that word */
  role: Scalars["String"];
  summons: Scalars["BigInt"];
  type: Scalars["String"];
};

export type LegionInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  boost?: InputMaybe<Scalars["String"]>;
  boost_contains?: InputMaybe<Scalars["String"]>;
  boost_contains_nocase?: InputMaybe<Scalars["String"]>;
  boost_ends_with?: InputMaybe<Scalars["String"]>;
  boost_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_gt?: InputMaybe<Scalars["String"]>;
  boost_gte?: InputMaybe<Scalars["String"]>;
  boost_in?: InputMaybe<Array<Scalars["String"]>>;
  boost_lt?: InputMaybe<Scalars["String"]>;
  boost_lte?: InputMaybe<Scalars["String"]>;
  boost_not?: InputMaybe<Scalars["String"]>;
  boost_not_contains?: InputMaybe<Scalars["String"]>;
  boost_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  boost_not_ends_with?: InputMaybe<Scalars["String"]>;
  boost_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_not_in?: InputMaybe<Array<Scalars["String"]>>;
  boost_not_starts_with?: InputMaybe<Scalars["String"]>;
  boost_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_starts_with?: InputMaybe<Scalars["String"]>;
  boost_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  constellation?: InputMaybe<Scalars["String"]>;
  constellation_contains?: InputMaybe<Scalars["String"]>;
  constellation_contains_nocase?: InputMaybe<Scalars["String"]>;
  constellation_ends_with?: InputMaybe<Scalars["String"]>;
  constellation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  constellation_gt?: InputMaybe<Scalars["String"]>;
  constellation_gte?: InputMaybe<Scalars["String"]>;
  constellation_in?: InputMaybe<Array<Scalars["String"]>>;
  constellation_lt?: InputMaybe<Scalars["String"]>;
  constellation_lte?: InputMaybe<Scalars["String"]>;
  constellation_not?: InputMaybe<Scalars["String"]>;
  constellation_not_contains?: InputMaybe<Scalars["String"]>;
  constellation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  constellation_not_ends_with?: InputMaybe<Scalars["String"]>;
  constellation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  constellation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  constellation_not_starts_with?: InputMaybe<Scalars["String"]>;
  constellation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  constellation_starts_with?: InputMaybe<Scalars["String"]>;
  constellation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  cooldown?: InputMaybe<Scalars["BigInt"]>;
  cooldown_gt?: InputMaybe<Scalars["BigInt"]>;
  cooldown_gte?: InputMaybe<Scalars["BigInt"]>;
  cooldown_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cooldown_lt?: InputMaybe<Scalars["BigInt"]>;
  cooldown_lte?: InputMaybe<Scalars["BigInt"]>;
  cooldown_not?: InputMaybe<Scalars["BigInt"]>;
  cooldown_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  crafting?: InputMaybe<Scalars["Int"]>;
  craftingXp?: InputMaybe<Scalars["Int"]>;
  craftingXp_gt?: InputMaybe<Scalars["Int"]>;
  craftingXp_gte?: InputMaybe<Scalars["Int"]>;
  craftingXp_in?: InputMaybe<Array<Scalars["Int"]>>;
  craftingXp_lt?: InputMaybe<Scalars["Int"]>;
  craftingXp_lte?: InputMaybe<Scalars["Int"]>;
  craftingXp_not?: InputMaybe<Scalars["Int"]>;
  craftingXp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  crafting_gt?: InputMaybe<Scalars["Int"]>;
  crafting_gte?: InputMaybe<Scalars["Int"]>;
  crafting_in?: InputMaybe<Array<Scalars["Int"]>>;
  crafting_lt?: InputMaybe<Scalars["Int"]>;
  crafting_lte?: InputMaybe<Scalars["Int"]>;
  crafting_not?: InputMaybe<Scalars["Int"]>;
  crafting_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  questing?: InputMaybe<Scalars["Int"]>;
  questingXp?: InputMaybe<Scalars["Int"]>;
  questingXp_gt?: InputMaybe<Scalars["Int"]>;
  questingXp_gte?: InputMaybe<Scalars["Int"]>;
  questingXp_in?: InputMaybe<Array<Scalars["Int"]>>;
  questingXp_lt?: InputMaybe<Scalars["Int"]>;
  questingXp_lte?: InputMaybe<Scalars["Int"]>;
  questingXp_not?: InputMaybe<Scalars["Int"]>;
  questingXp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  questing_gt?: InputMaybe<Scalars["Int"]>;
  questing_gte?: InputMaybe<Scalars["Int"]>;
  questing_in?: InputMaybe<Array<Scalars["Int"]>>;
  questing_lt?: InputMaybe<Scalars["Int"]>;
  questing_lte?: InputMaybe<Scalars["Int"]>;
  questing_not?: InputMaybe<Scalars["Int"]>;
  questing_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  rarity?: InputMaybe<Scalars["String"]>;
  rarity_contains?: InputMaybe<Scalars["String"]>;
  rarity_contains_nocase?: InputMaybe<Scalars["String"]>;
  rarity_ends_with?: InputMaybe<Scalars["String"]>;
  rarity_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rarity_gt?: InputMaybe<Scalars["String"]>;
  rarity_gte?: InputMaybe<Scalars["String"]>;
  rarity_in?: InputMaybe<Array<Scalars["String"]>>;
  rarity_lt?: InputMaybe<Scalars["String"]>;
  rarity_lte?: InputMaybe<Scalars["String"]>;
  rarity_not?: InputMaybe<Scalars["String"]>;
  rarity_not_contains?: InputMaybe<Scalars["String"]>;
  rarity_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  rarity_not_ends_with?: InputMaybe<Scalars["String"]>;
  rarity_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rarity_not_in?: InputMaybe<Array<Scalars["String"]>>;
  rarity_not_starts_with?: InputMaybe<Scalars["String"]>;
  rarity_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rarity_starts_with?: InputMaybe<Scalars["String"]>;
  rarity_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
  role_contains?: InputMaybe<Scalars["String"]>;
  role_contains_nocase?: InputMaybe<Scalars["String"]>;
  role_ends_with?: InputMaybe<Scalars["String"]>;
  role_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  role_gt?: InputMaybe<Scalars["String"]>;
  role_gte?: InputMaybe<Scalars["String"]>;
  role_in?: InputMaybe<Array<Scalars["String"]>>;
  role_lt?: InputMaybe<Scalars["String"]>;
  role_lte?: InputMaybe<Scalars["String"]>;
  role_not?: InputMaybe<Scalars["String"]>;
  role_not_contains?: InputMaybe<Scalars["String"]>;
  role_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  role_not_ends_with?: InputMaybe<Scalars["String"]>;
  role_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  role_not_in?: InputMaybe<Array<Scalars["String"]>>;
  role_not_starts_with?: InputMaybe<Scalars["String"]>;
  role_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  role_starts_with?: InputMaybe<Scalars["String"]>;
  role_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  summons?: InputMaybe<Scalars["BigInt"]>;
  summons_gt?: InputMaybe<Scalars["BigInt"]>;
  summons_gte?: InputMaybe<Scalars["BigInt"]>;
  summons_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  summons_lt?: InputMaybe<Scalars["BigInt"]>;
  summons_lte?: InputMaybe<Scalars["BigInt"]>;
  summons_not?: InputMaybe<Scalars["BigInt"]>;
  summons_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_ends_with?: InputMaybe<Scalars["String"]>;
  type_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_gt?: InputMaybe<Scalars["String"]>;
  type_gte?: InputMaybe<Scalars["String"]>;
  type_in?: InputMaybe<Array<Scalars["String"]>>;
  type_lt?: InputMaybe<Scalars["String"]>;
  type_lte?: InputMaybe<Scalars["String"]>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_not_ends_with?: InputMaybe<Scalars["String"]>;
  type_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<Scalars["String"]>>;
  type_not_starts_with?: InputMaybe<Scalars["String"]>;
  type_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type_starts_with?: InputMaybe<Scalars["String"]>;
  type_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum LegionInfo_OrderBy {
  Boost = "boost",
  Constellation = "constellation",
  Cooldown = "cooldown",
  Crafting = "crafting",
  CraftingXp = "craftingXp",
  Id = "id",
  Questing = "questing",
  QuestingXp = "questingXp",
  Rarity = "rarity",
  Role = "role",
  Summons = "summons",
  Type = "type",
}

export type Metadata = {
  id: Scalars["ID"];
};

export type Metadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum Metadata_OrderBy {
  Id = "id",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Outcome = {
  __typename?: "Outcome";
  broken: Array<Broken>;
  id: Scalars["ID"];
  magicReturned: Scalars["BigInt"];
  reward?: Maybe<Token>;
  rewardAmount: Scalars["Int"];
  success: Scalars["Boolean"];
};

export type OutcomeBrokenArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Broken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Broken_Filter>;
};

export type Outcome_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  magicReturned?: InputMaybe<Scalars["BigInt"]>;
  magicReturned_gt?: InputMaybe<Scalars["BigInt"]>;
  magicReturned_gte?: InputMaybe<Scalars["BigInt"]>;
  magicReturned_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  magicReturned_lt?: InputMaybe<Scalars["BigInt"]>;
  magicReturned_lte?: InputMaybe<Scalars["BigInt"]>;
  magicReturned_not?: InputMaybe<Scalars["BigInt"]>;
  magicReturned_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reward?: InputMaybe<Scalars["String"]>;
  rewardAmount?: InputMaybe<Scalars["Int"]>;
  rewardAmount_gt?: InputMaybe<Scalars["Int"]>;
  rewardAmount_gte?: InputMaybe<Scalars["Int"]>;
  rewardAmount_in?: InputMaybe<Array<Scalars["Int"]>>;
  rewardAmount_lt?: InputMaybe<Scalars["Int"]>;
  rewardAmount_lte?: InputMaybe<Scalars["Int"]>;
  rewardAmount_not?: InputMaybe<Scalars["Int"]>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  reward_contains?: InputMaybe<Scalars["String"]>;
  reward_contains_nocase?: InputMaybe<Scalars["String"]>;
  reward_ends_with?: InputMaybe<Scalars["String"]>;
  reward_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reward_gt?: InputMaybe<Scalars["String"]>;
  reward_gte?: InputMaybe<Scalars["String"]>;
  reward_in?: InputMaybe<Array<Scalars["String"]>>;
  reward_lt?: InputMaybe<Scalars["String"]>;
  reward_lte?: InputMaybe<Scalars["String"]>;
  reward_not?: InputMaybe<Scalars["String"]>;
  reward_not_contains?: InputMaybe<Scalars["String"]>;
  reward_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reward_not_ends_with?: InputMaybe<Scalars["String"]>;
  reward_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reward_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reward_not_starts_with?: InputMaybe<Scalars["String"]>;
  reward_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reward_starts_with?: InputMaybe<Scalars["String"]>;
  reward_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  success?: InputMaybe<Scalars["Boolean"]>;
  success_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  success_not?: InputMaybe<Scalars["Boolean"]>;
  success_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
};

export enum Outcome_OrderBy {
  Broken = "broken",
  Id = "id",
  MagicReturned = "magicReturned",
  Reward = "reward",
  RewardAmount = "rewardAmount",
  Success = "success",
}

export type Pilgrimage = {
  __typename?: "Pilgrimage";
  endTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  pilgrimageId: Scalars["BigInt"];
  quantity: Scalars["BigInt"];
  token: Token;
  user: User;
};

export type Pilgrimage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  pilgrimageId?: InputMaybe<Scalars["BigInt"]>;
  pilgrimageId_gt?: InputMaybe<Scalars["BigInt"]>;
  pilgrimageId_gte?: InputMaybe<Scalars["BigInt"]>;
  pilgrimageId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  pilgrimageId_lt?: InputMaybe<Scalars["BigInt"]>;
  pilgrimageId_lte?: InputMaybe<Scalars["BigInt"]>;
  pilgrimageId_not?: InputMaybe<Scalars["BigInt"]>;
  pilgrimageId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quantity?: InputMaybe<Scalars["BigInt"]>;
  quantity_gt?: InputMaybe<Scalars["BigInt"]>;
  quantity_gte?: InputMaybe<Scalars["BigInt"]>;
  quantity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quantity_lt?: InputMaybe<Scalars["BigInt"]>;
  quantity_lte?: InputMaybe<Scalars["BigInt"]>;
  quantity_not?: InputMaybe<Scalars["BigInt"]>;
  quantity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Pilgrimage_OrderBy {
  EndTimestamp = "endTimestamp",
  Id = "id",
  PilgrimageId = "pilgrimageId",
  Quantity = "quantity",
  Token = "token",
  User = "user",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  atlasMine?: Maybe<AtlasMine>;
  atlasMines: Array<AtlasMine>;
  broken?: Maybe<Broken>;
  brokens: Array<Broken>;
  constellation?: Maybe<Constellation>;
  constellations: Array<Constellation>;
  consumableInfo?: Maybe<ConsumableInfo>;
  consumableInfos: Array<ConsumableInfo>;
  craft?: Maybe<Craft>;
  crafts: Array<Craft>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  legionInfo?: Maybe<LegionInfo>;
  legionInfos: Array<LegionInfo>;
  metadata: Array<Metadata>;
  outcome?: Maybe<Outcome>;
  outcomes: Array<Outcome>;
  pilgrimage?: Maybe<Pilgrimage>;
  pilgrimages: Array<Pilgrimage>;
  quest?: Maybe<Quest>;
  quests: Array<Quest>;
  random?: Maybe<Random>;
  randoms: Array<Random>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  seeded?: Maybe<Seeded>;
  seededs: Array<Seeded>;
  stakedToken?: Maybe<StakedToken>;
  stakedTokens: Array<StakedToken>;
  summon?: Maybe<Summon>;
  summonFatigue?: Maybe<_SummonFatigue>;
  summonFatigues: Array<_SummonFatigue>;
  summoningCircle?: Maybe<SummoningCircle>;
  summoningCircles: Array<SummoningCircle>;
  summons: Array<Summon>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  treasureInfo?: Maybe<TreasureInfo>;
  treasureInfos: Array<TreasureInfo>;
  user?: Maybe<User>;
  userApproval?: Maybe<UserApproval>;
  userApprovals: Array<UserApproval>;
  userToken?: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  users: Array<User>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};

export type QueryAtlasMineArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtlasMinesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AtlasMine_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtlasMine_Filter>;
};

export type QueryBrokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBrokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Broken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Broken_Filter>;
};

export type QueryConstellationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryConstellationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Constellation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Constellation_Filter>;
};

export type QueryConsumableInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryConsumableInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ConsumableInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConsumableInfo_Filter>;
};

export type QueryCraftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCraftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Craft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Craft_Filter>;
};

export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type QueryLegionInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLegionInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LegionInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LegionInfo_Filter>;
};

export type QueryMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Metadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Metadata_Filter>;
};

export type QueryOutcomeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOutcomesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Outcome_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Outcome_Filter>;
};

export type QueryPilgrimageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPilgrimagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pilgrimage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pilgrimage_Filter>;
};

export type QueryQuestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryQuestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Quest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Quest_Filter>;
};

export type QueryRandomArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRandomsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Random_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Random_Filter>;
};

export type QueryRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};

export type QuerySeededArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySeededsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Seeded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seeded_Filter>;
};

export type QueryStakedTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStakedTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StakedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakedToken_Filter>;
};

export type QuerySummonArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySummonFatigueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySummonFatiguesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<_SummonFatigue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_SummonFatigue_Filter>;
};

export type QuerySummoningCircleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySummoningCirclesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SummoningCircle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SummoningCircle_Filter>;
};

export type QuerySummonsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Summon_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Summon_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryTreasureInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTreasureInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TreasureInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasureInfo_Filter>;
};

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserApproval_Filter>;
};

export type QueryUserTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserToken_Filter>;
};

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type QueryWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdraw_Filter>;
};

export type Quest = {
  __typename?: "Quest";
  difficulty: Difficulty;
  endTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  random: Random;
  reward?: Maybe<Reward>;
  status: Status;
  token: Token;
  user: User;
};

export type Quest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  difficulty?: InputMaybe<Difficulty>;
  difficulty_in?: InputMaybe<Array<Difficulty>>;
  difficulty_not?: InputMaybe<Difficulty>;
  difficulty_not_in?: InputMaybe<Array<Difficulty>>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  random?: InputMaybe<Scalars["String"]>;
  random_contains?: InputMaybe<Scalars["String"]>;
  random_contains_nocase?: InputMaybe<Scalars["String"]>;
  random_ends_with?: InputMaybe<Scalars["String"]>;
  random_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  random_gt?: InputMaybe<Scalars["String"]>;
  random_gte?: InputMaybe<Scalars["String"]>;
  random_in?: InputMaybe<Array<Scalars["String"]>>;
  random_lt?: InputMaybe<Scalars["String"]>;
  random_lte?: InputMaybe<Scalars["String"]>;
  random_not?: InputMaybe<Scalars["String"]>;
  random_not_contains?: InputMaybe<Scalars["String"]>;
  random_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  random_not_ends_with?: InputMaybe<Scalars["String"]>;
  random_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  random_not_in?: InputMaybe<Array<Scalars["String"]>>;
  random_not_starts_with?: InputMaybe<Scalars["String"]>;
  random_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  random_starts_with?: InputMaybe<Scalars["String"]>;
  random_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reward?: InputMaybe<Scalars["String"]>;
  reward_contains?: InputMaybe<Scalars["String"]>;
  reward_contains_nocase?: InputMaybe<Scalars["String"]>;
  reward_ends_with?: InputMaybe<Scalars["String"]>;
  reward_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reward_gt?: InputMaybe<Scalars["String"]>;
  reward_gte?: InputMaybe<Scalars["String"]>;
  reward_in?: InputMaybe<Array<Scalars["String"]>>;
  reward_lt?: InputMaybe<Scalars["String"]>;
  reward_lte?: InputMaybe<Scalars["String"]>;
  reward_not?: InputMaybe<Scalars["String"]>;
  reward_not_contains?: InputMaybe<Scalars["String"]>;
  reward_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reward_not_ends_with?: InputMaybe<Scalars["String"]>;
  reward_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reward_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reward_not_starts_with?: InputMaybe<Scalars["String"]>;
  reward_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reward_starts_with?: InputMaybe<Scalars["String"]>;
  reward_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Status>;
  status_in?: InputMaybe<Array<Status>>;
  status_not?: InputMaybe<Status>;
  status_not_in?: InputMaybe<Array<Status>>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Quest_OrderBy {
  Difficulty = "difficulty",
  EndTimestamp = "endTimestamp",
  Id = "id",
  Random = "random",
  Reward = "reward",
  Status = "status",
  Token = "token",
  User = "user",
}

export type Random = {
  __typename?: "Random";
  /** Set for crafting */
  craft?: Maybe<Craft>;
  id: Scalars["ID"];
  /** Set for questing */
  quest?: Maybe<Quest>;
  requestId: Scalars["BigInt"];
  seeded?: Maybe<Seeded>;
  /** Set for summoning */
  summon?: Maybe<Summon>;
};

export type Random_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  craft?: InputMaybe<Scalars["String"]>;
  craft_contains?: InputMaybe<Scalars["String"]>;
  craft_contains_nocase?: InputMaybe<Scalars["String"]>;
  craft_ends_with?: InputMaybe<Scalars["String"]>;
  craft_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  craft_gt?: InputMaybe<Scalars["String"]>;
  craft_gte?: InputMaybe<Scalars["String"]>;
  craft_in?: InputMaybe<Array<Scalars["String"]>>;
  craft_lt?: InputMaybe<Scalars["String"]>;
  craft_lte?: InputMaybe<Scalars["String"]>;
  craft_not?: InputMaybe<Scalars["String"]>;
  craft_not_contains?: InputMaybe<Scalars["String"]>;
  craft_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  craft_not_ends_with?: InputMaybe<Scalars["String"]>;
  craft_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  craft_not_in?: InputMaybe<Array<Scalars["String"]>>;
  craft_not_starts_with?: InputMaybe<Scalars["String"]>;
  craft_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  craft_starts_with?: InputMaybe<Scalars["String"]>;
  craft_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  quest?: InputMaybe<Scalars["String"]>;
  quest_contains?: InputMaybe<Scalars["String"]>;
  quest_contains_nocase?: InputMaybe<Scalars["String"]>;
  quest_ends_with?: InputMaybe<Scalars["String"]>;
  quest_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  quest_gt?: InputMaybe<Scalars["String"]>;
  quest_gte?: InputMaybe<Scalars["String"]>;
  quest_in?: InputMaybe<Array<Scalars["String"]>>;
  quest_lt?: InputMaybe<Scalars["String"]>;
  quest_lte?: InputMaybe<Scalars["String"]>;
  quest_not?: InputMaybe<Scalars["String"]>;
  quest_not_contains?: InputMaybe<Scalars["String"]>;
  quest_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  quest_not_ends_with?: InputMaybe<Scalars["String"]>;
  quest_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  quest_not_in?: InputMaybe<Array<Scalars["String"]>>;
  quest_not_starts_with?: InputMaybe<Scalars["String"]>;
  quest_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  quest_starts_with?: InputMaybe<Scalars["String"]>;
  quest_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  requestId?: InputMaybe<Scalars["BigInt"]>;
  requestId_gt?: InputMaybe<Scalars["BigInt"]>;
  requestId_gte?: InputMaybe<Scalars["BigInt"]>;
  requestId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  requestId_lt?: InputMaybe<Scalars["BigInt"]>;
  requestId_lte?: InputMaybe<Scalars["BigInt"]>;
  requestId_not?: InputMaybe<Scalars["BigInt"]>;
  requestId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  seeded?: InputMaybe<Scalars["String"]>;
  seeded_contains?: InputMaybe<Scalars["String"]>;
  seeded_contains_nocase?: InputMaybe<Scalars["String"]>;
  seeded_ends_with?: InputMaybe<Scalars["String"]>;
  seeded_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  seeded_gt?: InputMaybe<Scalars["String"]>;
  seeded_gte?: InputMaybe<Scalars["String"]>;
  seeded_in?: InputMaybe<Array<Scalars["String"]>>;
  seeded_lt?: InputMaybe<Scalars["String"]>;
  seeded_lte?: InputMaybe<Scalars["String"]>;
  seeded_not?: InputMaybe<Scalars["String"]>;
  seeded_not_contains?: InputMaybe<Scalars["String"]>;
  seeded_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  seeded_not_ends_with?: InputMaybe<Scalars["String"]>;
  seeded_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  seeded_not_in?: InputMaybe<Array<Scalars["String"]>>;
  seeded_not_starts_with?: InputMaybe<Scalars["String"]>;
  seeded_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  seeded_starts_with?: InputMaybe<Scalars["String"]>;
  seeded_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  summon?: InputMaybe<Scalars["String"]>;
  summon_contains?: InputMaybe<Scalars["String"]>;
  summon_contains_nocase?: InputMaybe<Scalars["String"]>;
  summon_ends_with?: InputMaybe<Scalars["String"]>;
  summon_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  summon_gt?: InputMaybe<Scalars["String"]>;
  summon_gte?: InputMaybe<Scalars["String"]>;
  summon_in?: InputMaybe<Array<Scalars["String"]>>;
  summon_lt?: InputMaybe<Scalars["String"]>;
  summon_lte?: InputMaybe<Scalars["String"]>;
  summon_not?: InputMaybe<Scalars["String"]>;
  summon_not_contains?: InputMaybe<Scalars["String"]>;
  summon_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  summon_not_ends_with?: InputMaybe<Scalars["String"]>;
  summon_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  summon_not_in?: InputMaybe<Array<Scalars["String"]>>;
  summon_not_starts_with?: InputMaybe<Scalars["String"]>;
  summon_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  summon_starts_with?: InputMaybe<Scalars["String"]>;
  summon_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Random_OrderBy {
  Craft = "craft",
  Id = "id",
  Quest = "quest",
  RequestId = "requestId",
  Seeded = "seeded",
  Summon = "summon",
}

export enum Rarity {
  Common = "Common",
  Epic = "Epic",
  Legendary = "Legendary",
  None = "None",
  Rare = "Rare",
  Special = "Special",
  Uncommon = "Uncommon",
}

export type Reward = {
  __typename?: "Reward";
  crystalShards: Scalars["Int"];
  id: Scalars["ID"];
  starlights: Scalars["Int"];
  treasure?: Maybe<Token>;
  universalLocks: Scalars["Int"];
};

export type Reward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  crystalShards?: InputMaybe<Scalars["Int"]>;
  crystalShards_gt?: InputMaybe<Scalars["Int"]>;
  crystalShards_gte?: InputMaybe<Scalars["Int"]>;
  crystalShards_in?: InputMaybe<Array<Scalars["Int"]>>;
  crystalShards_lt?: InputMaybe<Scalars["Int"]>;
  crystalShards_lte?: InputMaybe<Scalars["Int"]>;
  crystalShards_not?: InputMaybe<Scalars["Int"]>;
  crystalShards_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  starlights?: InputMaybe<Scalars["Int"]>;
  starlights_gt?: InputMaybe<Scalars["Int"]>;
  starlights_gte?: InputMaybe<Scalars["Int"]>;
  starlights_in?: InputMaybe<Array<Scalars["Int"]>>;
  starlights_lt?: InputMaybe<Scalars["Int"]>;
  starlights_lte?: InputMaybe<Scalars["Int"]>;
  starlights_not?: InputMaybe<Scalars["Int"]>;
  starlights_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  treasure?: InputMaybe<Scalars["String"]>;
  treasure_contains?: InputMaybe<Scalars["String"]>;
  treasure_contains_nocase?: InputMaybe<Scalars["String"]>;
  treasure_ends_with?: InputMaybe<Scalars["String"]>;
  treasure_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  treasure_gt?: InputMaybe<Scalars["String"]>;
  treasure_gte?: InputMaybe<Scalars["String"]>;
  treasure_in?: InputMaybe<Array<Scalars["String"]>>;
  treasure_lt?: InputMaybe<Scalars["String"]>;
  treasure_lte?: InputMaybe<Scalars["String"]>;
  treasure_not?: InputMaybe<Scalars["String"]>;
  treasure_not_contains?: InputMaybe<Scalars["String"]>;
  treasure_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  treasure_not_ends_with?: InputMaybe<Scalars["String"]>;
  treasure_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  treasure_not_in?: InputMaybe<Array<Scalars["String"]>>;
  treasure_not_starts_with?: InputMaybe<Scalars["String"]>;
  treasure_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  treasure_starts_with?: InputMaybe<Scalars["String"]>;
  treasure_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  universalLocks?: InputMaybe<Scalars["Int"]>;
  universalLocks_gt?: InputMaybe<Scalars["Int"]>;
  universalLocks_gte?: InputMaybe<Scalars["Int"]>;
  universalLocks_in?: InputMaybe<Array<Scalars["Int"]>>;
  universalLocks_lt?: InputMaybe<Scalars["Int"]>;
  universalLocks_lte?: InputMaybe<Scalars["Int"]>;
  universalLocks_not?: InputMaybe<Scalars["Int"]>;
  universalLocks_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum Reward_OrderBy {
  CrystalShards = "crystalShards",
  Id = "id",
  Starlights = "starlights",
  Treasure = "treasure",
  UniversalLocks = "universalLocks",
}

export type Seeded = {
  __typename?: "Seeded";
  id: Scalars["ID"];
  randoms: Array<Random>;
};

export type SeededRandomsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Random_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Random_Filter>;
};

export type Seeded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  randoms?: InputMaybe<Array<Scalars["String"]>>;
  randoms_contains?: InputMaybe<Array<Scalars["String"]>>;
  randoms_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  randoms_not?: InputMaybe<Array<Scalars["String"]>>;
  randoms_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  randoms_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
};

export enum Seeded_OrderBy {
  Id = "id",
  Randoms = "randoms",
}

export enum Size {
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
}

export type StakedToken = {
  __typename?: "StakedToken";
  id: Scalars["ID"];
  quantity: Scalars["BigInt"];
  token: Token;
  user: User;
};

export type StakedToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  quantity?: InputMaybe<Scalars["BigInt"]>;
  quantity_gt?: InputMaybe<Scalars["BigInt"]>;
  quantity_gte?: InputMaybe<Scalars["BigInt"]>;
  quantity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quantity_lt?: InputMaybe<Scalars["BigInt"]>;
  quantity_lte?: InputMaybe<Scalars["BigInt"]>;
  quantity_not?: InputMaybe<Scalars["BigInt"]>;
  quantity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum StakedToken_OrderBy {
  Id = "id",
  Quantity = "quantity",
  Token = "token",
  User = "user",
}

export enum Status {
  Finished = "Finished",
  Idle = "Idle",
  Revealable = "Revealable",
  Revealed = "Revealed",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  atlasMine?: Maybe<AtlasMine>;
  atlasMines: Array<AtlasMine>;
  broken?: Maybe<Broken>;
  brokens: Array<Broken>;
  constellation?: Maybe<Constellation>;
  constellations: Array<Constellation>;
  consumableInfo?: Maybe<ConsumableInfo>;
  consumableInfos: Array<ConsumableInfo>;
  craft?: Maybe<Craft>;
  crafts: Array<Craft>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  legionInfo?: Maybe<LegionInfo>;
  legionInfos: Array<LegionInfo>;
  metadata: Array<Metadata>;
  outcome?: Maybe<Outcome>;
  outcomes: Array<Outcome>;
  pilgrimage?: Maybe<Pilgrimage>;
  pilgrimages: Array<Pilgrimage>;
  quest?: Maybe<Quest>;
  quests: Array<Quest>;
  random?: Maybe<Random>;
  randoms: Array<Random>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  seeded?: Maybe<Seeded>;
  seededs: Array<Seeded>;
  stakedToken?: Maybe<StakedToken>;
  stakedTokens: Array<StakedToken>;
  summon?: Maybe<Summon>;
  summonFatigue?: Maybe<_SummonFatigue>;
  summonFatigues: Array<_SummonFatigue>;
  summoningCircle?: Maybe<SummoningCircle>;
  summoningCircles: Array<SummoningCircle>;
  summons: Array<Summon>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  treasureInfo?: Maybe<TreasureInfo>;
  treasureInfos: Array<TreasureInfo>;
  user?: Maybe<User>;
  userApproval?: Maybe<UserApproval>;
  userApprovals: Array<UserApproval>;
  userToken?: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  users: Array<User>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};

export type SubscriptionAtlasMineArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtlasMinesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AtlasMine_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtlasMine_Filter>;
};

export type SubscriptionBrokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBrokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Broken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Broken_Filter>;
};

export type SubscriptionConstellationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionConstellationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Constellation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Constellation_Filter>;
};

export type SubscriptionConsumableInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionConsumableInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ConsumableInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConsumableInfo_Filter>;
};

export type SubscriptionCraftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCraftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Craft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Craft_Filter>;
};

export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type SubscriptionLegionInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLegionInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LegionInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LegionInfo_Filter>;
};

export type SubscriptionMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Metadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Metadata_Filter>;
};

export type SubscriptionOutcomeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOutcomesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Outcome_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Outcome_Filter>;
};

export type SubscriptionPilgrimageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPilgrimagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pilgrimage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pilgrimage_Filter>;
};

export type SubscriptionQuestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionQuestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Quest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Quest_Filter>;
};

export type SubscriptionRandomArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRandomsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Random_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Random_Filter>;
};

export type SubscriptionRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};

export type SubscriptionSeededArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSeededsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Seeded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seeded_Filter>;
};

export type SubscriptionStakedTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStakedTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StakedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakedToken_Filter>;
};

export type SubscriptionSummonArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSummonFatigueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSummonFatiguesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<_SummonFatigue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_SummonFatigue_Filter>;
};

export type SubscriptionSummoningCircleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSummoningCirclesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SummoningCircle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SummoningCircle_Filter>;
};

export type SubscriptionSummonsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Summon_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Summon_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionTreasureInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTreasureInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TreasureInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasureInfo_Filter>;
};

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserApproval_Filter>;
};

export type SubscriptionUserTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserToken_Filter>;
};

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type SubscriptionWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdraw_Filter>;
};

export type Summon = {
  __typename?: "Summon";
  endTimestamp?: Maybe<Scalars["BigInt"]>;
  id: Scalars["ID"];
  prismUsed?: Maybe<Token>;
  random: Random;
  resultToken?: Maybe<Token>;
  status: Status;
  success?: Maybe<Scalars["Boolean"]>;
  token: Token;
  user: User;
};

export type Summon_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  prismUsed?: InputMaybe<Scalars["String"]>;
  prismUsed_contains?: InputMaybe<Scalars["String"]>;
  prismUsed_contains_nocase?: InputMaybe<Scalars["String"]>;
  prismUsed_ends_with?: InputMaybe<Scalars["String"]>;
  prismUsed_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  prismUsed_gt?: InputMaybe<Scalars["String"]>;
  prismUsed_gte?: InputMaybe<Scalars["String"]>;
  prismUsed_in?: InputMaybe<Array<Scalars["String"]>>;
  prismUsed_lt?: InputMaybe<Scalars["String"]>;
  prismUsed_lte?: InputMaybe<Scalars["String"]>;
  prismUsed_not?: InputMaybe<Scalars["String"]>;
  prismUsed_not_contains?: InputMaybe<Scalars["String"]>;
  prismUsed_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  prismUsed_not_ends_with?: InputMaybe<Scalars["String"]>;
  prismUsed_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  prismUsed_not_in?: InputMaybe<Array<Scalars["String"]>>;
  prismUsed_not_starts_with?: InputMaybe<Scalars["String"]>;
  prismUsed_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  prismUsed_starts_with?: InputMaybe<Scalars["String"]>;
  prismUsed_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  random?: InputMaybe<Scalars["String"]>;
  random_contains?: InputMaybe<Scalars["String"]>;
  random_contains_nocase?: InputMaybe<Scalars["String"]>;
  random_ends_with?: InputMaybe<Scalars["String"]>;
  random_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  random_gt?: InputMaybe<Scalars["String"]>;
  random_gte?: InputMaybe<Scalars["String"]>;
  random_in?: InputMaybe<Array<Scalars["String"]>>;
  random_lt?: InputMaybe<Scalars["String"]>;
  random_lte?: InputMaybe<Scalars["String"]>;
  random_not?: InputMaybe<Scalars["String"]>;
  random_not_contains?: InputMaybe<Scalars["String"]>;
  random_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  random_not_ends_with?: InputMaybe<Scalars["String"]>;
  random_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  random_not_in?: InputMaybe<Array<Scalars["String"]>>;
  random_not_starts_with?: InputMaybe<Scalars["String"]>;
  random_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  random_starts_with?: InputMaybe<Scalars["String"]>;
  random_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  resultToken?: InputMaybe<Scalars["String"]>;
  resultToken_contains?: InputMaybe<Scalars["String"]>;
  resultToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  resultToken_ends_with?: InputMaybe<Scalars["String"]>;
  resultToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  resultToken_gt?: InputMaybe<Scalars["String"]>;
  resultToken_gte?: InputMaybe<Scalars["String"]>;
  resultToken_in?: InputMaybe<Array<Scalars["String"]>>;
  resultToken_lt?: InputMaybe<Scalars["String"]>;
  resultToken_lte?: InputMaybe<Scalars["String"]>;
  resultToken_not?: InputMaybe<Scalars["String"]>;
  resultToken_not_contains?: InputMaybe<Scalars["String"]>;
  resultToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  resultToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  resultToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  resultToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  resultToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  resultToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  resultToken_starts_with?: InputMaybe<Scalars["String"]>;
  resultToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Status>;
  status_in?: InputMaybe<Array<Status>>;
  status_not?: InputMaybe<Status>;
  status_not_in?: InputMaybe<Array<Status>>;
  success?: InputMaybe<Scalars["Boolean"]>;
  success_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  success_not?: InputMaybe<Scalars["Boolean"]>;
  success_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Summon_OrderBy {
  EndTimestamp = "endTimestamp",
  Id = "id",
  PrismUsed = "prismUsed",
  Random = "random",
  ResultToken = "resultToken",
  Status = "status",
  Success = "success",
  Token = "token",
  User = "user",
}

export type SummoningCircle = {
  __typename?: "SummoningCircle";
  crafters: Scalars["Int"];
  id: Scalars["ID"];
  successRate: Scalars["String"];
  summoners: Scalars["Int"];
};

export type SummoningCircle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  crafters?: InputMaybe<Scalars["Int"]>;
  crafters_gt?: InputMaybe<Scalars["Int"]>;
  crafters_gte?: InputMaybe<Scalars["Int"]>;
  crafters_in?: InputMaybe<Array<Scalars["Int"]>>;
  crafters_lt?: InputMaybe<Scalars["Int"]>;
  crafters_lte?: InputMaybe<Scalars["Int"]>;
  crafters_not?: InputMaybe<Scalars["Int"]>;
  crafters_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  successRate?: InputMaybe<Scalars["String"]>;
  successRate_contains?: InputMaybe<Scalars["String"]>;
  successRate_contains_nocase?: InputMaybe<Scalars["String"]>;
  successRate_ends_with?: InputMaybe<Scalars["String"]>;
  successRate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  successRate_gt?: InputMaybe<Scalars["String"]>;
  successRate_gte?: InputMaybe<Scalars["String"]>;
  successRate_in?: InputMaybe<Array<Scalars["String"]>>;
  successRate_lt?: InputMaybe<Scalars["String"]>;
  successRate_lte?: InputMaybe<Scalars["String"]>;
  successRate_not?: InputMaybe<Scalars["String"]>;
  successRate_not_contains?: InputMaybe<Scalars["String"]>;
  successRate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  successRate_not_ends_with?: InputMaybe<Scalars["String"]>;
  successRate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  successRate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  successRate_not_starts_with?: InputMaybe<Scalars["String"]>;
  successRate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  successRate_starts_with?: InputMaybe<Scalars["String"]>;
  successRate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  summoners?: InputMaybe<Scalars["Int"]>;
  summoners_gt?: InputMaybe<Scalars["Int"]>;
  summoners_gte?: InputMaybe<Scalars["Int"]>;
  summoners_in?: InputMaybe<Array<Scalars["Int"]>>;
  summoners_lt?: InputMaybe<Scalars["Int"]>;
  summoners_lte?: InputMaybe<Scalars["Int"]>;
  summoners_not?: InputMaybe<Scalars["Int"]>;
  summoners_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum SummoningCircle_OrderBy {
  Crafters = "crafters",
  Id = "id",
  SuccessRate = "successRate",
  Summoners = "summoners",
}

export type Token = {
  __typename?: "Token";
  category?: Maybe<Category>;
  contract: Scalars["Bytes"];
  /** 0 = Genesis, 1 = Auxiliary, 2 = Recruit */
  generation?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  image: Scalars["String"];
  imageAlt?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Metadata>;
  name: Scalars["String"];
  owners: Array<UserToken>;
  rarity: Rarity;
  tokenId: Scalars["BigInt"];
};

export type TokenOwnersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserToken_Filter>;
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  category?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not?: InputMaybe<Category>;
  category_not_in?: InputMaybe<Array<Category>>;
  contract?: InputMaybe<Scalars["Bytes"]>;
  contract_contains?: InputMaybe<Scalars["Bytes"]>;
  contract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contract_not?: InputMaybe<Scalars["Bytes"]>;
  contract_not_contains?: InputMaybe<Scalars["Bytes"]>;
  contract_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  generation?: InputMaybe<Scalars["Int"]>;
  generation_gt?: InputMaybe<Scalars["Int"]>;
  generation_gte?: InputMaybe<Scalars["Int"]>;
  generation_in?: InputMaybe<Array<Scalars["Int"]>>;
  generation_lt?: InputMaybe<Scalars["Int"]>;
  generation_lte?: InputMaybe<Scalars["Int"]>;
  generation_not?: InputMaybe<Scalars["Int"]>;
  generation_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  image?: InputMaybe<Scalars["String"]>;
  imageAlt?: InputMaybe<Scalars["String"]>;
  imageAlt_contains?: InputMaybe<Scalars["String"]>;
  imageAlt_contains_nocase?: InputMaybe<Scalars["String"]>;
  imageAlt_ends_with?: InputMaybe<Scalars["String"]>;
  imageAlt_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  imageAlt_gt?: InputMaybe<Scalars["String"]>;
  imageAlt_gte?: InputMaybe<Scalars["String"]>;
  imageAlt_in?: InputMaybe<Array<Scalars["String"]>>;
  imageAlt_lt?: InputMaybe<Scalars["String"]>;
  imageAlt_lte?: InputMaybe<Scalars["String"]>;
  imageAlt_not?: InputMaybe<Scalars["String"]>;
  imageAlt_not_contains?: InputMaybe<Scalars["String"]>;
  imageAlt_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  imageAlt_not_ends_with?: InputMaybe<Scalars["String"]>;
  imageAlt_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  imageAlt_not_in?: InputMaybe<Array<Scalars["String"]>>;
  imageAlt_not_starts_with?: InputMaybe<Scalars["String"]>;
  imageAlt_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  imageAlt_starts_with?: InputMaybe<Scalars["String"]>;
  imageAlt_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  image_contains?: InputMaybe<Scalars["String"]>;
  image_contains_nocase?: InputMaybe<Scalars["String"]>;
  image_ends_with?: InputMaybe<Scalars["String"]>;
  image_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  image_gt?: InputMaybe<Scalars["String"]>;
  image_gte?: InputMaybe<Scalars["String"]>;
  image_in?: InputMaybe<Array<Scalars["String"]>>;
  image_lt?: InputMaybe<Scalars["String"]>;
  image_lte?: InputMaybe<Scalars["String"]>;
  image_not?: InputMaybe<Scalars["String"]>;
  image_not_contains?: InputMaybe<Scalars["String"]>;
  image_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  image_not_ends_with?: InputMaybe<Scalars["String"]>;
  image_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  image_not_in?: InputMaybe<Array<Scalars["String"]>>;
  image_not_starts_with?: InputMaybe<Scalars["String"]>;
  image_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  image_starts_with?: InputMaybe<Scalars["String"]>;
  image_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  metadata?: InputMaybe<Scalars["String"]>;
  metadata_contains?: InputMaybe<Scalars["String"]>;
  metadata_contains_nocase?: InputMaybe<Scalars["String"]>;
  metadata_ends_with?: InputMaybe<Scalars["String"]>;
  metadata_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  metadata_gt?: InputMaybe<Scalars["String"]>;
  metadata_gte?: InputMaybe<Scalars["String"]>;
  metadata_in?: InputMaybe<Array<Scalars["String"]>>;
  metadata_lt?: InputMaybe<Scalars["String"]>;
  metadata_lte?: InputMaybe<Scalars["String"]>;
  metadata_not?: InputMaybe<Scalars["String"]>;
  metadata_not_contains?: InputMaybe<Scalars["String"]>;
  metadata_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  metadata_not_ends_with?: InputMaybe<Scalars["String"]>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  metadata_not_in?: InputMaybe<Array<Scalars["String"]>>;
  metadata_not_starts_with?: InputMaybe<Scalars["String"]>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  metadata_starts_with?: InputMaybe<Scalars["String"]>;
  metadata_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rarity?: InputMaybe<Rarity>;
  rarity_in?: InputMaybe<Array<Rarity>>;
  rarity_not?: InputMaybe<Rarity>;
  rarity_not_in?: InputMaybe<Array<Rarity>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Token_OrderBy {
  Category = "category",
  Contract = "contract",
  Generation = "generation",
  Id = "id",
  Image = "image",
  ImageAlt = "imageAlt",
  Metadata = "metadata",
  Name = "name",
  Owners = "owners",
  Rarity = "rarity",
  TokenId = "tokenId",
}

export enum TreasureCategory {
  Alchemy = "Alchemy",
  Arcana = "Arcana",
  Brewing = "Brewing",
  Enchanter = "Enchanter",
  Leatherworking = "Leatherworking",
  Smithing = "Smithing",
}

export type TreasureInfo = Metadata & {
  __typename?: "TreasureInfo";
  boost: Scalars["String"];
  category: TreasureCategory;
  id: Scalars["ID"];
  tier: Scalars["Int"];
};

export type TreasureInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  boost?: InputMaybe<Scalars["String"]>;
  boost_contains?: InputMaybe<Scalars["String"]>;
  boost_contains_nocase?: InputMaybe<Scalars["String"]>;
  boost_ends_with?: InputMaybe<Scalars["String"]>;
  boost_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_gt?: InputMaybe<Scalars["String"]>;
  boost_gte?: InputMaybe<Scalars["String"]>;
  boost_in?: InputMaybe<Array<Scalars["String"]>>;
  boost_lt?: InputMaybe<Scalars["String"]>;
  boost_lte?: InputMaybe<Scalars["String"]>;
  boost_not?: InputMaybe<Scalars["String"]>;
  boost_not_contains?: InputMaybe<Scalars["String"]>;
  boost_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  boost_not_ends_with?: InputMaybe<Scalars["String"]>;
  boost_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_not_in?: InputMaybe<Array<Scalars["String"]>>;
  boost_not_starts_with?: InputMaybe<Scalars["String"]>;
  boost_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_starts_with?: InputMaybe<Scalars["String"]>;
  boost_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category?: InputMaybe<TreasureCategory>;
  category_in?: InputMaybe<Array<TreasureCategory>>;
  category_not?: InputMaybe<TreasureCategory>;
  category_not_in?: InputMaybe<Array<TreasureCategory>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  tier?: InputMaybe<Scalars["Int"]>;
  tier_gt?: InputMaybe<Scalars["Int"]>;
  tier_gte?: InputMaybe<Scalars["Int"]>;
  tier_in?: InputMaybe<Array<Scalars["Int"]>>;
  tier_lt?: InputMaybe<Scalars["Int"]>;
  tier_lte?: InputMaybe<Scalars["Int"]>;
  tier_not?: InputMaybe<Scalars["Int"]>;
  tier_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum TreasureInfo_OrderBy {
  Boost = "boost",
  Category = "category",
  Id = "id",
  Tier = "tier",
}

export type User = {
  __typename?: "User";
  approvals: Array<UserApproval>;
  boost: Scalars["String"];
  boosts: Scalars["Int"];
  crafts: Array<Craft>;
  deposited: Scalars["BigInt"];
  deposits: Array<Deposit>;
  id: Scalars["ID"];
  pilgrimaging?: Maybe<Array<Pilgrimage>>;
  quests: Array<Quest>;
  recruit?: Maybe<Token>;
  staked: Array<StakedToken>;
  summons: Array<Summon>;
  tokens: Array<UserToken>;
  withdrawals: Array<Withdraw>;
};

export type UserApprovalsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserApproval_Filter>;
};

export type UserCraftsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Craft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Craft_Filter>;
};

export type UserDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type UserPilgrimagingArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pilgrimage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Pilgrimage_Filter>;
};

export type UserQuestsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Quest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Quest_Filter>;
};

export type UserStakedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StakedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<StakedToken_Filter>;
};

export type UserSummonsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Summon_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Summon_Filter>;
};

export type UserTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserToken_Filter>;
};

export type UserWithdrawalsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Withdraw_Filter>;
};

export type UserApproval = {
  __typename?: "UserApproval";
  approval: Approval;
  id: Scalars["ID"];
  user: User;
};

export type UserApproval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  approval?: InputMaybe<Scalars["String"]>;
  approval_contains?: InputMaybe<Scalars["String"]>;
  approval_contains_nocase?: InputMaybe<Scalars["String"]>;
  approval_ends_with?: InputMaybe<Scalars["String"]>;
  approval_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  approval_gt?: InputMaybe<Scalars["String"]>;
  approval_gte?: InputMaybe<Scalars["String"]>;
  approval_in?: InputMaybe<Array<Scalars["String"]>>;
  approval_lt?: InputMaybe<Scalars["String"]>;
  approval_lte?: InputMaybe<Scalars["String"]>;
  approval_not?: InputMaybe<Scalars["String"]>;
  approval_not_contains?: InputMaybe<Scalars["String"]>;
  approval_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  approval_not_ends_with?: InputMaybe<Scalars["String"]>;
  approval_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  approval_not_in?: InputMaybe<Array<Scalars["String"]>>;
  approval_not_starts_with?: InputMaybe<Scalars["String"]>;
  approval_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  approval_starts_with?: InputMaybe<Scalars["String"]>;
  approval_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum UserApproval_OrderBy {
  Approval = "approval",
  Id = "id",
  User = "user",
}

export type UserToken = {
  __typename?: "UserToken";
  id: Scalars["ID"];
  quantity: Scalars["BigInt"];
  token: Token;
  user: User;
};

export type UserToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  quantity?: InputMaybe<Scalars["BigInt"]>;
  quantity_gt?: InputMaybe<Scalars["BigInt"]>;
  quantity_gte?: InputMaybe<Scalars["BigInt"]>;
  quantity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quantity_lt?: InputMaybe<Scalars["BigInt"]>;
  quantity_lte?: InputMaybe<Scalars["BigInt"]>;
  quantity_not?: InputMaybe<Scalars["BigInt"]>;
  quantity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum UserToken_OrderBy {
  Id = "id",
  Quantity = "quantity",
  Token = "token",
  User = "user",
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  boost?: InputMaybe<Scalars["String"]>;
  boost_contains?: InputMaybe<Scalars["String"]>;
  boost_contains_nocase?: InputMaybe<Scalars["String"]>;
  boost_ends_with?: InputMaybe<Scalars["String"]>;
  boost_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_gt?: InputMaybe<Scalars["String"]>;
  boost_gte?: InputMaybe<Scalars["String"]>;
  boost_in?: InputMaybe<Array<Scalars["String"]>>;
  boost_lt?: InputMaybe<Scalars["String"]>;
  boost_lte?: InputMaybe<Scalars["String"]>;
  boost_not?: InputMaybe<Scalars["String"]>;
  boost_not_contains?: InputMaybe<Scalars["String"]>;
  boost_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  boost_not_ends_with?: InputMaybe<Scalars["String"]>;
  boost_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_not_in?: InputMaybe<Array<Scalars["String"]>>;
  boost_not_starts_with?: InputMaybe<Scalars["String"]>;
  boost_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  boost_starts_with?: InputMaybe<Scalars["String"]>;
  boost_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  boosts?: InputMaybe<Scalars["Int"]>;
  boosts_gt?: InputMaybe<Scalars["Int"]>;
  boosts_gte?: InputMaybe<Scalars["Int"]>;
  boosts_in?: InputMaybe<Array<Scalars["Int"]>>;
  boosts_lt?: InputMaybe<Scalars["Int"]>;
  boosts_lte?: InputMaybe<Scalars["Int"]>;
  boosts_not?: InputMaybe<Scalars["Int"]>;
  boosts_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  deposited?: InputMaybe<Scalars["BigInt"]>;
  deposited_gt?: InputMaybe<Scalars["BigInt"]>;
  deposited_gte?: InputMaybe<Scalars["BigInt"]>;
  deposited_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  deposited_lt?: InputMaybe<Scalars["BigInt"]>;
  deposited_lte?: InputMaybe<Scalars["BigInt"]>;
  deposited_not?: InputMaybe<Scalars["BigInt"]>;
  deposited_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  recruit?: InputMaybe<Scalars["String"]>;
  recruit_contains?: InputMaybe<Scalars["String"]>;
  recruit_contains_nocase?: InputMaybe<Scalars["String"]>;
  recruit_ends_with?: InputMaybe<Scalars["String"]>;
  recruit_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  recruit_gt?: InputMaybe<Scalars["String"]>;
  recruit_gte?: InputMaybe<Scalars["String"]>;
  recruit_in?: InputMaybe<Array<Scalars["String"]>>;
  recruit_lt?: InputMaybe<Scalars["String"]>;
  recruit_lte?: InputMaybe<Scalars["String"]>;
  recruit_not?: InputMaybe<Scalars["String"]>;
  recruit_not_contains?: InputMaybe<Scalars["String"]>;
  recruit_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  recruit_not_ends_with?: InputMaybe<Scalars["String"]>;
  recruit_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  recruit_not_in?: InputMaybe<Array<Scalars["String"]>>;
  recruit_not_starts_with?: InputMaybe<Scalars["String"]>;
  recruit_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  recruit_starts_with?: InputMaybe<Scalars["String"]>;
  recruit_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum User_OrderBy {
  Approvals = "approvals",
  Boost = "boost",
  Boosts = "boosts",
  Crafts = "crafts",
  Deposited = "deposited",
  Deposits = "deposits",
  Id = "id",
  Pilgrimaging = "pilgrimaging",
  Quests = "quests",
  Recruit = "recruit",
  Staked = "staked",
  Summons = "summons",
  Tokens = "tokens",
  Withdrawals = "withdrawals",
}

export type Withdraw = {
  __typename?: "Withdraw";
  amount: Scalars["BigInt"];
  deposit: Deposit;
  id: Scalars["ID"];
  mine: AtlasMine;
  user: User;
};

export type Withdraw_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  deposit?: InputMaybe<Scalars["String"]>;
  deposit_contains?: InputMaybe<Scalars["String"]>;
  deposit_contains_nocase?: InputMaybe<Scalars["String"]>;
  deposit_ends_with?: InputMaybe<Scalars["String"]>;
  deposit_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_gt?: InputMaybe<Scalars["String"]>;
  deposit_gte?: InputMaybe<Scalars["String"]>;
  deposit_in?: InputMaybe<Array<Scalars["String"]>>;
  deposit_lt?: InputMaybe<Scalars["String"]>;
  deposit_lte?: InputMaybe<Scalars["String"]>;
  deposit_not?: InputMaybe<Scalars["String"]>;
  deposit_not_contains?: InputMaybe<Scalars["String"]>;
  deposit_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  deposit_not_ends_with?: InputMaybe<Scalars["String"]>;
  deposit_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_not_in?: InputMaybe<Array<Scalars["String"]>>;
  deposit_not_starts_with?: InputMaybe<Scalars["String"]>;
  deposit_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_starts_with?: InputMaybe<Scalars["String"]>;
  deposit_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  mine?: InputMaybe<Scalars["String"]>;
  mine_contains?: InputMaybe<Scalars["String"]>;
  mine_contains_nocase?: InputMaybe<Scalars["String"]>;
  mine_ends_with?: InputMaybe<Scalars["String"]>;
  mine_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  mine_gt?: InputMaybe<Scalars["String"]>;
  mine_gte?: InputMaybe<Scalars["String"]>;
  mine_in?: InputMaybe<Array<Scalars["String"]>>;
  mine_lt?: InputMaybe<Scalars["String"]>;
  mine_lte?: InputMaybe<Scalars["String"]>;
  mine_not?: InputMaybe<Scalars["String"]>;
  mine_not_contains?: InputMaybe<Scalars["String"]>;
  mine_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  mine_not_ends_with?: InputMaybe<Scalars["String"]>;
  mine_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  mine_not_in?: InputMaybe<Array<Scalars["String"]>>;
  mine_not_starts_with?: InputMaybe<Scalars["String"]>;
  mine_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  mine_starts_with?: InputMaybe<Scalars["String"]>;
  mine_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Withdraw_OrderBy {
  Amount = "amount",
  Deposit = "deposit",
  Id = "id",
  Mine = "mine",
  User = "user",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type _SummonFatigue = {
  __typename?: "_SummonFatigue";
  data: Array<Scalars["String"]>;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
};

export type _SummonFatigue_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  data?: InputMaybe<Array<Scalars["String"]>>;
  data_contains?: InputMaybe<Array<Scalars["String"]>>;
  data_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  data_not?: InputMaybe<Array<Scalars["String"]>>;
  data_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  data_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum _SummonFatigue_OrderBy {
  Data = "data",
  Id = "id",
  Timestamp = "timestamp",
}

export type LegionFieldsFragment = {
  __typename?: "Token";
  id: string;
  tokenId: any;
  generation?: number | null;
  rarity: Rarity;
  name: string;
  image: string;
  imageAlt?: string | null;
  metadata?:
    | { __typename?: "ConsumableInfo" }
    | {
        __typename?: "LegionInfo";
        role: string;
        crafting: number;
        craftingXp: number;
        questing: number;
        questingXp: number;
        summons: any;
        constellation?: {
          __typename?: "Constellation";
          dark: number;
          earth: number;
          fire: number;
          light: number;
          water: number;
          wind: number;
        } | null;
      }
    | { __typename?: "TreasureInfo" }
    | null;
  owners: Array<{
    __typename?: "UserToken";
    user: { __typename?: "User"; id: string };
  }>;
};

export type GetLegionsActivitiesQueryVariables = Exact<{
  ids: Array<Scalars["String"]> | Scalars["String"];
  statuses?: InputMaybe<Array<Status> | Status>;
}>;

export type GetLegionsActivitiesQuery = {
  __typename?: "Query";
  crafts: Array<{
    __typename?: "Craft";
    token: { __typename?: "Token"; id: string };
    user: { __typename?: "User"; id: string };
  }>;
  quests: Array<{
    __typename?: "Quest";
    token: { __typename?: "Token"; id: string };
    user: { __typename?: "User"; id: string };
  }>;
  stakedTokens: Array<{
    __typename?: "StakedToken";
    token: { __typename?: "Token"; id: string };
    user: { __typename?: "User"; id: string };
  }>;
  summons: Array<{
    __typename?: "Summon";
    token: { __typename?: "Token"; id: string };
    user: { __typename?: "User"; id: string };
  }>;
};

export type GetLegionsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Token_Filter>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type GetLegionsQuery = {
  __typename?: "Query";
  tokens: Array<{
    __typename?: "Token";
    id: string;
    tokenId: any;
    generation?: number | null;
    rarity: Rarity;
    name: string;
    image: string;
    imageAlt?: string | null;
    metadata?:
      | { __typename?: "ConsumableInfo" }
      | {
          __typename?: "LegionInfo";
          role: string;
          crafting: number;
          craftingXp: number;
          questing: number;
          questingXp: number;
          summons: any;
          constellation?: {
            __typename?: "Constellation";
            dark: number;
            earth: number;
            fire: number;
            light: number;
            water: number;
            wind: number;
          } | null;
        }
      | { __typename?: "TreasureInfo" }
      | null;
    owners: Array<{
      __typename?: "UserToken";
      user: { __typename?: "User"; id: string };
    }>;
  }>;
};

export type GetUserLegionsQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserLegionsQuery = {
  __typename?: "Query";
  crafts: Array<{
    __typename?: "Craft";
    token: {
      __typename?: "Token";
      id: string;
      tokenId: any;
      generation?: number | null;
      rarity: Rarity;
      name: string;
      image: string;
      imageAlt?: string | null;
      metadata?:
        | { __typename?: "ConsumableInfo" }
        | {
            __typename?: "LegionInfo";
            role: string;
            crafting: number;
            craftingXp: number;
            questing: number;
            questingXp: number;
            summons: any;
            constellation?: {
              __typename?: "Constellation";
              dark: number;
              earth: number;
              fire: number;
              light: number;
              water: number;
              wind: number;
            } | null;
          }
        | { __typename?: "TreasureInfo" }
        | null;
      owners: Array<{
        __typename?: "UserToken";
        user: { __typename?: "User"; id: string };
      }>;
    };
  }>;
  quests: Array<{
    __typename?: "Quest";
    token: {
      __typename?: "Token";
      id: string;
      tokenId: any;
      generation?: number | null;
      rarity: Rarity;
      name: string;
      image: string;
      imageAlt?: string | null;
      metadata?:
        | { __typename?: "ConsumableInfo" }
        | {
            __typename?: "LegionInfo";
            role: string;
            crafting: number;
            craftingXp: number;
            questing: number;
            questingXp: number;
            summons: any;
            constellation?: {
              __typename?: "Constellation";
              dark: number;
              earth: number;
              fire: number;
              light: number;
              water: number;
              wind: number;
            } | null;
          }
        | { __typename?: "TreasureInfo" }
        | null;
      owners: Array<{
        __typename?: "UserToken";
        user: { __typename?: "User"; id: string };
      }>;
    };
  }>;
  stakedTokens: Array<{
    __typename?: "StakedToken";
    token: {
      __typename?: "Token";
      id: string;
      tokenId: any;
      generation?: number | null;
      rarity: Rarity;
      name: string;
      image: string;
      imageAlt?: string | null;
      metadata?:
        | { __typename?: "ConsumableInfo" }
        | {
            __typename?: "LegionInfo";
            role: string;
            crafting: number;
            craftingXp: number;
            questing: number;
            questingXp: number;
            summons: any;
            constellation?: {
              __typename?: "Constellation";
              dark: number;
              earth: number;
              fire: number;
              light: number;
              water: number;
              wind: number;
            } | null;
          }
        | { __typename?: "TreasureInfo" }
        | null;
      owners: Array<{
        __typename?: "UserToken";
        user: { __typename?: "User"; id: string };
      }>;
    };
  }>;
  summons: Array<{
    __typename?: "Summon";
    token: {
      __typename?: "Token";
      id: string;
      tokenId: any;
      generation?: number | null;
      rarity: Rarity;
      name: string;
      image: string;
      imageAlt?: string | null;
      metadata?:
        | { __typename?: "ConsumableInfo" }
        | {
            __typename?: "LegionInfo";
            role: string;
            crafting: number;
            craftingXp: number;
            questing: number;
            questingXp: number;
            summons: any;
            constellation?: {
              __typename?: "Constellation";
              dark: number;
              earth: number;
              fire: number;
              light: number;
              water: number;
              wind: number;
            } | null;
          }
        | { __typename?: "TreasureInfo" }
        | null;
      owners: Array<{
        __typename?: "UserToken";
        user: { __typename?: "User"; id: string };
      }>;
    };
  }>;
  userTokens: Array<{
    __typename?: "UserToken";
    token: {
      __typename?: "Token";
      id: string;
      tokenId: any;
      generation?: number | null;
      rarity: Rarity;
      name: string;
      image: string;
      imageAlt?: string | null;
      metadata?:
        | { __typename?: "ConsumableInfo" }
        | {
            __typename?: "LegionInfo";
            role: string;
            crafting: number;
            craftingXp: number;
            questing: number;
            questingXp: number;
            summons: any;
            constellation?: {
              __typename?: "Constellation";
              dark: number;
              earth: number;
              fire: number;
              light: number;
              water: number;
              wind: number;
            } | null;
          }
        | { __typename?: "TreasureInfo" }
        | null;
      owners: Array<{
        __typename?: "UserToken";
        user: { __typename?: "User"; id: string };
      }>;
    };
  }>;
};

export const LegionFieldsFragmentDoc = gql`
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
export const GetLegionsActivitiesDocument = gql`
  query getLegionsActivities(
    $ids: [String!]!
    $statuses: [Status!] = [Revealable, Revealed]
  ) {
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
export const GetLegionsDocument = gql`
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
  ${LegionFieldsFragmentDoc}
`;
export const GetUserLegionsDocument = gql`
  query getUserLegions($id: String!) {
    crafts(where: { user: $id, status_in: [Revealable, Revealed] }) {
      token {
        ...legionFields
      }
    }
    quests(where: { user: $id, status_in: [Revealable, Revealed] }) {
      token {
        ...legionFields
      }
    }
    stakedTokens(
      where: {
        user: $id
        token_starts_with: "0xfe8c1ac365ba6780aec5a985d989b327c27670a1"
      }
    ) {
      token {
        ...legionFields
      }
    }
    summons(where: { user: $id, status_in: [Revealable, Revealed] }) {
      token {
        ...legionFields
      }
    }
    userTokens(
      where: {
        user: $id
        token_starts_with: "0xfe8c1ac365ba6780aec5a985d989b327c27670a1"
      }
    ) {
      token {
        ...legionFields
      }
    }
  }
  ${LegionFieldsFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getLegionsActivities(
      variables: GetLegionsActivitiesQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetLegionsActivitiesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetLegionsActivitiesQuery>(
            GetLegionsActivitiesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getLegionsActivities",
        "query"
      );
    },
    getLegions(
      variables?: GetLegionsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetLegionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetLegionsQuery>(GetLegionsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getLegions",
        "query"
      );
    },
    getUserLegions(
      variables: GetUserLegionsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetUserLegionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserLegionsQuery>(
            GetUserLegionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getUserLegions",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
