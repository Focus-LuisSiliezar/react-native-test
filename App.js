import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // STATES
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }



  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals,
      {
        text: enteredGoalText, id: Math.random().toString(),
      }]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(
        (goal) => goal.id !== id);
    });
  }


  // VIEWS
  return (
    <View style={styles.appContainer} >
      <Button
        title='Add New Goal'
        color='purple'
        onPress={startAddGoalHandler}
        visible={modalIsVisible}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}></GoalItem>;
          }}
          // NOTE FOR APIS
          keyExtractor={(item, index) => {
            return item.id;
          }}
        // alwaysBounceVertical={false}
        />

      </View>
    </View>
  );
}


//STYLESHEET
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 70,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 5,
  },
});

