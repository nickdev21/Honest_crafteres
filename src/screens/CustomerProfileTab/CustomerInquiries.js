/* eslint-disable prettier/prettier */
import { View, StyleSheet, FlatList, Text } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import NavigationStrings from '../../routes/NavigationStrings';
import { Close_Icon, MobileIn_Icon, QuestionMark_Icon, Suggest_Icon, Tick_Icon, WhatsappIn_Icon } from '../../assets/Icons';
import CustomerTile from '../../component/Cards/CustomerTile';
import InquiryCardRes from '../../component/Cards/InquiryCard';
import fonts from '../../assets/fonts';

const CustomerInquiries = () => {


    const CustomerTileData = [
        { id: '0', Number: 25, title: 'Total Inquires', Icon: Suggest_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
        { id: '1', Number: 10, title: 'Open Inquires', Icon: Tick_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
        { id: '2', Number: 25, title: 'Closed Inquires', Icon: Close_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
    ];

    const RenderTile = ({ item, index }) => {
        return (
            <CustomerTile Data={item} />
        );
    };



    const inqCardDataStatic = [
        { id: 1, name: 'Jhon Smith', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', Icon: WhatsappIn_Icon },
        { id: 2, name: 'Kristin Watson', otherDetail: 'Loreum ipsum is dummy text...', inquiryNumber: '#123 General Inquiry', Icon: MobileIn_Icon },
    ];

    const RenderCard = ({ item, index }) => {
        let data = { item: item, index: index };
        return (
            <InquiryCardRes data={data} />
        );
    };



    return (
        <View style={styles.CustomerInqueriesWrapper} >
            <View style={styles.LowerTile} >
                <FlatList
                    ListHeaderComponent={() => (
                        <>
                            <FlatList
                                ListFooterComponent={() => (
                                    <>
                                        <View style={styles.JustLine}>
                                            <View style={styles.JustLineMain} />
                                        </View>
                                        <View style={styles.HeadingLine} >

                                            <View style={styles.IconStyle} >
                                                <QuestionMark_Icon width={'100%'} height={'100%'} />
                                            </View>
                                            <View style={styles.TextStyleView} >
                                                <Text style={styles.TextStyle} >Recent Inquires</Text>
                                            </View>
                                        </View>
                                    </>
                                )}
                                contentContainerStyle={styles.flatlistStyle} data={CustomerTileData} renderItem={RenderTile} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} numColumns={2} scrollEnabled={false} />
                        </>
                    )}
                    contentContainerStyle={styles.flatlistStyle} data={inqCardDataStatic} renderItem={RenderCard}
                    showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
            </View>

        </View>
    );
};

export default CustomerInquiries;


const styles = StyleSheet.create({
    CustomerInqueriesWrapper: {
        flex: 1,
        backgroundColor: colors.whiteBlueColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    flatlistStyle: {
        marginTop: 10,
        justifyContent: 'center',
        // backgroundColor: 'red',
        // alignItems: 'center',
        paddingHorizontal: 5,
    },
    LowerTile: {
        // height: '50%',

    },
    HeadingLine: {
        // backgroundColor: 'red',
        flex: 1,
        height: '10%',
        flexDirection: 'row',
    },
    UpperFlatList: {
        // backgroundColor: 'green',
    },
    TextStyle: {
        // backgroundColor: 'pink',
        // height: 20,
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsBold,
        paddingVertical: 2.5,
    },
    IconStyle: {
        // backgroundColor: 'yellow',
        width: '15%',

    },
    TextStyleView: {
        // backgroundColor: 'yellow',
        width: '85%',
        height: 'auto',
    },
    JustLine: {
        height: 1,
        // top: '5%',
        width: '90%',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },
    JustLineMain: {
        backgroundColor: colors.justLineUserAccountColor,
        // backgroundColor: 'red',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: colors.justLineUserAccountColor,
    },
});
