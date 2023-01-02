/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import InvoiceDetailCard from '../../component/Cards/InvoiceDetailCard';
import ItemServices from '../../component/Cards/ItemServices';
import { ScrollView } from 'react-native-gesture-handler';
import PaymentCard from '../../component/Cards/PaymentCard';
import FormButton from '../../component/FormButton';
import NavigationStrings from '../../routes/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import VacantButton from '../../component/Buttons/VacantButton';
import PaymentDetailCard from '../../component/Cards/PaymentDetailCard';
import Images from '../../assets/Images';

const PaymentDetails = () => {

    const navigation = useNavigation()

    const PaymentDetailsHeader = {
        HeaderTitile: 'Payment Details',
    };

    let PayDetailData = [
        { LeftText: 'Payment ID', RightText: 'HCI1234-PAY' },
        { LeftText: 'Payment Date', RightText: '10/09/2022' },
        { LeftText: 'Quotation ID', RightText: 'HCI1234-QTN' },
        { LeftText: 'Quotation Date', RightText: '01/09/2022' },
        { LeftText: 'Invoice ID', RightText: 'HCI1234-INV' },
        { LeftText: 'Invoice Date', RightText: '04/09/2022' },
        { LeftText: 'Customer ID', RightText: 'HC-123456' },
        { LeftText: 'Customer', RightText: 'John' },
        { LeftText: 'Paid Amount', RightText: 'SGD 220.00' },
    ];

    return (
        <>
            <CommonHeader data={PaymentDetailsHeader} />
            <FlatList
                ListHeaderComponent={<>
                    <View style={styles.PaymentDetailsWrapper} >
                        <PaymentDetailCard Data={PayDetailData} />
                        <ItemServices GIF_Type={Images.PaymentGif} />
                    </View>
                </>
                }
                renderItem={() => {
                    return <View />
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.FlatListStyles}
            />
        </>
    );
};

export default PaymentDetails;


const styles = StyleSheet.create({
    PaymentDetailsWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        marginBottom: 50,
    },
    FlatListStyles: {
        backgroundColor: colors.whiteColor,
        // marginBottom: 50,
    },
    ButtonStyle: {
        width: '95%',
        alignSelf: 'center',
    },
    ButtonView: {
        marginBottom: 20,
    },
});
