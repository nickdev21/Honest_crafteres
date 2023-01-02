/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { windowHeight } from '../../utils/Dimension';
import Images from '../../assets/Images';
import { BagInq_Icon, Flag_Icon, HomeInq_Icon, MobileIn_Icon, ShoeInq_Icon } from '../../assets/Icons';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import NavigationStrings from '../../routes/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

const QuotationCard = ({ data }) => {
    const { item, index } = data;

    const navigation = useNavigation()
    return (
        <Pressable style={styles.InvoiceWrapper} onPress={() => { navigation.navigate(NavigationStrings.SERVICES_INFO) }} >
            <View style={styles.UpperCard}  >
                <View style={styles.InvoiceNumberArea}  >
                    <Text style={styles.InvoiceNumber} >HCI1234-QTN</Text>
                    <Text style={styles.InvoiceName} >John Smith</Text>
                </View>
                <View style={styles.InvoiceDate}  >
                    <Text style={styles.InvoiceAmountText} >SGD 200.00</Text>
                    <View style={styles.IconView}>
                    </View>

                </View>
            </View>
            <View style={styles.CenterCard}  >
                <View style={styles.LineView}  >
                    <View style={styles.LineWhite} />
                    <View style={styles.IconViewWithLine} >
                        <Flag_Icon width={'60%'} height={'100%'} />
                    </View>
                </View>
            </View>
            <View style={styles.LowerCard}  >
                <View style={styles.InvoiceAmount}  >
                    <Text style={styles.InvoiceName} >04/11/2022</Text>
                    <Text style={styles.InvoiceDateText} >Quotation Date</Text>
                </View>
                <View style={styles.InvoicePaymentStaus}  >
                    {/* <Text style={styles.InvoiceName} >05/11/2022</Text> */}
                    <HomeInq_Icon width={'20%'} height={'45%'} />
                    <Text style={styles.InvoicePaidText} >In Progress</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default QuotationCard;


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
        // backgroundColor: 'yellow',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
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
        backgroundColor: colors.BottomGrey,
        width: '90%',
        height: 1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconViewWithLine: {
        // backgroundColor: 'red',
        height: '50%',
        width: '20%',
        position: 'absolute',
        right: 0,
        top: '-25%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
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
        // backgroundColor: 'red',
        height: '40%',
        // width: '60%',
        // alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

});
