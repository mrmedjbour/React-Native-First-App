import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from "react-native";

const GoalInput = props => {
  const [newGoal,setNewGoal] = useState('');

  const goalInputHandler = (currentInputText) => {
     setNewGoal(currentInputText);
  };

  return (
      <View style={styles.containerInput}>
          <TextInput placeholder="Your Goal" style={styles.textInput} onChangeText={goalInputHandler} value={newGoal} />
          <Button title="Add" onPress={props.onAddGoal.bind(this, newGoal)} />
      </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;