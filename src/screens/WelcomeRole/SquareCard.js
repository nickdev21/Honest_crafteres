/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { windowHeight } from '../../utils/Dimension';

const SquareCard = ({ Icon, title }) => {
    return (
        <View style={styles.SquareTileWrapper} >
            <View style={styles.UpperWrap} >
                <Icon width="100%" height="80%" />
            </View>
            <View style={styles.DownWrap} >
                <Text style={styles.textStyle} >{title}</Text>
            </View>
        </View>
    );
};

export default SquareCard;


const styles = StyleSheet.create({
    SquareTileWrapper: {
        flex: 1 / 2,
        backgroundColor: colors.whiteColor,
        width: '45%',
        // height: '90%',
        height: windowHeight / 4.4,
        margin: 10,
        padding: 5,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        elevation: 7,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
    },
    UpperWrap: {
        backgroundColor: colors.GreyWelcomeBack,
        width: '100%',
        height: '65%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    DownWrap: {
        width: '100%',
        height: '35%',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    textStyle: {
        width: '100%',
        fontSize: 12,
        color: colors.WelcomeCardText,
        letterSpacing: 0.2,
        fontFamily: fonts.PoppinsHeavy,
        textTransform: 'uppercase',
        textAlign: 'center',
        alignSelf: 'center',

    },
});
