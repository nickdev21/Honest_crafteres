/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';

const ForOtherFile = () => {
    return (
        <View style={styles.ForOtherFileWrapper} >
            <Text>ForOtherFile</Text>
        </View>
    );
};

export default ForOtherFile;


const styles = StyleSheet.create({
    ForOtherFileWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
});
