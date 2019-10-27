import React from 'react';
import {View, Text, StyleSheet, Dimensions } from 'react-native';

const SuccessItem = ({text}) => (
    <View style = {styles.todoContainer}>
        <View style={styles.makerow}>
            <Text style = {styles.Todoitem}>{text}</Text>
        </View>
    </View>
);

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop: 20,
        borderBottomWidth: 1,
        width: width-40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Todoitem: {
        fontSize: 20,
    },
    checkbtn: {
        marginRight: 20,
    },
    makerow: {
        flexDirection: 'row',
    },
});

export default SuccessItem;