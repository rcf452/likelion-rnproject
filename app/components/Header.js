import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Header = () => (
    <View styles={styles.headerContainer}>
        <Text sytles = {styles.headerText}> Todo </Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer:{
        marginTop:70,
        marginBottom:40,
    },
    headerText: {
        fontSize: 35,
        fontWeight: "bold",
        color:'#3f4e66',
    },
})
export default Header;