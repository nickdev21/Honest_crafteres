/* eslint-disable prettier/prettier */
import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { windowHeight } from '../../utils/Dimension';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const VacantButton = ({ borderButton, buttonTittle, SCREEN_NAME }) => {
    const navigation = useNavigation()
    return (
        <Pressable style={[borderButton ? styles.buttonWrap : styles.buttonWrapBorder]} onPress={() => { navigation.navigate(SCREEN_NAME) }}  >
            <Text style={[borderButton ? styles.buttonText : styles.buttonTextBorder]} >{buttonTittle}</Text>
        </Pressable>
    );
};

export default VacantButton;



const styles = StyleSheet.create({
    buttonWrap: {
        height: windowHeight / 15,
        width: '100%',
        borderRadius: 14,
        backgroundColor: colors.AnotherSecondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonWrapBorder: {
        height: windowHeight / 15,
        width: '95%',
        borderRadius: 14,
        backgroundColor: colors.whiteColor,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: colors.AnotherSecondaryColor,
    },
    buttonText: {
        color: colors.whiteColor,
        fontSize: 16,
        lineHeight: 27,
        fontFamily: fonts.PoppinsBold,
    },
    buttonTextBorder: {
        color: colors.AnotherSecondaryColor,
        fontSize: 16,
        lineHeight: 27,
        fontFamily: fonts.PoppinsBold,
    },

})