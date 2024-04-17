import { gql } from "@apollo/client";

export const CREATE_POST = gql`
    mutation Mutation($createPostInput: CreatePostInput) {
        createPost(createPostInput: $createPostInput) {
            body
            createdAt
            id
            username
            user {
                id
            }
        }
    }
`;
