import React from "react";
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
        <View style={styles.container}>
            <Post post={data.post} expanded />
        </View>
    );
};

export default PostExpandedScreen;
