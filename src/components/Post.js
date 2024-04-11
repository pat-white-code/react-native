import { StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper';
import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 4,
        borderRadius: 5
    }
})

const Post = ({ post }) => {
    const { body, username, createdAt } = post.item
    const formattedDate = moment(createdAt).fromNow()

    return(
    <Card style={styles.container}>
        <Text>{username}</Text>
        <Text>{body}</Text>
        <Text>{formattedDate}</Text>
    </Card>
)};

export default Post