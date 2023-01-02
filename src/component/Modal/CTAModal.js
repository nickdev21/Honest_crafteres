/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Platform, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { ClosePopUp_Icon, CrossCta_Icon, SuccesPayment_Icon, SuccessGreen_Icon } from '../../assets/Icons';
import FormButton from '../FormButton';
import PaymentSuccessModal from './PaymentSuccessModal';

const CTAModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const { Icon, PopUpTittle, FirstCTA, SecondCTA, FirstFunction, SecondFunction } = props?.data;

    const FirstAction = () => {
        FirstFunction();
        setModalVisible(!modalVisible)
    }
    
    const SecondAction = () => {
        SecondFunction();
        setModalVisible(!modalVisible)
    }



    return (
        <>
            <StatusBar animated={true} backgroundColor={colors.primaryColor} barStyle={'dark-content'} />
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
                                    <CrossCta_Icon width={'15%'} height={'75%'} />
                                </Pressable>
                                <View style={styles.IconStyle} >
                                    <Icon width={'100%'} height={'70%'} />
                                </View>
                                <View style={styles.TextStyle} >
                                    <Text style={styles.modalText}>{PopUpTittle}</Text>
                                </View>
                                <View style={styles.CTAView}  >
                                    <Pressable style={styles.FirstCTAStyle} onPress={() => { FirstAction() }} >
                                        <Text style={styles.CtATextFirst} >{FirstCTA}</Text>
                                    </Pressable>
                                    <Pressable style={styles.SecondCTAStyle} onPress={() => { SecondAction() }} >
                                        <Text style={styles.CtATextSecond} >{SecondCTA}</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <props.RenderComp setModalVisible={setModalVisible} modalVisible={modalVisible} />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
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
        // paddingVertical: 10,
        // paddingHorizontal: 5,
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
        zIndex: 5,
        marginTop: 5,
        // alignSelf: 'flex-end',
        // backgroundColor: 'red',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    IconStyle: {
        height: '40%',
        width: '100%',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    modalText: {
        // backgroundColor: 'green',
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
        width: '95%',
        paddingHorizontal: 10,
    },
    CTAView: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    FirstCTAStyle: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        borderWidth: 0.5,
        borderColor: colors.justLineColor,
        borderBottomLeftRadius: 20,
    },
    SecondCTAStyle: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
        width: '50%',
        borderWidth: 0.5,
        borderColor: colors.justLineColor,
        borderBottomRightRadius: 20,
    },
    CtATextFirst: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.WelcomeCardText,
    },
    CtATextSecond: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.PoppinsBold,
        color: colors.AnotherSecondaryColor,
    },
});

export default CTAModal;
