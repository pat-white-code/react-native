import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button, Card, Divider, IconButton, Text } from "react-native-paper";
import moment from "moment";
import { Avatar } from "react-native-paper";

import { AuthContext } from "../../context/auth";
import LikePostButton from "./LikePostButton";
import { pluralOrSingle } from "../../util/strings";
import DeletePostButton from "./DeletePostButton";
import PostComment from "../Comment";

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
    },
    comments: {
        marginTop: 10
    }
});

const Post = ({ post, navigation, expanded }) => {
    const context = useContext(AuthContext);
    const userId = context.user?.id;

    const { body, username, createdAt, id, user, isLiked, totalLikes, comments } = post;
    const isAuthordByYou = user.id === userId;

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
                    {isAuthordByYou && <DeletePostButton postId={id} />}
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text>{body}</Text>
                <Text>
                    {totalLikes} {pluralOrSingle(totalLikes, "Like")}
                </Text>
            </View>
            {!expanded && (
                <>
                    <Divider />
                    <View style={styles.actionContainer}>
                        <LikePostButton postId={id} isLiked={isLiked} />
                        <Button
                            mode={"contained-tonal"}
                            icon={"comment"}
                            onPress={() => {
                                navigation.navigate("PostExpandedScreen", {
                                    postId: id
                                });
                            }}
                        >
                            comment
                        </Button>
                    </View>
                </>
            )}
            {expanded && (
                <>
                    <Divider />
                    <View style={styles.comments}>
                        <Text variant="titleMedium">Comments</Text>
                        <FlatList
                            data={comments}
                            renderItem={comment => <PostComment comment={comment.item} />}
                            keyExtractor={comment => comment.id}
                        />
                    </View>
                </>
            )}
        </Card>
    );
};

export default Post;
