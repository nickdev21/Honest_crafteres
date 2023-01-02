/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import PickUpItem from './PickUpItem';
import HandOverDetail from './HandoverDetail';
import fonts from '../../assets/fonts';
import FormButton from '../../component/FormButton';
import { Sign_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';

const PickUpHandOver = () => {
    const PickUpHeaderData = {
        HeaderTitile: 'Pickup Handover',
    };

    return (
        <View style={styles.PickUpHandOverWrapper} >
            <CommonHeader data={PickUpHeaderData} />
            <FlatList
                ListFooterComponent={() => (
                    <>
                        <ScrollView style={styles.ScrollView} >
                            <PickUpItem />
                            <HandOverDetail />
                            <View style={styles.DownContent} >
                                <Text style={styles.LongText} >I accept that Cleaning / Maintenance services may not have visible improvements and I shouldopt for Restoration services for visible improvements. I also acknowledge and accept the assessment outcome of this form. </Text>
                                <View style={styles.TextView} >
                                    <Text style={styles.TextStyle} >Customer Signature</Text>
                                </View>
                                <Sign_Icon width={'100%'} height={windowHeight / 25} />
                                <View style={styles.DashLineStyle} />
                                <FormButton buttonTitle="Download" onPress={() => { }} style={styles.ButtonStyle} />
                            </View>
                        </ScrollView>
                    </>
                )}
                contentContainerStyle={styles.ScrollView}
                showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
        </View>
    );
};

export default PickUpHandOver;


const styles = StyleSheet.create({
    PickUpHandOverWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    ScrollView: {
        // paddingBottom: 150,
        // marginBottom: 50,
    },
    TextView: {
        marginBottom: 10,
    },
    TextStyle: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        paddingVertical: 5,
    },
    DownContent: {
        // backgroundColor: 'red',
        marginBottom: 100,
        paddingHorizontal: 15,
    },
    ButtonStyle: {
        width: '95%',
        alignSelf: 'center',
    },
    DashLineStyle: {
        backgroundColor: 'red',
        // borderStyle: 'dashed',
        borderWidth: 0.75,
        width: '50%',
        alignSelf: 'center',
        borderColor: colors.BottomGrey,
        marginTop: 10,
        marginBottom: 30,
    },
    LongText: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fonts.PoppinsRegular,
        paddingVertical: 5,
        marginBottom: 20,
    },
});