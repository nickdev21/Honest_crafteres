/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import StepWiseDetail from './StepWiseDetail';

const ItemAssesment = () => {


    const AssesmentHeaderData = {
        HeaderTitile: 'Item Assessment',
    };


    return (
        <View style={styles.ItemAssesmentWrapper} >
            <CommonHeader data={AssesmentHeaderData} />
            <StepWiseDetail />
        </View>
    );
};

export default ItemAssesment;


const styles = StyleSheet.create({
    ItemAssesmentWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
});
