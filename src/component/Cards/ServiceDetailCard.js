/* eslint-disable prettier/prettier */
import { View, Text, Pressable, ImageBackground, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import Images from '../../assets/Images';
import fonts from '../../assets/fonts';
import { Flag_Icon, HomeInq_Icon, PayPal_Icon, ReceiptTitile_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';

const ServiceDetailCard = () => {
    return (
        <Pressable style={styles.ServiceDetailCardWrapper} >
            <ImageBackground imageStyle={styles.ImageRadius} style={styles.UpperCardArea} source={Images.InvoiceGreenBackground} resizeMode="cover"  >
                <Text style={styles.CardTitle} >Service Details</Text>
                <View style={styles.IconStyle} >
                    <Image style={styles.imageView} source={Images.InvoiceGif} />
                    {/* <ReceiptTitile_Icon width={'100%'} height={'70%'} /> */}
                </View>
            </ImageBackground>
            <View style={styles.DownCardArea} >
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Quotation ID</Text>
                    <View style={styles.IconVIew} >
                        <Flag_Icon width={windowWidth / 12} height={windowHeight / 40} />
                        <Text style={styles.InvoiceCardRightText} >HCI1234-INV</Text>
                    </View>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Quotation Date</Text>
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
                    <Text style={styles.InvoiceCardLeftText} >Created By</Text>
                    <Text style={styles.InvoiceCardRightText} >Sales Incharge</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Quotation Amount</Text>
                    <Text style={styles.InvoiceCardRightText} >SGD 120.32</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Discount</Text>
                    <Text style={styles.InvoiceCardRightText} >SGD 10.23</Text>
                </View>
                <View style={styles.TextViewForIcon} >
                    <Text style={styles.InvoiceCardLeftText} >Service Type</Text>
                    {/* <View style={styles.IconVIew} >
                        <HomeInq_Icon width={windowWidth / 15} height={windowHeight / 36} />
                        <Text style={styles.InvoiceCardRightText} >In house</Text>
                    </View> */}
                    <View style={styles.IconVIew} >
                        <HomeInq_Icon width={windowWidth / 10} height={windowHeight / 36} />
                        <Text style={[styles.InvoiceCardRightText, { width: 'auto' }]} >In house</Text>
                    </View>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Item Pickup Date</Text>
                    <Text style={styles.InvoiceCardRightText} >19/10/2022</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Item Pickup Time</Text>
                    <Text style={styles.InvoiceCardRightText} >09-02pm</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Pickup Address</Text>
                    <Text style={styles.InvoiceCardRightText} >510, Kampong Bahru Rd,Street 123, Singapore 456589</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Special Request</Text>
                    <Text style={styles.InvoiceCardRightText} >Loreum ipsum is dummy text.</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default ServiceDetailCard;


const styles = StyleSheet.create({
    ServiceDetailCardWrapper: {
        backgroundColor: colors.whiteColor,
        marginVertical: 30,
        borderRadius: 10,
        margin: '4%',
        marginBottom: '5%',
        shadowColor: colors.ShadowColor,
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 8,
        shadowOpacity: 0.03,
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
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
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
        // backgroundColor: 'red',
        width: '50%',
        fontSize: 14,
        // lineHeight: 14,
        fontFamily: fonts.PoppinsMedium,
    },
    InvoiceCardRightText: {
        // backgroundColor: 'pink',
        width: '50%',
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'right',
    },
    InvoicePaidText: {
        color: colors.successColor,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsBold,
    },
    IconVIew: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

});
