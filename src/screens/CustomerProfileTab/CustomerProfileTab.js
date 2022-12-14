/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import CustomerServices from './CustomerServices';
import CustomerInquiries from './CustomerInquiries';
import Images from '../../assets/Images';
import { windowHeight } from '../../utils/Dimension';
import fonts from '../../assets/fonts';

const CustomerProfileTab = () => {
    const CustomerTabHeaderData = {
        HeaderTitile: 'Customer Account',
    };

    const Tab = createMaterialTopTabNavigator();


    return (
        <View style={styles.CustomerProfileWrapper} >
            <CommonHeader data={CustomerTabHeaderData} />
            <View style={styles.BrownArea} >
                <View style={styles.MaineProfileData} >
                    <View style={styles.ImageArea} >
                        <View style={styles.ImageSTyle} >
                            <View style={styles.ImageInsideCircle} >
                                <Image source={Images.TempUser} style={styles.UserImageStyle} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.NameArea} >
                        <View style={styles.NameDetailStyleText} >
                            <Text style={styles.nameText} >John Smith</Text>
                            <Text style={styles.DetailText} >johnsmith@gmail.com</Text>
                        </View>
                        <View style={styles.InquiryStyle} >
                            <Text style={styles.textInquiry} >Customer Since  20/11/2022</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Tab.Navigator
                screenOptions={{
                    // tabBarLabel: 'none',
                    tabBarActiveTintColor: colors.AnotherSecondaryColor,
                    tabBarInactiveTintColor: colors.whiteColor,
                    tabBarLabelStyle: {
                        textTransform: 'none',
                        fontFamily: fonts.PoppinsSemiBold,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.AnotherSecondaryColor,
                        // textTransform: 'lowercase',
                        // tabBarStyle: {backgroundColor: 'yellow'},
                    },
                    tabBarStyle: {
                        backgroundColor: colors.primaryColor,
                    },
                }}
            >
                <Tab.Screen name="Inquires" children={() => <CustomerInquiries />} />
                <Tab.Screen name="Services" children={() => <CustomerServices />} />
            </Tab.Navigator>
        </View>
    );
};

export default CustomerProfileTab;





const styles = StyleSheet.create({
    CustomerProfileWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    MaineProfileData: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: '95%',
        width: '90%',
        alignSelf: 'center',
    },
    ImageSTyle: {
        height: windowHeight / 9,
        width: windowHeight / 9,
        justifyContent: 'center',
        alignContent: 'center',
        // width: 'auto',
        borderRadius: 100,
        alignSelf: 'center',
    },
    ImageInsideCircle: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        // width: 'auto',
        borderRadius: 100,
        alignSelf: 'center',
        borderColor: colors.OuterBorder,
        borderWidth: 2,
    },
    UserImageStyle: {
        // backgroundColor: 'red',
        height: '90%',
        width: '90%',
        borderRadius: 100,
        alignSelf: 'center',
    },
    ImageArea: {
        // backgroundColor: 'green',
        height: '100%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    NameArea: {
        // backgroundColor: 'pink',
        // height: '100%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    NameDetailStyleText: {
        // backgroundColor: 'red',
        height: '40%',
        width: '100%',
        alignSelf: 'center',
    },
    InquiryStyle: {
        // backgroundColor: 'blue',
        // paddingTop: -10,
        height: '20%',
        width: '100%',
        // alignSelf: 'center',
        justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    nameText: {
        height: '50%',
        color: colors.whiteColor,
        fontSize: 16,
        lineHeight: 17,
        fontFamily: fonts.PoppinsBold,
    },
    DetailText: {
        height: '50%',
        color: colors.CustomerEmailColor,
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fonts.PoppinsMedium,
    },
    textInquiry: {
        color: colors.CustomerSinceGreen,
        fontSize: 12,
        // lineHeight: 15,
        fontFamily: fonts.PoppinsSemiBold,
    },
});
