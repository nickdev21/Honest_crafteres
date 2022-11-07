/* eslint-disable prettier/prettier */
import { View, Text, TextInput, StyleSheet, Pressable, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors } from '../assets/colors';
import fonts from '../assets/fonts';

const OTPInputFeild = ({ setpinReady, code, setcode, maxLength }) => {

    const [inputContainerIsFocused, setinputContainerIsFocused] = useState(false)
    const codeDigitsArray = new Array(maxLength).fill(0);

    const TextInputRef = useRef(null);

    const handleOnpress = () => {
        setinputContainerIsFocused(true);
        TextInputRef?.current?.focus();
    };


    const onHandleBlur = () => {
        setinputContainerIsFocused(false);
    };

    const toCodeDigitInput = (_value, index) => {
        const emptyInputChar = " ";
        const digit = code[index] || emptyInputChar;
        return (
            <View style={styles.ViewStyle} key={index} >
                <Text style={styles.TextStyle} >{digit}</Text>
            </View>
        )
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
    },
    HiddenTextInput: {
        borderColor: 'transparent',
        borderBottomColor: colors.AnotherSecondaryColor,
        borderWidth: 2,
        padding: 12,
        marginTop: 15,
        width: 300,
        color: colors.whiteColor,
    },
    pressableStyle: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ViewStyle: {
        // borderColor: 'transparent',
        // borderBottomColor: colors.AnotherSecondaryColor,
        // borderWidth: 2,
        // minWidth: '15%',
        // padding: 12,
        // borderRadius: 5,

    },
    TextStyle: {
        // fontFamily: 22,
        // fontWeight: fonts.PoppinsSemiBold,
        // textAlign: 'center',
        // color: colors.whiteColor,
    },
})