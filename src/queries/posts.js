import { gql } from "@apollo/client";

export const GET_POSTS = gql`
    query Query {
        posts {
            id
            body
            createdAt
            username
            user {
                id
            }
            totalLikes
            isLiked
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
            id
            body
            createdAt
            username
            user {
                id
            }
            totalLikes
            isLiked
        }
    }
`;

export const LIKE_POST = gql`
    mutation Mutation($postId: ID!) {
        likePost(postId: $postId) {
            id
            body
            createdAt
            username
            user {
                id
            }
            totalLikes
            isLiked
        }
    }
`;
