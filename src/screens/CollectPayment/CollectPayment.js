/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import CommonInput from '../../component/Input/CommonInput';
import fonts from '../../assets/fonts';
import CommonInputRemark from '../../component/Input/CommonInputRemark';
import FormButton from '../../component/FormButton';
import NavigationStrings from '../../routes/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import { Gallery_Icon, SuccesPayment_Icon } from '../../assets/Icons';
import { windowHeight } from '../../utils/Dimension';
import PaymentSuccessModal from '../../component/Modal/PaymentSuccessModal';

const CollectPayment = () => {


    const InvoiceHeaderData = {
        HeaderTitile: 'Collect Payment',
    };

    const navigation = useNavigation();

    const PopUpData = {
        Icon: SuccesPayment_Icon, PopUpTittle: 'Payment for quotation iD HCI1234- QTN recorded successfully. ',
    }

    return (
        <View style={styles.CollectPaymentWrapper} >
            <CommonHeader data={InvoiceHeaderData} />
            <ScrollView style={styles.CollectFormStyle} >
                <Text style={styles.TextStyle} >Quotation ID</Text>
                <Text style={styles.InvoiceCode} >HCI1234-QTN</Text>
                <CommonInput InputHeader={'Payment Method'} PalceHolder={'Payment method'} mandatory={true} DownIcon={true} />
                <CommonInput InputHeader={'Amount Collected'} PalceHolder={'Amount Collected'} mandatory={true} />
                <CommonInputRemark InputHeader={'Remarks'} PalceHolder={'Remarks'} />
                <CommonInput InputHeader={'Transaction ID'} PalceHolder={'Transaction ID'} mandatory={false} />
                <Text style={styles.TextStyle} >Add Images</Text>
                <View style={styles.AddImageView} >
                    <Gallery_Icon width={'12%'} height={'75%'} />
                    <Text style={styles.AddIMagesText} >Add Images</Text>
                </View>
                <PaymentSuccessModal data={PopUpData} />
            </ScrollView>
        </View>
    );
};

export default CollectPayment;


const styles = StyleSheet.create({
    CollectPaymentWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    CollectFormStyle: {
        // backgroundColor: 'red',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    TextStyle: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        paddingVertical: 5,
    },
    InvoiceCode: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        paddingVertical: 15,
    },
    AddImageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight / 14,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1.3,
        borderColor: colors.AnotherSecondaryColor,
        borderStyle: 'dashed',
        marginBottom: 30,
    },
    AddIMagesText: {
        color: colors.AnotherSecondaryColor,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.PoppinsSemiBold,
    },
});
