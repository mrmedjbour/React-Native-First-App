import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [newGoal,setNewGoal] = useState('');
  const [goals,setGoals] = useState([]);
  const goalInputHandler = (curentInputText) => {
      setNewGoal(curentInputText);
  };
  const addGoalHandler = () => {
      setGoals(currentGoals => [...goals, { key: Math.random().toString(), value: newGoal}]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput placeholder="Your Goal" style={styles.textInput} onChangeText={goalInputHandler} value={newGoal} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <FlatList data={goals} renderItem={ itemData => (
          <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
          </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 4,
    width: '80%',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
      padding: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
      marginVertical: 7,
  },
});
