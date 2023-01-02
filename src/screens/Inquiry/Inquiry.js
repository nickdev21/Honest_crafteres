/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import React from 'react';
// import SearchInput from '../../component/Input/SearchInput';
import CommonHeader from '../../component/Headers/CommonHeader';
import { colors } from '../../assets/colors';
import InquiryTabs from './InquiryTabs';
import SearchInput from '../../component/Input/SearchInput';

const Inquiry = () => {

    const InquiryHeaderData = {
        HeaderTitile: 'Inquiry',
    };
    return (
        <View style={styles.SearchWrapper} >
            <CommonHeader data={InquiryHeaderData} />
            <SearchInput style={styles.ButtonStyles} />
            <InquiryTabs />
        </View>
    );
};

export default Inquiry;



const styles = StyleSheet.create({
    SearchWrapper: {
        backgroundColor: colors.whiteColor,
        flex: 1,
        // flexDirection: 'row',
    },
    ButtonStyles: {
        width: '92%',
    },

});
