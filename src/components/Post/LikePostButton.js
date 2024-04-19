import React from "react";
import { Button } from "react-native-paper";
import { useMutation } from "@apollo/client";
import { GET_POSTS, LIKE_POST } from "../../queries/posts";

const LikePostButton = ({ postId, isLiked }) => {
    const [likePost, {loading }] = useMutation(LIKE_POST, {
        variables: {
            postId
        },
        update(cache, { data: { likePost } }) {
            const updatedPost = likePost
            cache.updateQuery({ query: GET_POSTS }, (data) => ({
                posts: data.posts.map(post => {
                    return post.id !== postId ? post : updatedPost
                }
                )
            }));
        }
    });

    return (
        <Button
            onPress={() => likePost()}
            mode={isLiked ? "contained" : "contained-tonal"}
            icon={"star"}
            loading={loading}
        >
            Like
        </Button>
    );
};

export default LikePostButton;
