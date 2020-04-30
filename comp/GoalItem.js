import React, {useState} from 'react';
import {Text, View, StyleSheet} from "react-native";

const GoalItem = props => {

    const goalInputHandler = (curentInputText) => {
        setNewGoal(curentInputText);
    };

    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 7,
    },
});
export default GoalItem;