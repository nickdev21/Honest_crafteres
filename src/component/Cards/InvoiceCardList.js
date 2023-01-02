/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { windowHeight } from '../../utils/Dimension';
import Images from '../../assets/Images';
import { BagInq_Icon, HomeInq_Icon, MobileIn_Icon, ShoeInq_Icon } from '../../assets/Icons';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import NavigationStrings from '../../routes/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

const InvoicesCardList = ({ data }) => {


    const navigation = useNavigation();
    return (
        <Pressable style={styles.InvoiceWrapper} onPress={() => { navigation.navigate(NavigationStrings.INVOICE_DETAILS) }} >
            <View style={styles.UpperCard}  >
                <View style={styles.InvoiceNumberArea}  >
                    <Text style={styles.InvoiceNumber} >{data?.item?.InvoiceNum}</Text>
                    <Text style={styles.InvoiceName} >{data?.item?.CustomerName}</Text>
                </View>
                <View style={styles.InvoiceDate}  >
                    <Text style={styles.InvoiceAmountText} >{data?.item?.Amount}</Text>
                    <View style={styles.IconView} >
                        <ShoeInq_Icon width={'20%'} height={'85%'} />
                        <HomeInq_Icon width={'20%'} height={'85%'} />
                    </View>
                </View>
            </View>
            <View style={styles.CenterCard}  >
                <View style={styles.NewCircleLineView} >
                    <View style={styles.CenterLineViewBelow} >
                        <View style={styles.FirstCircleView} >
                            <View style={[styles.CircleBigAbs]} />
                        </View>
                        <View style={styles.CenterLineViewAbs} />
                        <View style={styles.LastCircleView} >
                            <View style={[styles.CircleBigAbs]} />
                        </View>
                    </View>
                    <View style={styles.FirstCircleView} >
                        <View style={[styles.CircleBig,
                        { backgroundColor: data?.item?.PaymentStaus === 'Paid' ? colors.PaidGreen : data?.item?.PaymentStaus === 'Invalid' ? colors.errorColor : data?.item?.PaymentStaus === 'Partial Payment' ? colors.PartialPurple : '86%' }
                        ]} />
                    </View>
                    <View style={[styles.CenterLineView,
                    {
                        backgroundColor: data?.item?.PaymentStaus === 'Paid' ? colors.PaidGreen : data?.item?.PaymentStaus === 'Invalid' ? colors.errorColor : data?.item?.PaymentStaus === 'Partial Payment' ? colors.PartialPurple : '86%',
                        width: data?.item?.PaymentStaus === 'Paid' ? '86%' : data?.item?.PaymentStaus === 'Invalid' ? '20%' : data?.item?.PaymentStaus === 'Partial Payment' ? '40%' : '86%'
                    }]} />
                    <View style={styles.LastCircleView} >
                        <View style={[styles.CircleBigWithWhite,
                        { backgroundColor: data?.item?.PaymentStaus === 'Paid' ? colors.PaidGreen : data?.item?.PaymentStaus === 'Invalid' ? colors.errorColor : data?.item?.PaymentStaus === 'Partial Payment' ? colors.PartialPurple : '86%' }]} >
                            <View style={styles.CircleWhite} />
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.LowerCard}  >
                <View style={styles.InvoiceAmount}  >
                    <Text style={styles.InvoiceName} >{data?.item?.InvoiceDate}</Text>
                    <Text style={styles.InvoiceDateText} >Invoice Date</Text>
                </View>
                <View style={styles.InvoicePaymentStaus}  >
                    <Text style={styles.InvoiceName} >{data?.item?.PyamentDate}</Text>
                    <Text style={[styles.InvoicePaidText, { color: data?.item?.PaymentStaus === 'Paid' ? colors.PaidGreen : data?.item?.PaymentStaus === 'Invalid' ? colors.errorColor : data?.item?.PaymentStaus === 'Partial Payment' ? colors.PartialPurple : '86%' }]} >{data?.item?.PaymentStaus}</Text>
                </View>
            </View>
        </Pressable>
    );
};



const styles = StyleSheet.create({
    InvoiceWrapper: {
        backgroundColor: colors.whiteColor,
        // backgroundColor: 'red',
        width: '95%',
        // height: 'auto',
        height: windowHeight / 4.2,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        elevation: 9,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 0.10,
        paddingTop: 5,
    },
    UpperCard: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '35%',
        width: '90%',
        alignSelf: 'center',
        // marginVertical: 5,
    },
    LowerCard: {
        // backgroundColor: 'green',
        flexDirection: 'row',
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
    CenterCardAbs: {
        backgroundColor: 'pink',
        // justifyContent: 'center',
        flexDirection: 'row',
        height: '25%',
        width: '100%',
        zIndex: 5,
    },
    InvoiceNumberArea: {
        // backgroundColor: 'blue',
        justifyContent: 'space-evenly',
        width: '50%',
        // paddingVertical: 10,

    },
    InvoiceAmount: {
        // backgroundColor: 'skyblue',
        justifyContent: 'space-evenly',
        width: '50%',
        // paddingVertical: 10,
    },
    InvoiceDate: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-evenly',
        // justifyContent: 'center',
        width: '50%',
        alignItems: 'flex-end',
        // paddingVertical: 10,
    },
    InvoicePaymentStaus: {
        // backgroundColor: 'red',
        justifyContent: 'space-evenly',
        width: '50%',
        alignItems: 'flex-end',
        // paddingVertical: 10,
    },
    LineView: {
        backgroundColor: 'skyblue',
        width: '100%',
        // zIndex: 2,
        paddingHorizontal: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    LineViewAbs: {
        // backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        // zIndex: -5,
        flexDirection: 'row',
        position: 'absolute',
    },
    Circle: {
        backgroundColor: colors.successColor,
        width: windowHeight / 50,
        height: windowHeight / 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    CircleAbs: {
        backgroundColor: '#000',
        width: windowHeight / 50,
        height: windowHeight / 50,
        borderRadius: 50,
        // position: 'absolute',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    LineWhite: {
        backgroundColor: colors.successColor,
        width: '100%',
        height: 2,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    LineWhiteAbs: {
        backgroundColor: '#000',
        width: '90%',
        // position: 'absolute',
        height: 2,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -2,
        // marginHorizontal: 10,
    },
    // CircleBig: {
    //     backgroundColor: colors.successColor,
    //     width: windowHeight / 35,
    //     height: windowHeight / 35,
    //     borderRadius: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

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
        fontFamily: fonts.PoppinsBold,
    },
    InvoiceAmountText: {
        // backgroundColor: 'pink',
        // height: '50%',
        width: '100%',
        alignSelf: 'center',
        textAlign: 'right',
        color: colors.AnotherSecondaryColor,
        fontSize: 16,
        // lineHeight: 24,
        fontFamily: fonts.PoppinsHeavy,
    },
    IconView: {
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    //Center Status Style
    NewCircleLineView: {
        // backgroundColor: 'yellow',
        height: '100%',
        width: '95%',
        // alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    CenterLineView: {
        backgroundColor: 'pink',
        height: 2,
        width: '50%',
    },
    CenterLineViewAbs: {
        backgroundColor: colors.InvoiceLineGrey,
        height: 2,
        width: '86%',
    },
    FirstCircleView: {
        // backgroundColor: 'green',
        width: '7%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'flex-start',
    },
    LastCircleView: {
        // backgroundColor: 'purple',
        width: '7%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    CenterLineViewBelow: {
        // backgroundColor: 'red',
        width: '100%',
        height: '30%',
        position: 'absolute',
        // zIndex: -2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    CircleBigWithWhite: {
        backgroundColor: colors.successColor,
        width: windowHeight / 35,
        height: windowHeight / 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleBig: {
        backgroundColor: colors.successColor,
        width: windowHeight / 50,
        height: windowHeight / 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleBigAbs: {
        backgroundColor: colors.InvoiceLineGrey,
        width: windowHeight / 50,
        height: windowHeight / 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

});



export default InvoicesCardList;