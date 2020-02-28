import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
            
    );
};

const styles = StyleSheet.create({
    // screen: {
    //     flex: 1,
    //     padding: 10,
    //     alignItems: 'center'
    // },
    // title: {
    //     fontSize: 20,
    //     marginVertical: 10
    // },
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    // buttonContainer: {
    //     flexDirection: 'row',
    //     width: '100%',
    //     justifyContent: 'space-between',
    //     paddingHorizontal: 15,
    // },
});

export default Card;