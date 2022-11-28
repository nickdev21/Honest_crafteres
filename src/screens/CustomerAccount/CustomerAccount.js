/* eslint-disable prettier/prettier */
import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import SearchInput from '../../component/Input/SearchInput';
import CommonHeader from '../../component/Headers/CommonHeader';
import { colors } from '../../assets/colors';
import CustomerTile from './CustomerTile';

const CustomerAccount = () => {

    const InquiryHeaderData = {
        HeaderTitile: 'Customer Accounts',
    };


    const CustomerCard = [
        { id: 1, name: 'Jhon Smith', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', },
        { id: 2, name: 'Kristin Watson', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', },
        { id: 3, name: 'Wade Warren', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', },
        { id: 4, name: 'Wade Warren', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', },
        { id: 5, name: 'Wade Warren', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', },
        { id: 6, name: 'Wade Warren', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', },
        { id: 7, name: 'Wade Warren', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', },
        { id: 8, name: 'Wade Warren', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', },
    ];


    const RenderCard = ({ item, index }) => {
        let data = { item: item, index: index };
        return (
            <CustomerTile data={data} />
        );
    };

    return (
        <View style={styles.CustomerWrapper} >
            <CommonHeader data={InquiryHeaderData} />
            <SearchInput style={styles.ButtonStyles} />
            <FlatList contentContainerStyle={styles.FlatListStyles} data={CustomerCard} renderItem={RenderCard} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
        </View>
    );
};

export default CustomerAccount;



const styles = StyleSheet.create({
    CustomerWrapper: {
        backgroundColor: colors.whiteColor,
        flex: 1,
    },
    ButtonStyles: {
        width: '92%',
    },
});
