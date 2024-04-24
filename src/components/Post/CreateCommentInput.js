import React, { useState } from "react";

// Components
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Avatar } from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: "flex",
        flexDirection: "row"
    },
    avatar: {
        borderWidth: 1,
        // padding: 20,
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

const CreateCommentInput = ({ setIsCommenting }) => {
    const [body, setBody] = useState("");

    const handleCancel = () => {
        setIsCommenting(false);
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
                <Button disabled={!body}>Post</Button>
                <Button onPress={handleCancel}>Cancel</Button>
            </View>
        </View>
    );
};

export default CreateCommentInput;
