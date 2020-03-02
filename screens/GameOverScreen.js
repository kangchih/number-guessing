import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'


const GameOverScreen = props => {
    // const [enteredValue, setEnteredValue] = useState('');

    return (
        <View style={styles.screen}>
            <TitleText >Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // fadeDuration={1000}
                    // source={require('../assets/success.png')}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-zxunNTYtdoZCdobC4tzeAbFYFcKF1QFXlXzOLjx9iWYLoJcm' }}

                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
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
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default GameOverScreen;