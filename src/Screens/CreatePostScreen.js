import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const CreatePostScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Create Post
            </Text>
        </View>
    )
}

export default CreatePostScreen