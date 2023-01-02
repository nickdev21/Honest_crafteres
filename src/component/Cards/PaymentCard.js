/* eslint-disable prettier/prettier */
import { View, Text, Pressable, ImageBackground, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import Images from '../../assets/Images';
import fonts from '../../assets/fonts';
import { HomeInq_Icon, MobileIn_Icon, PayPal_Icon, ReceiptTitile_Icon, ShoeInq_Icon, WhatsappIn_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import InvoiceDetailCard from './InvoiceDetailCard';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../routes/NavigationStrings';

const PaymentCard = () => {

    const navaigation = useNavigation()


    return (
        <Pressable style={styles.InvoiceDetailCardWrapper} onPress={() => { navaigation.navigate(NavigationStrings.PAYMENT_DETAILS) }} >
            <ImageBackground imageStyle={styles.ImageRadius} style={styles.UpperCardArea} source={Images.InvoiceGreenBackground} resizeMode="cover"  >
                <Text style={styles.CardTitle} >Payments</Text>
                <View style={styles.IconStyle} >
                    <Image style={styles.imageView} source={Images.PaymentGif} />
                    {/* <ReceiptTitile_Icon width={'100%'} height={'70%'} /> */}
                </View>
                {/* <View style={styles.IconStyleForOp} >
                </View> */}
            </ImageBackground>
            <View style={styles.DownCardArea} >
                <View style={styles.UpperCard}  >
                    <View style={styles.InvoiceNumberArea}  >
                        <Text style={styles.InvoiceNumber} >HCI1234-INV</Text>
                        <Text style={styles.InvoiceAmountText} >SGD 200.00</Text>
                    </View>
                    <View style={styles.InvoiceDate}  >
                        <Text style={styles.InvoiceName} >John Smith</Text>
                    </View>
                </View>
                <View style={styles.CenterCard}  >
                    <View style={styles.LineView}  >
                        <View style={styles.Circle} />
                        <View style={styles.LineWhite} />
                        <View style={styles.CircleBig} >
                            <View style={styles.CircleWhite} />
                        </View>
                    </View>
                </View>
                <View style={styles.LowerCard}  >
                    <View style={styles.InvoiceAmount}  >
                        <Text style={styles.InvoiceName} >04/11/2022</Text>
                    </View>
                    <View style={styles.InvoicePaymentStaus}  >
                        <Text style={styles.InvoiceDateText} >Payment Date</Text>
                        <View style={styles.IconPaid}>
                            <PayPal_Icon width={'30%'} height={'100%'} />
                            {/* <PayPal_Icon width={windowWidth / 10} height={windowHeight / 10} /> */}
                            <Text style={styles.InvoicePaidText} >Paid</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default PaymentCard;


const styles = StyleSheet.create({
    InvoiceDetailCardWrapper: {
        backgroundColor: colors.whiteColor,
        // backgroundColor: 'pink',
        marginVertical: 30,
        borderRadius: 10,
        margin: '4%',
        marginBottom: '5%',

    },
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    UpperCardArea: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: windowHeight / 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: '2%',
        // paddingVertical: '4%',
    },

    DownCardArea: {
        width: '100%',
        // justifyContent: 'space-between',
        paddingVertical: '1%',
        backgroundColor: colors.whiteColor,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: windowHeight / 4.2,
        alignSelf: 'center',
        marginBottom: 15,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        elevation: 9,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 0.10,
        // width: '95%',
        // height: 'auto',
        // marginVertical: 20,
        // paddingHorizontal: '2%',
    },
    CardTitle: {
        // backgroundColor: 'black',
        color: colors.whiteColor,
        fontSize: 16,
        paddingLeft: 10,
        // lineHeight: 25,
        fontFamily: fonts.PoppinsBold,
        width: '85%',
        paddingHorizontal: '2%',
        // height: '100%',
    },
    ImageRadius: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    IconStyle: {
        // backgroundColor: 'black',
        // justifyContent: 'center',
        // top: 5,
        right: 10,
        position: 'absolute',
        alignItems: 'flex-end',
        width: '10%',
        height: '100%',
    },
    IconStyleForOp: {
        // justifyContent: 'center',
        // top: 5,
        // backgroundColor: 'pink',
        // right: 10,
        // position: 'absolute',
        // alignItems: 'flex-end',
        // width: '10%',
        // height: '100%',
    },
    imageView: {
        width: windowWidth / 10,
        height: windowHeight / 15,
        resizeMode: 'contain',
        opacity: 0.2,
    },
    TextView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: 5,
    },
    TextViewForIcon: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: 5,
    },
    InvoiceCardLeftText: {
        color: colors.CaptionGrey,
        fontSize: 14,
        lineHeight: 16,
        fontFamily: fonts.PoppinsMedium,
    },
    InvoiceCardRightText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
    },
    IconVIew: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        width: '40%',
        justifyContent: 'flex-end',
    },
    UpperCard: {
        // backgroundColor: 'purple',
        // flexDirection: 'row',
        justifyContent: 'space-between',
        height: '35%',
        width: '90%',
        alignSelf: 'center',
        // marginVertical: 5,
    },
    LowerCard: {
        // backgroundColor: 'green',
        // flexDirection: 'row',
        justifyContent: 'space-between',
        height: '35%',
        width: '90%',
        alignSelf: 'center',
        // marginVertical: 5,

    },
    CenterCard: {
        // backgroundColor: 'pink',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '25%',
        width: '100%',
    },
    InvoiceNumberArea: {
        // backgroundColor: 'blue',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        height: '65%',
        // paddingVertical: 10,

    },
    InvoiceAmount: {
        // backgroundColor: 'skyblue',
        justifyContent: 'flex-end',
        width: '100%',
        height: '40%',
        // alignItems: 'center',

        // paddingVertical: 10,
    },
    InvoiceDate: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-evenly',
        // justifyContent: 'center',
        width: '100%',
        height: '35%',
        // alignItems: 'flex-end',
        // paddingVertical: 10,
    },
    InvoicePaymentStaus: {
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '60%',
        alignItems: 'center',
        // paddingVertical: 10,
    },
    LineView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    Circle: {
        backgroundColor: colors.successColor,
        width: windowHeight / 50,
        height: windowHeight / 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LineWhite: {
        backgroundColor: colors.successColor,
        width: '80%',
        height: 2,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleBig: {
        backgroundColor: colors.successColor,
        width: windowHeight / 35,
        height: windowHeight / 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleWhite: {
        backgroundColor: 'white',
        width: windowHeight / 120,
        height: windowHeight / 120,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InvoiceNumber: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
    },
    InvoiceName: {
        color: colors.InvoiceCardColor,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fonts.PoppinsMedium,
    },
    InvoiceDateText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
    },
    InvoicePaidText: {
        color: colors.successColor,
        fontSize: 14,
        lineHeight: 21,
        marginLeft: 20,
        fontFamily: fonts.PoppinsBold,
    },
    InvoiceAmountText: {
        // backgroundColor: 'pink',
        // height: '50%',
        // width: '100%',
        // alignSelf: 'center',
        // textAlign: 'right',
        color: colors.AnotherSecondaryColor,
        fontSize: 16,
        // lineHeight: 24,
        fontFamily: fonts.PoppinsHeavy,
    },
    IconView: {
        // backgroundColor: 'red',
        height: '40%',
        // width: '60%',
        // alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    IconPaid: {
        // backgroundColor: 'yellow',
        width: '40%',
        // alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: '100%',
        alignItems: 'center',
    },

});
