/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import InvoiceDetailCard from '../../component/Cards/InvoiceDetailCard';
import ItemServices from '../../component/Cards/ItemServices';
import { ScrollView } from 'react-native-gesture-handler';
import PaymentCard from '../../component/Cards/PaymentCard';
import FormButton from '../../component/FormButton';
import NavigationStrings from '../../routes/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import VacantButton from '../../component/Buttons/VacantButton';

const InvoiceDetails = () => {

    const navigation = useNavigation()

    const InvoiceHeaderData = {
        HeaderTitile: 'Invoice Details',
    };


    return (
        <>
            <CommonHeader data={InvoiceHeaderData} />
            <FlatList
                ListHeaderComponent={<>
                    <ScrollView style={styles.InvoiceDetailsWrapper} >
                        <InvoiceDetailCard />
                        <ItemServices />
                        <PaymentCard />
                        <View style={styles.ButtonView} >
                            <VacantButton buttonTittle={'Preview'} SCREEN_NAME={NavigationStrings.INVOICE_PREVIEW} />
                            <FormButton buttonTitle="Collect Payments" onPress={() => navigation.navigate(NavigationStrings.COLLECT_PAYMENT)} style={styles.ButtonStyle} />
                        </View>
                    </ScrollView>
                </>
                }
                renderItem={() => {
                    return <View />
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.FlatListStyles}
            />
        </>
    );
};

export default InvoiceDetails;


const styles = StyleSheet.create({
    InvoiceDetailsWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        marginBottom: 50,
    },
    FlatListStyles: {
        backgroundColor: colors.whiteColor,
        // marginBottom: 50,
    },
    ButtonStyle: {
        width: '95%',
        alignSelf: 'center',
    },
    ButtonView: {
        marginBottom: 20,
    },
});
