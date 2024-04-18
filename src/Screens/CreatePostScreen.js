import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native";
import { useMutation } from "@apollo/client";
import { GET_POSTS, CREATE_POST } from '../queries/posts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    textInput: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        fontSize: 20
    },
    submitButton: {
        width: 100,
        marginVertical: 20,
        flex: 0
    },
    buttonContainer: {
        display: "flex",
        hieght: "100vh",
        alignItems: "flex-end"
    }
});

const CreatePostScreen = ({ navigation }) => {
    const [text, setText] = useState("");

    const [createPost, { loading, error }] = useMutation(CREATE_POST, {
        variables: {
            createPostInput: {
                body: text
            }
        },
        update(cache, { data: { createPost } }) {
            cache.updateQuery({ query: GET_POSTS }, data => ({
                posts: [createPost, ...data.posts]
            }));
            navigation.navigate('Home');
        }
    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Share your thoughts..."
                value={text}
                text={text}
                onChangeText={(text) => setText(text)}
            />
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.submitButton}
                    disabled={!text || loading}
                    mode="contained"
                    onPress={() => createPost()}
                >
                    Post
                </Button>
            </View>
        </View>
    );
};

export default CreatePostScreen;
