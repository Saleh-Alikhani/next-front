/* eslint-disable */

export type Maybe<T> = T;
export type InputMaybe<T> = T;
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
};

export type Cat = {
  __typename?: 'Cat';
  age: Scalars['Int'];
  breed: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateCatDto = {
  age: Scalars['Int'];
  breed: Scalars['String'];
  name: Scalars['String'];
};

export type CreateUserDto = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  id_token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create: User;
  createCat: Cat;
  deleteCat: Cat;
  login: LoginResponse;
};

export type MutationCreateArgs = {
  input: CreateUserDto;
};

export type MutationCreateCatArgs = {
  input: CreateCatDto;
};

export type MutationDeleteCatArgs = {
  input: Scalars['String'];
};

export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};

export type Query = {
  __typename?: 'Query';
  cats: Array<Cat>;
  currentUser: User;
  getUserById: User;
  getUsers: Array<User>;
  myCats: Array<Cat>;
  usersById: Array<User>;
};

export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};

export type QueryUsersByIdArgs = {
  Ids: Array<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
};
