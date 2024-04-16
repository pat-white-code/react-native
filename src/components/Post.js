import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Button,
    Card,
    Icon,
    IconButton,
    Text,
    ThemeProvider
} from "react-native-paper";
import moment from "moment";
import { Avatar } from "react-native-paper";

const styles = StyleSheet.create({
    avatar: {
        marginRight: 10
    },
    container: {
        padding: 10,
        margin: 4,
        borderRadius: 5
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    leftHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    rightHeader: {
        display: "flex",
        flexDirection: "row"
    }
});

const Post = ({ post }) => {
    const { body, username, createdAt } = post.item;
    // const formattedDate = moment(createdAt).fromNow()

    return (
        <Card style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <Avatar.Icon
                        size={30}
                        style={styles.avatar}
                        icon="account"
                    />
                    <View style={styles.authorInfo}>
                        <Text variant="titleMedium">{username}</Text>
                        <Text variant="labelSmall">
                            {moment(createdAt).fromNow()}
                        </Text>
                    </View>
                </View>
                <View style={styles.rightHeader}>
                    <IconButton
                        onPress={() => {}}
                        icon="dots-horizontal"
                        size={15}
                    />
                    <IconButton onPress={() => {}} icon="delete" size={15} />
                </View>
            </View>
            <Text>{body}</Text>
        </Card>
    );
};

export default Post;
