import React, { useState } from "react";
import { useMutation } from "@apollo/client";

// Components
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { CREATE_POST_COMMENT } from "../../queries/posts";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: "flex",
        flexDirection: "row"
    },
    avatar: {
        borderWidth: 1,
        marginRight: 12
    },
    input: {
        flex: 1,
        outline: "none"
    },
    actionsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});

const CreateCommentInput = ({ setIsCommenting, postId }) => {
    const [body, setBody] = useState("");
    const [createComment, { loading }] = useMutation(
        CREATE_POST_COMMENT,
        {
            variables: {
                createCommentInput: {
                    body,
                    postId
                }
            },
            update(_, { data: { createComment } }) {
                console.log("createComment", createComment);
                setBody('');
                setIsCommenting(false);
            }
        }
    );

    const handleCancel = () => {
        setIsCommenting(false);
    };

    const handleCreateComment = () => {
        createComment();
    };

    return (
        <View>
            <View style={styles.container}>
                <Avatar.Icon style={styles.avatar} size={30} icon="account" />
                <TextInput
                    mode="outlined"
                    style={styles.input}
                    placeholder="Share your thoughts..."
                    onChangeText={(text) => setBody(text)}
                />
            </View>
            <View style={styles.actionsContainer}>
                <Button
                    loading={loading}
                    disabled={!body}
                    onPress={handleCreateComment}
                >
                    Post
                </Button>
                <Button disabled={loading} onPress={handleCancel}>
                    Cancel
                </Button>
            </View>
        </View>
    );
};

export default CreateCommentInput;
