/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/Feather';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { Calander_Icon, Date_Icon, Decrement_Icon, Increament_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';

// onChangeText={changedText}
const InputNumber = ({
    style,
    newHeading,
    InputHeader,
    newHeadingColor,
    labelValue,
    PalceHolder,
    iconType,
    changedText,
    isPassword,
    headingTextColor,
    fontsize,
    mandatory,
    StateValue,
    dataPickerFunction,
    ...rest
}) => {


    const increaseNum = (val) => {
        changedText(parseInt(val) + 1);
    };

    const DecreaseNum = (val) => {
        changedText(parseInt(val) - 1);
    };

    return (
        <>
            <View style={[styles.OuterArea, style]} >
                <View style={styles.rowText} >
                    <Text style={styles.TextStyle} >{InputHeader}</Text>
                    {mandatory === true ?
                        <Text style={styles.AstrikTextStyle} >*</Text>
                        : null
                    }
                </View>
                <View style={styles.inputContainer} >

                    <TextInput
                        // value={StateValue}
                        onChangeText={changedText}
                        style={styles.input}
                        numberOfLines={1}
                        placeholder={PalceHolder}
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        {...rest}
                    >{StateValue}</TextInput>
                    <View style={styles.iconStyle} >

                        <Pressable style={styles.IconUp} onPress={() => { increaseNum(StateValue); }} >
                            <Increament_Icon width={windowWidth / 30} height={windowHeight / 30} />
                        </Pressable>
                        <Pressable style={styles.IconDown} onPress={() => { DecreaseNum(StateValue); }} >
                            <Decrement_Icon width={windowWidth / 30} height={windowHeight / 30} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    );
};

export default InputNumber;

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: windowHeight / 18,
        flexDirection: 'row',
        alignItems: 'center',
        color: '#000',
        borderColor: colors.BottomGrey,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: 'rgba(0, 110, 233, 0.02)',
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
    },
    Subjectstyle: {
        color: '#000',
        fontSize: 16,
    },
    OuterArea: {
        width: '100%',
    },
    TextColor: {
        fontSize: 14,
        paddingVertical: 10,
        color: colors.AnotherSecondaryColor,
        fontFamily: fonts.PoppinsMedium,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    rowText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextStyle: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        paddingVertical: 5,
    },
    AstrikTextStyle: {
        color: colors.AstrikRed,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        // width: 50,
        // backgroundColor: 'pink',
    },
    IconUp: {
        paddingHorizontal: 5,
        // backgroundColor: 'red',
        borderWidth: 1,
        height: '50%',
        width: '100%',
        borderColor: colors.BottomGrey,
        borderTopRightRadius: 5,
        justifyContent: 'center',
    },
    IconDown: {
        paddingHorizontal: 5,
        // backgroundColor: 'red',
        borderWidth: 1,
        borderColor: colors.BottomGrey,
        height: '50%',
        justifyContent: 'center',
        width: '100%',
        borderBottomRightRadius: 5,
    },
});
