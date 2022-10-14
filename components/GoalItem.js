import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={
                    {
                        color: '#c6c6c6',
                        borderRadius: 6,
                    }
                }
                onPress={
                    props.onDeleteItem.bind(this, props.id)
                }
                >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        padding: 8,
        color: 'white'
    }
});

export default GoalItem;