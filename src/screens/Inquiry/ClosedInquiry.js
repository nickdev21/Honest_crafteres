/* eslint-disable prettier/prettier */
import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import InquiryCard from '../../component/InquiryCard/InquiryCard';
import { colors } from '../../assets/colors';
import { MobileIn_Icon, WhatsappIn_Icon } from '../../assets/Icons';

const ClosedInquiry = () => {


    const inqCardDataStatic = [
        { id: 1, name: 'Jhon Smith', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', Icon: WhatsappIn_Icon },
        { id: 2, name: 'Kristin Watson', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', Icon: MobileIn_Icon },
        { id: 3, name: 'Wade Warren', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', Icon: WhatsappIn_Icon },
    ]




    const RenderCard = ({ item, index }) => {
        let data = { item: item, index: index };
        return (
            <InquiryCard data={data} />
        );
    };

    return (
        <View style={styles.InquiryWrapper} >
            <FlatList contentContainerStyle={styles.FlatListStyles} data={inqCardDataStatic} renderItem={RenderCard} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
        </View>
    );
};

export default ClosedInquiry;


const styles = StyleSheet.create({
    InquiryWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
})