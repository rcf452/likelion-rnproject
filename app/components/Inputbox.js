import React from "react";
import {TextInput, StyleSheet} from 'react-native';

const Input = ({value, changeText, addTodo}) => (
    <TextInput sytle={styles.input}
               value={value}
               placeholder={"할 일을 입력해주세요"}
               maxLength={30}
               onChangeText={changeText} // 이쪽으로 넘어오면서 실행
               onEndEditing={addTodo}
               returnKeyType="done"/> //완료버튼에 출력될 글자
);

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop: 15,
    },
});

export default Input;