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
        }
    }
`;