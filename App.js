import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';
import GoalItem from './comp/GoalItem';
import GoalInput from "./comp/GoalInput";

export default function App() {
  const [goals,setGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);

  const addGoalHandler = goalValue => {
      if (goalValue == '') {
          return;
      }else {
          setGoals(currentGoals => [...goals, { key: Math.random().toString(), value: goalValue }]);
          setIsAddMode(false);
      }
  };

  const removeGoalHandler = goalId => {
      setGoals(currentGoals => {
          return goals.filter((goal) => goal.key !== goalId);
      });
  };

  const cancelGoalHandler = () => {
      setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
        <Button title={'Add New Goal'} onPress={() => setIsAddMode(true)}/>
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
        <FlatList data={goals} renderItem={ itemData => (<GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoalHandler} />)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
