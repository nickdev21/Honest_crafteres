/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { BackArrow_Icon, DownArrow_Icon } from '../../assets/Icons';
import { windowHeight } from '../../utils/Dimension';

const CommonInput = (props) => {

    return (
        <View>
            <View style={styles.rowText} >
                <Text style={styles.TextStyle} >{props?.InputHeader}</Text>
                {props?.mandatory === true ?
                    <Text style={styles.AstrikTextStyle} >*</Text>
                    : null
                }
            </View>

            <View style={styles.TextInputStyles} >
                <TextInput
                    style={styles.Input}
                    placeholder={props?.PalceHolder}
                    // onChangeText={text => setnumberOfCarpets(text)}
                    autoCorrect={false}
                    // keyboardType='numeric'
                    // editable={!disableEdit}
                    autoCapitalize="none"
                />
                {props?.DownIcon === true ?
                    <Pressable onPress={() => { }} style={styles.IconView} >
                        <DownArrow_Icon width={'40%'} height={'100%'} />
                    </Pressable>
                    : null
                }
            </View>
        </View>
    );
};

export default CommonInput;



const styles = StyleSheet.create({
    TextInputStyles: {
        height: windowHeight / 18,
        flexDirection: 'row',
        backgroundColor: colors.whiteColor,
        // backgroundColor: 'red',
        fontSize: 16,
        paddingHorizontal: 10,
        // paddingVertical: 10,
        justifyContent: 'space-between',
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
    Input: {
        // backgroundColor: 'pink',
        width: '85%',
        fontSize: 14,
    },
    IconView: {
        // backgroundColor: 'green',
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
