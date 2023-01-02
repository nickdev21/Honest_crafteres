/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import fonts from '../../assets/fonts';
import VacantButton from '../../component/Buttons/VacantButton';
import FormButton from '../../component/FormButton';
import NavigationStrings from '../../routes/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import { QRCode_Icon } from '../../assets/Icons';
import { windowHeight } from '../../utils/Dimension';

const QRCode = () => {

    const QRCodeHeaderData = {
        HeaderTitile: 'QR Code',
    };
    const navigation = useNavigation()


    return (
        <View style={styles.QRCodeWrapper} >
            <CommonHeader data={QRCodeHeaderData} />
            <View style={styles.ViewQRCode} >
                <View style={styles.TextView} >
                    <Text style={styles.TextStyle} >Quotation ID</Text>
                    <Text style={styles.InvoiceCode} >HCI1234-QTN</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.TextStyle} >Item Id</Text>
                    <Text style={styles.InvoiceCode} >HCI1234-ORD-(1-1) </Text>
                </View>
                <View style={styles.QrView} >
                    <QRCode_Icon width={'80%'} height={windowHeight / 2.5} />
                    <Text style={styles.QrText} >HCI1234-ORD-(1-1) </Text>
                </View>
                <View style={styles.ButtonView} >
                    <VacantButton buttonTittle={'Print QR Code'} SCREEN_NAME={NavigationStrings.INVOICE_PREVIEW} />
                    <FormButton buttonTitle="Download QR Code" onPress={() => navigation.navigate(NavigationStrings.COLLECT_PAYMENT)} style={styles.ButtonStyle} />
                </View>
            </View>
        </View>
    );
};

export default QRCode;


const styles = StyleSheet.create({
    QRCodeWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    ViewQRCode: {
        paddingHorizontal: 15,
        marginVertical: 15,
    },
    TextView: {
        marginBottom: 10,
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
        paddingVertical: 10,
    },
    QrText: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        paddingVertical: 10,
    },
    ButtonView: {
        marginBottom: 20,
    },
    ButtonStyle: {
        width: '95%',
        alignSelf: 'center',
    },
    QrView: {
        width: '100%',
        height: windowHeight / 2,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
