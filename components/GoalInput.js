import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Course Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' />

                    </View>
                </View>
            </View>
        </Modal>

    )

}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        padding:16,
        borderBottomColor: '#C6C6C6'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#c6c6c6',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    }
});
export default GoalInput;