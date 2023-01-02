/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { NoImage_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';

const Attachment = () => {
    return (
        <>
            <View style={styles.ImageStyle} >
                <NoImage_Icon width={windowWidth / 3} height={windowHeight / 5} />
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftTextHead} >No Images Found.</Text>
                    <Text style={styles.InvoiceCardRightTextHead} >You will see after services images once craftsman upload it.</Text>
                </View>
            </View>
        </>
    );
};

export default Attachment;



const styles = StyleSheet.create({
    ImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        // marginBottom: 150,
    },
    TextView: {
        // backgroundColor: 'pink',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '2%',
        // paddingVertical: 5,
        height: windowHeight / 8,
    },
    InvoiceCardLeftTextHead: {
        // backgroundColor: 'pink',
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: fonts.PoppinsBold,
        textAlign: 'center',
        paddingVertical: 5,
    },
    InvoiceCardRightTextHead: {
        // backgroundColor: 'blue',
        textAlign: 'center',
        color: colors.CaptionGrey,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: fonts.PoppinsSemiBold,
    },
});