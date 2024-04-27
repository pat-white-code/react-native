import React from "react";
import { IconButton } from "react-native-paper";
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
        <IconButton style={{ padding: 0, margin: 0 }} size={15} loading={loading} onPress={deleteComment} icon={"delete"} />
    );
};

export default DeleteCommentButton;
