import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Button,
    Card,
    Divider,
    Icon,
    IconButton,
    Text,
} from "react-native-paper";
import moment from "moment";
import { Avatar } from "react-native-paper";
import { useMutation } from "@apollo/client";
import { DELETE_POST, GET_POSTS } from "../queries/posts";


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
    },
    bodyContainer: {
        paddingBottom: 10
    },
    actionContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10
    }
});

const Post = ({ post }) => {
    const { body, username, createdAt, id } = post.item;

    const [deletePost, { loading, error }] = useMutation(DELETE_POST, {
        variables: {
            postId: id
        },
        update(cache, { data: { createPost } }) {
            cache.updateQuery({ query: GET_POSTS }, data => ({
                posts: data.posts.filter(post => post.id !== id)
            }));
        }
    });
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
                    <IconButton onPress={() => deletePost()} loading={loading} icon="delete" size={15} />
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text>{body}</Text>
            </View>
            <Divider />
            <View style={styles.actionContainer}>
                <Button
                    onPress={() => {}}
                    mode={"contained-tonal"}
                    icon={"star"}
                >
                    Like
                </Button>
                <Button mode={"contained-tonal"} icon={"comment"}>
                    comment
                </Button>
            </View>
        </Card>
    );
};

export default Post;
