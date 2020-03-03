import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
    // const [enteredValue, setEnteredValue] = useState('');

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        // borderColor: Colors.accent,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        // marginVertical: 10,
        // alignItems: 'center',
        // justifyContent:  'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'open-sans'
    }
});

export default MainButton;