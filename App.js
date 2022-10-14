import { useState } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // STATES
  const [courseGoals, setCourseGoals] = useState([]);



  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals,
      {
        text: enteredGoalText, id: Math.random().toString(),
      }]);
  };

function deleteGoalHandler(id){
setCourseGoals(currentCourseGoals => {
  return currentCourseGoals.filter(
    (goal)=> goal.id !== id);
});
}

  // VIEWS
  return (
    <View style={styles.appContainer} >
      <GoalInput onAddGoal={addGoalHandler} />
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
    padding: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 5,
  }
  ,

});




//   // VIEWS
//   return (
//     <View style={styles.appContainer} >
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.textInput} placeholder='Course Goal' onChangeText={goalInputHandler} />
//         <Button title='Add Goal' onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalsContainer}>
//         <ScrollView alwaysBounceVertical={false}>
//         {courseGoals.map((goal) =>
//           <View  key={goal} style={styles.goalItem}>
//             <Text style={styles.goalText}>{goal}</Text>
//           </View>
//         )}
//         </ScrollView>
//     </View>
//     </View>
//   );\
// }
