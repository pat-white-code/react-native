import React, { useContext, useState } from "react";
import moment from "moment";

// Context
import { AuthContext } from "../../context/auth";

// Components
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import {
    Avatar,
    Button,
    Card,
    Divider,
    IconButton,
    Text
} from "react-native-paper";
import DeletePostButton from "./DeletePostButton";
import LikePostButton from "./LikePostButton";
import CreateCommentInput from "./CreateCommentInput";
import PostComment from "../Comment";

// Util
import { pluralOrSingle } from "../../util/strings";

const styles = StyleSheet.create({
    avatar: {
        marginRight: 10
    },
    container: {
        display: "flex",
        padding: 10,
        margin: 4,
        borderRadius: 5,
        flex: 1
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
    },
    expanded: {}
});

const Post = ({ post, navigation, expanded }) => {
    const context = useContext(AuthContext);
    const userId = context.user?.id;
    const [isCommenting, setIsCommenting] = useState(false);

    const {
        body,
        username,
        createdAt,
        id,
        user,
        isLiked,
        totalLikes,
        comments
    } = post;
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
                <View style={styles.expanded}>
                    <Divider />
                    <View style={styles.comments}>
                        <Text variant="titleMedium">Comments</Text>
                        <FlatList
                            data={comments}
                            renderItem={(comment) => (
                                <PostComment comment={comment.item} />
                            )}
                            keyExtractor={(comment) => comment.id}
                        />
                        {isCommenting ? (
                            <CreateCommentInput
                                postId={id}
                                setIsCommenting={setIsCommenting}
                            />
                        ) : (
                            <Button onPress={() => setIsCommenting(true)}>
                                Comment
                            </Button>
                        )}
                    </View>
                </View>
            )}
        </Card>
    );
};

export default Post;
