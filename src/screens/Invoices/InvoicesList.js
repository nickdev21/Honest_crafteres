/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from '../../component/Headers/CommonHeader';
import SearchInput from '../../component/Input/SearchInput';
import InvoicesCard from '../../component/Cards/InvoicesCard';
import { HomeInq_Icon, ShoeInq_Icon } from '../../assets/Icons';
import InvoicesCardList from '../../component/Cards/InvoiceCardList';

const InvoicesList = () => {

    const InvoicesHeaderData = {
        HeaderTitile: 'Invoices',
    };
    const navigation = useNavigation()

    const inqCardDataStatic = [
        { id: 1, name: 'Jhon Smith', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry' },
        { id: 2, name: 'Mike One', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry' },
    ];


    const TileArray = [
        { id: '0', InvoiceNum: 'HCI1234-INV', CustomerName: 'Jhon Smith', Amount: 'SGD 200.00', InvoiceDate: '04/11/2022', PaymentStaus: 'Paid', PyamentDate: '05/11/2022', Icon: { ShoeInq_Icon, HomeInq_Icon }, CardColor: '#00AB6F' },
        { id: '1', InvoiceNum: 'HCI4567-INV', CustomerName: 'Wizzy Rincton', Amount: 'SGD 150.00', InvoiceDate: '04/11/2022', PaymentStaus: 'Invalid', PyamentDate: '05/11/2022', Icon: { ShoeInq_Icon, HomeInq_Icon }, CardColor: '#EF5448' },
        { id: '2', InvoiceNum: 'HCI8456-INV', CustomerName: 'Nick Trick', Amount: 'SGD 489.00', InvoiceDate: '04/11/2022', PaymentStaus: 'Partial Payment', PyamentDate: '05/11/2022', Icon: { ShoeInq_Icon, HomeInq_Icon }, CardColor: '#C05DEF' },
        { id: '3', InvoiceNum: 'HCI8456-INV', CustomerName: 'Nick Trick', Amount: 'SGD 489.00', InvoiceDate: '04/11/2022', PaymentStaus: 'Invalid', PyamentDate: '05/11/2022', Icon: { ShoeInq_Icon, HomeInq_Icon }, CardColor: '#C05DEF' },
        { id: '4', InvoiceNum: 'HCI8456-INV', CustomerName: 'Nick Trick', Amount: 'SGD 489.00', InvoiceDate: '04/11/2022', PaymentStaus: 'Paid', PyamentDate: '05/11/2022', Icon: { ShoeInq_Icon, HomeInq_Icon }, CardColor: '#C05DEF' },
        { id: '5', InvoiceNum: 'HCI8456-INV', CustomerName: 'Nick Trick', Amount: 'SGD 489.00', InvoiceDate: '04/11/2022', PaymentStaus: 'Partial Payment', PyamentDate: '05/11/2022', Icon: { ShoeInq_Icon, HomeInq_Icon }, CardColor: '#C05DEF' },
    ];


    const RenderTile = ({ item, index }) => {
        let data = { item: item, index: index };
        return (
            <>
                <InvoicesCardList data={data} />
            </>
        );
    };


    return (
        <View style={styles.InvoicesListWrapper} >
            <CommonHeader data={InvoicesHeaderData} />
            <View>
                <SearchInput style={styles.SearchStyles} />
                <FlatList contentContainerStyle={styles.FlatListStyles} data={TileArray} renderItem={RenderTile}
                    showsVerticalScrollIndicator={true} showsHorizontalScrollIndicator={true}
                />
            </View>
        </View>
    );
};

export default InvoicesList;


const styles = StyleSheet.create({
    InvoicesListWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    SearchStyles: {
        width: '92%',
    },
    FlatListStyles: {
        backgroundColor: colors.whiteColor,
        paddingBottom: 150,
    },
});
