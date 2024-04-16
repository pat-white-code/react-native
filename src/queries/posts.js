import { gql } from "@apollo/client";

export const GET_POSTS = gql`
    query Query {
        posts {
            id
            body
            createdAt
            username
        }
    }
`;

export const DELETE_POST = gql`
    mutation Mutation($postId: ID!) {
        deletePost(postId: $postId)
    }
`;

export const CREATE_POST = gql`
    mutation Mutation($createPostInput: CreatePostInput) {
        createPost(createPostInput: $createPostInput) {
            body
            createdAt
            id
            username
        }
    }
`;