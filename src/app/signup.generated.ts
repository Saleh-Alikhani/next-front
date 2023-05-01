/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 * instead, edit one of the `.gql` files in the project.
 */

import * as Types from './types.generated';

import { api } from '@src/app/baseApi';
(module as any).hot?.accept();
export type SignUpMutationVariables = Types.Exact<{
  input: Types.CreateUserDto;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  create: { __typename?: 'User'; name: string };
};

export const SignUpDocument = `
    mutation SignUp($input: CreateUserDto!) {
  create(input: $input) {
    name
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  overrideExisting: (module as any).hot?.status() === 'apply',
  endpoints: (build) => ({
    SignUp: build.mutation<SignUpMutation, SignUpMutationVariables>({
      query: (variables) => ({ document: SignUpDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const { useSignUpMutation } = injectedRtkApi;
