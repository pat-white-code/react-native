import React from "react";
import { Button } from "react-native-paper";
import { DELETE_POST_COMMENT } from "../../queries/posts";
import { useMutation } from "@apollo/client";

const DeleteCommentButton = ({ postId, commentId }) => {
    const [deleteComment, { loading }] = useMutation(DELETE_POST_COMMENT, {
        variables: {
            commentId,
            postId
        },
    });

    return (
        <Button
            labelStyle={{marginHorizontal: 0, marginVertical: 0 }}
            size={0}
            loading={loading}
            onPress={deleteComment}
        >
            delete
        </Button>
    );
};

export default DeleteCommentButton;
