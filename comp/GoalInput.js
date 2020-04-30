import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from "react-native";

const GoalInput = props => {
  const [newGoal,setNewGoal] = useState('');

  const goalInputHandler = (currentInputText) => {
     setNewGoal(currentInputText);
  };

  const addGoalHandler = () => {
      props.onAddGoal(newGoal);
      setNewGoal('');
  };


  return (
      <Modal visible={props.visible} animationType={'slide'}>
          <View style={styles.containerInput}>
              <TextInput placeholder="Your Goal" style={styles.textInput} onChangeText={goalInputHandler} value={newGoal} />
              <View style={styles.btnContainer}>
                  <View style={styles.btn}>
                      <Button title="Cancel" color={'red'} onPress={props.onCancel} />
                  </View>
                  <View style={styles.btn}>
                      <Button title="Add" onPress={addGoalHandler} />
                  </View>
              </View>
          </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 4,
        width: '80%',
        marginBottom: 10,
    },
    containerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    btn: {
        width: '40%',
    },
});

export default GoalInput;