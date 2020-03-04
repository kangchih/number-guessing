import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
    // const [enteredValue, setEnteredValue] = useState('');
    let ButtonComponent = TouchableOpacity;

    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25, //Same with button's borderRadius
        overflow: 'hidden' // means any child component that would go beyond the boundaries of this component
                            //this will ensure that the ripple effect which is now a child  
    },
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