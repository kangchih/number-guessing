import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors';
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    // const [enteredValue, setEnteredValue] = useState('');

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText >Game Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        // fadeDuration={1000}
                        // source={require('../assets/success.png')}
                        source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg' }}

                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed{' '}
                        <Text style={styles.highlight}>{props.userNumber}</Text> rounds to
                    guess the number{' '}
                        <Text style={styles.highlight}>{props.roundsNumber}</Text>.
                </BodyText>
                </View>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // fontFamily:
    },
    imageContainer: {
        // width: 300,
        width: Dimensions.get('window').width * 0.7,
        // height: 300,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        // borderRadius: Dimensions.get('window').height * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 30,
        // marginVertical: 15,
        marginVertical: Dimensions.get('window').height / 60,
        // height: '100%',
    },
    resultText: {
        textAlign: 'center',
        // fontSize: 20
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOverScreen;