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
import ServiceDetailCard from '../../component/Cards/ServiceDetailCard';
import { Flag_Icon, MsgPop_Icon, NavFlag_Icon } from '../../assets/Icons';
import { windowHeight } from '../../utils/Dimension';
import CTAModalChat from '../Chat/CTAModalChat';
import ServiceHeader from '../../component/Headers/ServiceHeader';

const ServiceInfo = () => {

    const navigation = useNavigation()

    const ServiceHeaderData = {
        HeaderTitile: 'Service Details',
        SeondEndIcon: true,
        SecondIcon: NavFlag_Icon,
        SecondIconHeight: windowHeight / 25,
        RunFunction: () => CTA_Action(),
    };

    const CTA_Action = () => {
        console.log('RUNNNED');
    };

    const PopUpData = {
        Icon: MsgPop_Icon, PopUpTittle: 'Are you sure you want to claim inquiry ID 124356?', FirstCTA: 'No,Not Now', SecondCTA: 'Yes, Please',
    };

    // onPress={() => props?.setModalVisible(true)}


    return (
        <>
            <ServiceHeader data={ServiceHeaderData} />
            <FlatList
                ListHeaderComponent={<>
                    <ScrollView style={styles.ServiceInfoWrapper} >
                        <ServiceDetailCard />
                        <ItemServices />
                        <PaymentCard />
                        <View style={styles.ButtonView} >
                            <VacantButton buttonTittle={'Preview'} SCREEN_NAME={NavigationStrings.CONFIRM_SERVICE_INFO} />
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

export default ServiceInfo;


const styles = StyleSheet.create({
    ServiceInfoWrapper: {
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
