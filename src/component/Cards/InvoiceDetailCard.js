/* eslint-disable prettier/prettier */
import { View, Text, Pressable, ImageBackground, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import Images from '../../assets/Images';
import fonts from '../../assets/fonts';
import { HomeInq_Icon, PayPal_Icon, ReceiptTitile_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';

const InvoiceDetailCard = () => {
    return (
        <Pressable style={styles.InvoiceDetailCardWrapper} >
            <ImageBackground imageStyle={styles.ImageRadius} style={styles.UpperCardArea} source={Images.InvoiceGreenBackground} resizeMode="cover"  >
                <Text style={styles.CardTitle} >Invoice Details</Text>
                <View style={styles.IconStyle} >
                    <Image style={styles.imageView} source={Images.InvoiceGif} />
                    {/* <ReceiptTitile_Icon width={'100%'} height={'70%'} /> */}
                </View>
            </ImageBackground>
            <View style={styles.DownCardArea} >
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Invoice ID</Text>
                    <Text style={styles.InvoiceCardRightText} >HCI1234-INV</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Invoice Date</Text>
                    <Text style={styles.InvoiceCardRightText} >05/09/2022</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Customer ID</Text>
                    <Text style={styles.InvoiceCardRightText} >HC1234</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Customer</Text>
                    <Text style={styles.InvoiceCardRightText} >John</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Quote Created By</Text>
                    <Text style={styles.InvoiceCardRightText} >Sales Incharge</Text>
                </View>
                <View style={styles.TextViewForIcon} >
                    <Text style={styles.InvoiceCardLeftText} >Service Type</Text>
                    <View style={styles.IconVIew} >
                        <HomeInq_Icon width={windowWidth / 12} height={windowHeight / 36} />
                        <Text style={[styles.InvoiceCardRightText]} >
                            In house</Text>
                    </View>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Invoice Amount</Text>
                    <Text style={styles.InvoiceCardRightText} >SGD 200.00</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Payment  Date</Text>
                    <Text style={styles.InvoiceCardRightText} >23/09/2022</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Payment Mode</Text>
                    <PayPal_Icon width={'12%'} height={'90%'} />
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Status</Text>
                    <Text style={styles.InvoicePaidText} >Paid</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default InvoiceDetailCard;


const styles = StyleSheet.create({
    InvoiceDetailCardWrapper: {
        backgroundColor: colors.whiteColor,
        marginVertical: 30,
        borderRadius: 10,
        margin: '4%',
        marginBottom: '5%',
        shadowColor: '#000',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
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
    ImageRadius: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    DownCardArea: {
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: '2%',

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
    InvoicePaidText: {
        color: colors.successColor,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsBold,
    },
    IconVIew: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        width: '40%',
        justifyContent: 'flex-end',
    },

});
