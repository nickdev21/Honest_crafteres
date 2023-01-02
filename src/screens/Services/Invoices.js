/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import InvoicesCard from '../../component/Cards/InvoicesCard';
import { NoInvoice_Icon, WhatsappIn_Icon } from '../../assets/Icons';
import { FlatList } from 'react-native-gesture-handler';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import fonts from '../../assets/fonts';

const Invoices = () => {

    const inqCardDataStatic = [
        { id: 1, name: 'Jhon Smith', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', Icon: WhatsappIn_Icon },
        { id: 2, name: 'Mike One', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', Icon: WhatsappIn_Icon },
    ];


    const RenderInvoice = ({ item, index }) => {
        return (
            <InvoicesCard data={inqCardDataStatic} />
        );
    };


    return (
        <View style={styles.InvoicesWrapper} >
            {inqCardDataStatic.length === 0 ?
                <View style={styles.NoInvoice} >
                    <NoInvoice_Icon width={'55%'} height={'50%'} />
                    <View style={styles.TextView} >
                        <Text style={styles.TittleIcon} >No Invoices Generated Yet.</Text>
                        <Text style={styles.SubTittle} >Invoices are generated after payments are recorded for services.</Text>
                    </View>
                </View>
                :
                <FlatList contentContainerStyle={styles.FlatListStyles} data={inqCardDataStatic} renderItem={RenderInvoice} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
            }
        </View>
    );
};

export default Invoices;


const styles = StyleSheet.create({
    InvoicesWrapper: {
        backgroundColor: colors.whiteColor,
        flex: 1,
        // flexDirection: 'row',
    },
    NoInvoice: {
        // backgroundColor: 'red',
        width: '100%',
        alignSelf: 'center',
        flex: 1,
        // justifyContent: 'center',
        paddingVertical: '15%',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    TextView: {
        // backgroundColor: 'pink',
        textAlign: 'center',
        width: '80%',
    },
    TittleIcon: {
        fontFamily: fonts.PoppinsBold,
        color: colors.WelcomeCardText,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
        lineHeight: 24,
    },
    SubTittle: {
        fontFamily: fonts.PoppinsMedium,
        color: colors.CaptionGrey,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 21,
    },

});
