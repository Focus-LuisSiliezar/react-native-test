import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            placeholder='Course Goal'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
)

}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#C6C6C6'
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#c6c6c6',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});
export default GoalInput;