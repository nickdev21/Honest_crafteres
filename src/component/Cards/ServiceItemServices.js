/* eslint-disable prettier/prettier */
import { View, Text, Pressable, ImageBackground, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import Images from '../../assets/Images';
import fonts from '../../assets/fonts';
import { HomeInq_Icon, PayPal_Icon, Pen_Icon, QRCode_Icon, ReceiptTitile_Icon, TrashItem_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';

const ServiceItemServices = () => {


    const ItemStaticData = [
        { id: 1, ItemCode: 'HCI1234-ORD-(1-1)', ProductName: 'XYZ HAND BAG', ServiceName: 'Deep Cleaning', Description: 'Loreum ispum is dummy text. Loreum ispum is dummy text', Qty: 1, SingleAmount: '100.00', TotalAmount: `100.00` },
        { id: 2, ItemCode: 'HCI1234-ORD-(1-2)', ProductName: 'Sneakers', ServiceName: 'Shoe shine & polish', Description: 'Loreum ispum is dummy text. Loreum ispum is dummy text', Qty: 2, SingleAmount: '75.00', TotalAmount: `150.00` },
    ];


    const RenderCard = ({ item, index }) => {
        return (
            <>
                <View style={styles.MainDetailView} >
                    <View style={styles.ProfileImgView} >
                        <View style={styles.ImageSTyle} >
                            <Image source={Images.TempUser} style={styles.UserImageStyle} />
                        </View>
                    </View>
                    <View style={styles.TextDetail} >
                        <View style={styles.TextTrashPen} >
                            <Text style={styles.ItemNameText} >{item?.ItemCode}</Text>
                            <View style={styles.TrashPen} >
                                <TrashItem_Icon width={'50%'} height={windowHeight / 35} />
                                <Pen_Icon width={'50%'} height={windowHeight / 35} />
                            </View>
                        </View>
                        <Text style={styles.ProductNameText} >{item?.ProductName}</Text>
                        <Text style={styles.ServiceNameText} >{item?.ServiceName}</Text>
                        <View style={styles.QrWithDetail} >
                            <Text style={styles.ServiceDesText} >{item?.Description}</Text>
                            <View style={styles.QrView} >
                                <QRCode_Icon width={'50%'} height={windowHeight / 30} />
                            </View>
                        </View>
                        <View style={styles.AmountView} >
                            <View style={styles.NumWithAmount} >
                                <Text style={styles.QtyText} >{item?.Qty}</Text>
                                <Text style={styles.CrossText} >x</Text>
                                <Text style={styles.AmountTextNormal} >SGD {item?.SingleAmount}</Text>
                            </View>


                            <Text style={styles.InvoiceAmountText} >S$ {item?.TotalAmount}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.JustLine}>
                    <View style={styles.JustLineMain} />
                </View>
            </>
        );
    };



    return (
        <View style={styles.DownCardArea} >
            <FlatList data={ItemStaticData} renderItem={RenderCard} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
        </View>
    );
};

export default ServiceItemServices;


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
        // backgroundColor: 'pink',
        width: '100%',
        justifyContent: 'space-between',
        // paddingVertical: '2%',
        paddingHorizontal: '2%',
        // paddingRight: '5%',

        // paddingHorizontal: '2%',
    },
    CardTitle: {
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
    InvoiceAmountText: {
        width: '50%',
        alignSelf: 'center',
        textAlign: 'right',
        color: colors.AnotherSecondaryColor,
        fontSize: 16,
        // lineHeight: 24,
        paddingRight: 10,
        fontFamily: fonts.PoppinsHeavy,
    },
    PendingView: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 15,
    },
    MainDetailView: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        marginTop: 15,

    },
    ProfileImgView: {
        // backgroundColor: 'beige',
        width: '15%',
    },
    TextDetail: {
        // backgroundColor: 'skyblue',
        width: '85%',
        paddingVertical: 5,
    },
    AmountView: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    NumWithAmount: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        width: '50%',
    },
    ImageSTyle: {
        // backgroundColor: 'black',
        height: windowHeight / 25,
        width: windowHeight / 25,
        // width: 'auto',
        borderRadius: 100,
        alignSelf: 'center',
    },
    UserImageStyle: {
        // backgroundColor: 'red',
        height: '100%',
        width: '100%',
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 5,
    },
    JustLine: {
        height: '1%',
        top: '5%',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 5,
        // alignItems: 'center',
        // alignSelf: 'center',
        // position: 'absolute',
    },
    JustLineMain: {
        backgroundColor: colors.justLineColor,
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    PendingText: {
        backgroundColor: colors.PendingColor,
        paddingHorizontal: 15,
        // marginHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 100,
    },
    PendingTextStyles: {
        color: colors.whiteColor,
        fontSize: 12,
        fontFamily: fonts.PoppinsBold,
    },
    ItemNameText: {
        // backgroundColor: 'red',
        width: '70%',
        color: colors.WelcomeCardText,
        fontSize: 14,
        fontFamily: fonts.PoppinsBold,
    },
    TextTrashPen: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TrashPen: {
        // backgroundColor: 'green',
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    QrWithDetail: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'flex-end',
        // justifyContent: 'flex-end',
    },
    QrView: {
        // backgroundColor: 'pink',
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    ProductNameText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        fontFamily: fonts.PoppinsSemiBold,
        marginBottom: 5,
    },
    ServiceNameText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        fontFamily: fonts.PoppinsSemiBold,
    },
    ServiceDesText: {
        color: colors.WelcomeCardText,
        width: '75%',
        fontSize: 12,

        fontFamily: fonts.PoppinsMedium,
    },
    AmountTextNormal: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
    },
    CrossText: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
        marginHorizontal: 5,
    },
    QtyText: {
        color: colors.CaptionGrey,
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.CaptionGrey,
        // alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: 5,
        height: windowHeight / 50,
        // marginRight: 5,
    },
});
