/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';

const CustomerDetail = () => {
    return (
        <>
            <View style={styles.TextView} >
                <Text style={styles.InvoiceCardLeftTextHead} >Customer Name</Text>
                <Text style={styles.InvoiceCardRightTextHead} >John Smith</Text>
            </View>
            <View style={styles.TextView} >
                <Text style={styles.InvoiceCardLeftTextHead} >Phone Number</Text>
                <Text style={styles.InvoiceCardRightTextHead} >+65 123456789</Text>
            </View>
            <View style={styles.TextView} >
                <Text style={styles.InvoiceCardLeftTextHead} >johnsmith@gmail.com</Text>
                <Text style={styles.InvoiceCardRightTextHead} >johnsmith@gmail.com</Text>
            </View>
            <View style={styles.TextView} >
                <Text style={styles.InvoiceCardLeftTextHead} >Address</Text>
                <Text style={styles.InvoiceCardRightTextHead} >510, Kampong Bahru Rd, Street 123,Singapore 456589</Text>
            </View>
        </>
    );
};

export default CustomerDetail;



const styles = StyleSheet.create({
    TextView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: 5,
    },
    InvoiceCardLeftTextHead: {
        // backgroundColor: 'pink',
        color: colors.CaptionGrey,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        width: '50%',
        height: '100%',
    },
    InvoiceCardRightTextHead: {
        // backgroundColor: 'blue',
        color: colors.CaptionGrey,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        width: '50%',
        textAlign: 'right',
        height: '100%',
    },
});