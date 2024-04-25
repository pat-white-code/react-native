import React, { useRef } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Post from "../components/Post";

import { useQuery } from "@apollo/client";
import { GET_POST } from "../queries/posts";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const PostExpandedScreen = ({ route }) => {
    const scrollViewRef = useRef(null);
    const { data, errors, loading } = useQuery(GET_POST, {
        variables: {
            postId: route.params.postId
        }
    });

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (errors) {
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }

    return (
        <ScrollView
            ref={scrollViewRef}
            automaticallyAdjustKeyboardInsets
            style={styles.container}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() =>
                scrollViewRef.current.scrollToEnd({ animated: true })
            }
        >
            <Post post={data.post} expanded />
        </ScrollView>
    );
};

export default PostExpandedScreen;
