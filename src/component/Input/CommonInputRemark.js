/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput, Pressable, Platform } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { BackArrow_Icon, DownArrow_Icon } from '../../assets/Icons';
import { windowHeight } from '../../utils/Dimension';

const CommonInputRemark = (props) => {

    return (
        <View>
            {props?.InputHeader ?
                <View style={styles.rowText} >
                    <Text style={styles.TextStyle} >{props?.InputHeader}</Text>
                    {props?.mandatory === true ?
                        <Text style={styles.AstrikTextStyle} >*</Text>
                        : null
                    }
                </View>
                : null
            }
            {Platform.OS === 'ios' ?
                <TextInput
                    style={styles.TextInputStyles}
                    placeholder={props?.PalceHolder}
                    // onChangeText={text => setnumberOfCarpets(text)}
                    autoCorrect={false}
                    // keyboardType='numeric'
                    // editable={!disableEdit}
                    autoCapitalize="none"
                    maxLength={150}
                    numberOfLines={props?.numberOfLine ? props?.numberOfLine : 4}
                    multiline={true}
                />
                :
                <TextInput
                    style={styles.TextInputStyleAndroid}
                    placeholder={props?.PalceHolder}
                    // onChangeText={text => setnumberOfCarpets(text)}
                    autoCorrect={false}
                    // keyboardType='numeric'
                    // editable={!disableEdit}
                    autoCapitalize="none"
                    maxLength={150}
                    numberOfLines={props?.numberOfLine ? props?.numberOfLine : 4}
                    multiline={true}
                />

            }
        </View>
    );
};

export default CommonInputRemark;



const styles = StyleSheet.create({
    TextInputStyles: {
        height: windowHeight / 8,
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
    TextInputStyleAndroid: {
        textAlignVertical: 'top',
        padding: 10,
        color: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.BottomGrey,
        borderRadius: 5,
        fontSize: 14,
        marginVertical: 10,
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
        //   backgroundColor: "#fff",
        // padding: 5,
        // width: "100%",
        // height: 100,
        // fontSize: 18,
        // color: "#000",
        // borderRadius: 5,
        // borderWidth: 1,
        // borderColor: '#ddd',
        // marginVertical: 10,
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
