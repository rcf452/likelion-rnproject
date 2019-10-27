import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const Todoitem = ({text, isComplete, changeComplete, deleteItem}) => (
    <View style = {styles.todoContainer}>
        <View style={styles.makerow}>
            <TouchableOpacity onPress = {changeComplete}>
                <AntDesign name={isComplete?"star":"staro"} size={20} style={styles.checkbtn}/>
            </TouchableOpacity>
            <Text style = {styles.Todoitem}>{text}</Text>
        </View>
        <TouchableOpacity onPress = {deleteItem} >
            <AntDesign name="close" size={20}/>
        </TouchableOpacity>
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

export default Todoitem;