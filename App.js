import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './comp/GoalItem';
import GoalInput from "./comp/GoalInput";

export default function App() {
  const [goals,setGoals] = useState([]);

  const addGoalHandler = goalValue => {
      setGoals(currentGoals => [...goals, { key: Math.random().toString(), value: goalValue }]);
  };

  const removeGoalHandler = goalId => {
      setGoals(currentGoals => {
          return goals.filter((goal) => goal.key !== goalId);
      });
  };

  return (
    <View style={styles.container}>
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList data={goals} renderItem={ itemData => (<GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoalHandler} />)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
