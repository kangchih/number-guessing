import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';


// const generateRandomBetween = (min, max, exclude) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     const rndNum = Math.floor(Math.random() * (max - min)) + min;
//     if (rndNum === exclude) {
//         return generateRandomBetween(min, max, exlude);
//     } else {
//         return rndNum;
//     }
// };


const GameOverScreen = props => {
    // const [enteredValue, setEnteredValue] = useState('');

    return (
        <View style={styles.screen}>
            <Text >Game Over!</Text>
            <Text >Number of rounds: {props.roundsNumber}</Text>
            <Text >Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GameOverScreen;