import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = props => {

    const goalInputHandler = (curentInputText) => {
        setNewGoal(curentInputText);
    };

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.7}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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