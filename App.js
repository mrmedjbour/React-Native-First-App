import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput placeholder="Your Goal" style={styles.textInput} />
        <Button title="Add"/>
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
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
