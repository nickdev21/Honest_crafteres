/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Platform, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { ClosePopUp_Icon, SuccesPayment_Icon, SuccessGreen_Icon } from '../../assets/Icons';
import FormButton from '../FormButton';

const DropDown = (props) => {
    const [modalVisible, setModalVisible] = useState(false);




    return (
        <TouchableWithoutFeedback>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        </View>
                    </View>
                </Modal>
                <FormButton buttonTitle="Save" onPress={() => setModalVisible(true)} style={styles.ButtonStyle} />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
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
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 19,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.WelcomeCardText,

    },
});

export default DropDown;
