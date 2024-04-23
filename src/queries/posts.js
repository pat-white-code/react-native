import { gql } from "@apollo/client";

export const GET_POST = gql`
    query Posts($postId: ID!) {
        posts {
            body
            isLiked
            likes {
                createdAt
                id
                userId
                username
            }
        }
        post(postId: $postId) {
            body
            comments {
                body
                createdAt
                id
                user {
                    username
                    createdAt
                    email
                    id
                    token
                }
                username
            }
            createdAt
            id
            isLiked
            likes {
                createdAt
                id
                userId
                username
            }
            totalComments
            totalLikes
            user {
                createdAt
                email
                id
                token
                username
            }
            userId
            username
        }
    }
`;

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
