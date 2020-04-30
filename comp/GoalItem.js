import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

const GoalItem = props => {

    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
                <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.6}>
                    <Image style={styles.delete} source={require('../images/remove.png')} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 7,
    },
    delete: {
        height: 30,
        width: 30,
    },
});
export default GoalItem;