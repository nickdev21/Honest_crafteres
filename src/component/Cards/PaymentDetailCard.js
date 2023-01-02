/* eslint-disable prettier/prettier */
import { View, Text, Pressable, ImageBackground, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import Images from '../../assets/Images';
import fonts from '../../assets/fonts';
import { HomeInq_Icon, PayPal_Icon, ReceiptTitile_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';

const PaymentDetailCard = (props) => {

    const { Data } = props;

    // console.log(Data);
    return (
        <Pressable style={styles.PaymentDetailWrapper} >
            <ImageBackground imageStyle={styles.ImageRadius} style={styles.UpperCardArea} source={Images.InvoiceGreenBackground} resizeMode="cover"  >
                <Text style={styles.CardTitle} >Payment Details</Text>
                <View style={styles.IconStyle} >
                    <Image style={styles.imageView} source={Images.PaymentGif} />
                    {/* <ReceiptTitile_Icon width={'100%'} height={'70%'} /> */}
                </View>
            </ImageBackground>
            <View style={styles.DownCardArea} >
                <FlatList listKey={(item, index) => 'D' + index.toString()} contentContainerStyle={styles.FlatListStyles} data={Data} renderItem={({ item }) => {
                    return (
                        <View style={styles.TextView} >
                            <Text style={styles.InvoiceCardLeftText} >{item?.LeftText}</Text>
                            <Text style={styles.InvoiceCardRightText} >{item?.RightText}</Text>
                        </View>
                    )
                }} showsVerticalScrollIndicator={true} showsHorizontalScrollIndicator={false} />
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

export default PaymentDetailCard;


const styles = StyleSheet.create({
    PaymentDetailWrapper: {
        backgroundColor: colors.whiteColor,
        marginVertical: 30,
        borderRadius: 10,
        margin: '4%',
        marginBottom: '5%',
        shadowColor: colors.ShadowColor,
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
        // backgroundColor: 'red',
        width: '40%',
        justifyContent: 'flex-end',
    },

});
