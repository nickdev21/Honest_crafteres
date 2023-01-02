/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
    Alert, StyleSheet,
    Modal,
    Text, Pressable, View, Platform, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, FlatList, TextInput
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { clockRunning } from 'react-native-reanimated';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { ClosePopUp_Icon, DownArrow_Icon, SuccesPayment_Icon, SuccessGreen_Icon } from '../../assets/Icons';
import CustomCheckBox from '../CheckBox/CheckBox';
import FormButton from '../FormButton';
// import Modal from "react-native-modal";
import { windowHeight, windowWidth } from '../../utils/Dimension';
import CommonInput from '../Input/CommonInput';

const DropDown = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = useState(false);

    const { data, Value, stateFunction } = props;


    const SetValue = (val, Itemname) => {
        setChecked(val);
        if (Itemname === Value) {
            stateFunction(!checked);
        }
        console.log(val, Itemname, Value, 'Changed Value');
    };



    const ItemRender = ({ item, index }) => {
        return (
            <View style={styles.BlockTitle} >
                <Checkbox.Android
                    status={checked ? 'checked' : 'unchecked'}
                    color={colors.AnotherSecondaryColor}
                    onPress={() => {
                        SetValue(!checked, item?.ItemName);
                    }}
                    uncheckedColor={colors.CheckBoxColor}
                // disabled={disableEdit}
                />
                <Text style={styles.modalText} >{item?.ItemName}</Text>
            </View>
        )
    };


    return (
        <>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        // Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <FlatList data={data} renderItem={ItemRender} style={styles.FlatListStyle} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />

                        </View>
                    </View>
                </Modal>
                <View>
                    <View style={styles.rowText} >
                        <Text style={styles.TextStyle} >{props?.InputHeader}</Text>
                        {props?.mandatory === true ?
                            <Text style={styles.AstrikTextStyle} >*</Text>
                            : null
                        }
                    </View>

                    <Pressable style={styles.TextInputStyles} onPress={() => setModalVisible(true)} >
                        <TextInput
                            style={styles.Input}
                            placeholder={props?.PalceHolder}
                            // onChangeText={text => setnumberOfCarpets(text)}
                            autoCorrect={false}
                            // keyboardType='numeric'
                            editable={false}
                            autoCapitalize="none"
                        />
                        <Pressable onPress={() => { }} style={styles.IconView} >
                            <DownArrow_Icon width={windowWidth / 20} height={windowHeight / 30} />
                        </Pressable>
                    </Pressable>
                </View>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.whiteColor,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: '85%',
        // height: '30%',
        maxHeight: '40%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 19,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.WelcomeCardText,
    },
    BlockTitle: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    FlatListStyle: {
        width: '100%',
    },
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

export default DropDown;
