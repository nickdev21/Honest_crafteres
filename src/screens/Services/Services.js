/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import ServicesTabs from './ServicesTab';

const Services = () => {


    const HeaderData = {
        HeaderTitile: 'Services',
    };

    return (
        <View style={styles.ServicesWrapper} >
            <CommonHeader data={HeaderData} />
            <ServicesTabs />
        </View>
    );
};

export default Services;


const styles = StyleSheet.create({
    ServicesWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
});
