import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import moment from "moment";
import { Avatar } from "react-native-paper";

import { AuthContext } from "../../context/auth";
import DeleteCommentButton from "./DeleteCommentButton";

const styles = StyleSheet.create({
    avatar: {
        marginRight: 10
    },
    container: {
        padding: 10,
        margin: 4,
        display: "flex",
        flexDirection: "row"
    },
    contentContainer: {
        backgroundColor: "rgb(224,224,224)",
        flex: 1,
        padding: 10,
        borderRadius: 10,
        borderTopLeftRadius: 0
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    leftHeader: {},
    rightHeader: {
        display: "flex",
        flexDirection: "row",
    },
    bodyContainer: {},
    actionContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10
    }
});

const PostComment = ({ comment, postId }) => {
    const context = useContext(AuthContext);
    const userId = context.user?.id;

    const { body, username, createdAt, user, id } = comment;
    const isAuthordByYou = user.id === userId;

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar.Icon size={30} style={styles.avatar} icon="account" />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <Text style={{ marginTop: -4 }} variant='titleMedium'>{username}</Text>
                    </View>
                    <View style={styles.rightHeader}>
                        <Text variant="bodySmall">
                            {moment(createdAt).fromNow()}
                        </Text>
                        {isAuthordByYou && (
                            <DeleteCommentButton
                                commentId={id}
                                postId={postId}
                            />
                        )}
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <Text>{body}</Text>
                </View>
            </View>
        </View>
    );
};

export default PostComment;
