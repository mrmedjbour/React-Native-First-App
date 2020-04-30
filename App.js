import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [newGoal,setNewGoal] = useState('');
  const [goals,setGoals] = useState([]);
  const goalInputHandler = (curentInputText) => {
      setNewGoal(curentInputText);
  };
  const addGoalHandler = () => {
      setGoals(currentGoals => [...goals, newGoal]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput placeholder="Your Goal" style={styles.textInput} onChangeText={goalInputHandler} value={newGoal} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
