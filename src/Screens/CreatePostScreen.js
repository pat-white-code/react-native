import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native";

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

const CreatePostScreen = () => {
    const [text, setText] = useState("");
    return (
        <View style={styles.container}>
            {/* <Text>hi</Text> */}
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
                    disabled={!text}
                    // disabled={loading}
                    mode="contained"
                    onPress={() => {
                        //create post
                    }}
                >
                    Post
                </Button>
            </View>
        </View>
    );
};

export default CreatePostScreen;
