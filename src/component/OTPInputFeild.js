/* eslint-disable prettier/prettier */
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { colors } from '../assets/colors';
import fonts from '../assets/fonts';

const OTPInputFeild = ({ setpinReady, code, setcode, maxLength }) => {

    const [inputContainerIsFocused, setinputContainerIsFocused] = useState(false);
    // const [changeStyle, setchangeStyle] = useState(false)
    const codeDigitsArray = new Array(maxLength).fill(0);

    const TextInputRef = useRef(null);

    useEffect(() => {
        setpinReady(code.length === maxLength);
        return () => setpinReady(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);


    const handleOnpress = () => {
        setinputContainerIsFocused(true);
        TextInputRef?.current?.focus();
    };


    const onHandleBlur = () => {
        setinputContainerIsFocused(false);
    };

    const toCodeDigitInput = (_value, index) => {
        const emptyInputChar = ' ';
        const digit = code[index] || emptyInputChar;

        const isCurretnDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;

        const isDgitFocused = isCurretnDigit || (isLastDigit && isCodeFull) || isCodeFull;

        // const styledOTPInput = inputContainerIsFocused && isDgitFocused ? true : false;
        // const styledOTPInput = inputContainerIsFocused && isDgitFocused ? OTPInputFocused : ViewStyle;

        return (
            (inputContainerIsFocused && isDgitFocused) === true ?
                <View style={styles.OTPInputFocused} key={index} >
                    <Text style={styles.TextStyle} >{digit}</Text>
                </View>
                :
                <View style={styles.ViewStyle} key={index} >
                    <Text style={styles.TextStyle} >{digit}</Text>
                </View>
        );
    };



    return (
        <View style={styles.OTPInputSection} >
            <Pressable style={styles.pressableStyle} onPress={handleOnpress} >
                {codeDigitsArray?.map((item, index) => toCodeDigitInput(item, index))}
            </Pressable>
            <TextInput style={styles.HiddenTextInput} value={code} onChangeText={setcode} maxLength={maxLength} keyboardType="number-pad" ref={TextInputRef} onBlur={onHandleBlur} textContentType="oneTimeCode" />
        </View>
    );
};

export default OTPInputFeild;


const styles = StyleSheet.create({
    OTPInputSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        width: '100%',
        // backgroundColor: 'pink',
    },
    HiddenTextInput: {
        // borderColor: 'transparent',
        // borderBottomColor: colors.AnotherSecondaryColor,
        // borderWidth: 2,
        // padding: 12,
        // marginTop: 15,
        // width: 300,
        // color: colors.whiteColor,
        position: 'absolute',
        width: 1,
        height: 1,
        opacity: 0,
    },
    pressableStyle: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ViewStyle: {
        borderColor: 'transparent',
        borderBottomColor: colors.BottomGrey,
        // backgroundColor: 'red',
        borderWidth: 2,
        minWidth: '15%',
        padding: 12,
        // borderRadius: 5,

    },
    TextStyle: {
        // fontFamily: 22,
        fontWeight: fonts.PoppinsSemiBold,
        textAlign: 'center',
        // color: colors.whiteColor,
    },
    OTPInputFocused: {
        borderColor: 'transparent',
        borderBottomColor: colors.AnotherSecondaryColor,
        borderWidth: 2,
        minWidth: '15%',
        padding: 12,
        // backgroundColor: 'red',
    },
});
