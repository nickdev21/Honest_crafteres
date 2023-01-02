/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import ItemServices from '../../component/Cards/ItemServices';
import Images from '../../assets/Images';
import { Box_Icon, DownloadPickUp_Icon, EyeVisible_Icon, HandoverDetail_Icon } from '../../assets/Icons';

const HandOverDetail = () => {


    const DetailData = [
        { id: 1, ItemCode: 'HCI1234-ORD-(1-1)', ProductName: 'XYZ HAND BAG', ServiceName: 'Deep Cleaning', Description: 'Loreum ispum is dummy text. Loreum ispum is dummy text', Qty: 1, SingleAmount: '100.00', TotalAmount: `100.00` },
        { id: 2, ItemCode: 'HCI1234-ORD-(1-2)', ProductName: 'Sneakers', ServiceName: 'Shoe shine & polish', Description: 'Loreum ispum is dummy text. Loreum ispum is dummy text', Qty: 2, SingleAmount: '75.00', TotalAmount: `150.00` },
        { id: 3, ItemCode: 'HCI1234-ORD-(1-2)', ProductName: 'Sneakers', ServiceName: 'Shoe shine & polish', Description: 'Loreum ispum is dummy text. Loreum ispum is dummy text', Qty: 2, SingleAmount: '75.00', TotalAmount: `150.00` },
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
                        <View style={styles.EyeText} >
                            <Text style={styles.ItemNameText} >{item?.ItemCode}</Text>
                            <EyeVisible_Icon width={'10%'} height={windowHeight / 35} />
                        </View>
                        <Text style={styles.ProductNameText} >{item?.ProductName}</Text>
                        <Text style={styles.ServiceNameText} >{item?.ServiceName}</Text>
                        <Text style={styles.ServiceDesText} >{item?.Description}</Text>
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
        <View style={styles.ItemWrapper} >
            <View style={styles.ItemHeadingView} >
                <HandoverDetail_Icon width={windowWidth / 15} height={windowHeight / 25} />
                <Text style={styles.HeadingText} >Hanover Details</Text>
            </View>
            <View style={styles.DashLineStyle} />
            <View style={styles.TextView} >
                <Text style={styles.TextStyle} >Pickup Date</Text>
                <Text style={styles.InvoiceCode} >10/10/2022</Text>
            </View>
            <View style={styles.TextView} >
                <View style={styles.DownloadTextIcon} >
                    <Text style={styles.TextStyle} >Picture of Items</Text>
                    <DownloadPickUp_Icon width={windowWidth / 10} height={windowHeight / 25} />
                </View>
                <View style={styles.ImageView} >
                    <Image source={Images.PurseImage} style={styles.ImageStyle} />
                    <Image source={Images.PurseImage} style={styles.ImageStyle} />
                </View>
            </View>
            <View style={styles.TextView} >
                <Text style={styles.TextStyle} >Staff Name</Text>
                <Text style={styles.InvoiceCode} >Wade Warren</Text>
            </View>
            <View style={styles.TextView} >
                <Text style={styles.TextStyle} >Customer Name</Text>
                <Text style={styles.InvoiceCode} >John smith</Text>
            </View>
            <View style={styles.TextView} >
                <Text style={styles.TextStyle} >Customer Phone Number</Text>
                <Text style={styles.InvoiceCode} >+65 12456896</Text>
            </View>
            <View style={styles.TextView} >
                <Text style={styles.TextStyle} >Amount Paid</Text>
                <Text style={styles.InvoiceCode} >S$ 100.00</Text>
            </View>
        </View>
    );
};

export default HandOverDetail;



const styles = StyleSheet.create({
    ItemWrapper: {
        backgroundColor: colors.whiteColor,
        marginVertical: 30,
        borderRadius: 10,
        margin: '4%',
        shadowColor: colors.ShadowColor,
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.50,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 30,
    },
    DashLineStyle: {
        // backgroundColor: 'red',
        borderWidth: 0.25,
        width: '100%',
        alignSelf: 'center',
        borderStyle: 'dotted',
        borderColor: colors.justLineUserAccountColor,
        marginVertical: 10,
        marginBottom: 20,
    },
    TextView: {
        marginBottom: 10,
    },
    HeadingText: {
        color: colors.TimeColorLine,
        fontSize: 16,
        lineHeight: 20,
        fontFamily: fonts.PoppinsBold,
        paddingVertical: 5,
        marginHorizontal: 5,
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
    DownCardArea: {
        // backgroundColor: 'pink',
        width: '100%',
        justifyContent: 'space-between',
        // paddingVertical: '2%',
        // paddingHorizontal: '2%',
        // paddingRight: '5%',

        // paddingHorizontal: '2%',
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
        marginTop: 20,
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
    EyeText: {
        // backgroundColor: 'skyblue',
        flexDirection: 'row',
        alignItems: 'center',
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
        // backgroundColor: 'pink',
        color: colors.WelcomeCardText,
        fontSize: 14,
        width: '80%',
        fontFamily: fonts.PoppinsBold,
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
        fontSize: 12,
        width: '80%',
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
    ItemHeadingView: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 2,
        marginTop: 5,
    },
    DownloadTextIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 2,
        marginTop: 5,
    },
    ImageView: {
        height: windowHeight / 4.5,
        flexDirection: 'row',
        width: '100%',
        // paddingVertical: 5,
        marginVertical: 10,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    ImageStyle: {
        height: windowHeight / 5.2,
        width: '46%',
        marginRight: 20,
        borderRadius: 10,
    },
});
