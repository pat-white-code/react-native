import React from "react";
import { IconButton } from "react-native-paper";
import { useMutation } from "@apollo/client";
import { DELETE_POST, GET_POSTS } from "../../queries/posts";

const DeletePostButton = ({ postId }) => {
    const [deletePost, { loading }] = useMutation(DELETE_POST, {
        variables: {
            postId
        },
        update(cache) {
            cache.updateQuery({ query: GET_POSTS }, (data) => ({
                posts: data.posts.filter((post) => post.id !== postId)
            }));
        }
    });

    return (
        <IconButton
            onPress={() => deletePost()}
            loading={loading}
            icon="delete"
            size={15}
        />
    );
};

export default DeletePostButton;
