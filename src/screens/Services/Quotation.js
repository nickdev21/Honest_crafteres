/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors'
import QuotationCard from '../../component/Cards/QuotationCard'
import { WhatsappIn_Icon } from '../../assets/Icons'

const Quotation = () => {

    const inqCardDataStatic = { id: 1, name: 'Jhon Smith', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', Icon: WhatsappIn_Icon }

    return (
        <View style={styles.QuotationWrapper} >
            <QuotationCard data={inqCardDataStatic} />
        </View>
    )
}

export default Quotation


const styles = StyleSheet.create({
    QuotationWrapper: {
        backgroundColor: colors.whiteColor,
        flex: 1,
        // flexDirection: 'row',
    },

});
