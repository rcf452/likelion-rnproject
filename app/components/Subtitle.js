import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const Subtitle = ({title, checktime}) => (
    <View>
        <Text style={styles.subtitleText}>{title}</Text>

    </View>
);

const styles = StyleSheet.create({
    subtitleText: {
        color: "#3f4e66",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Subtitle;