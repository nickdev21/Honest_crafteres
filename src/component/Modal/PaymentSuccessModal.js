/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Platform, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { ClosePopUp_Icon, SuccesPayment_Icon, SuccessGreen_Icon } from '../../assets/Icons';
import FormButton from '../FormButton';

const PaymentSuccessModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const { Icon, PopUpTittle } = props?.data;



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
                            <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.closePopUp} >
                                <ClosePopUp_Icon width={'15%'} height={'100%'} />
                            </Pressable>
                            <View style={styles.IconStyle} >
                                <Icon width={'100%'} height={'70%'} />
                            </View>
                            <View style={styles.TextStyle} >
                                <Text style={styles.modalText}>{PopUpTittle}</Text>
                            </View>
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
        height: '30%',
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
    closePopUp: {
        height: '15%',
        width: '100%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    IconStyle: {
        height: '50%',
        width: '100%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 19,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.WelcomeCardText,

    },
    TextStyle: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35%',
        paddingHorizontal: 20,
    },
});

export default PaymentSuccessModal;
