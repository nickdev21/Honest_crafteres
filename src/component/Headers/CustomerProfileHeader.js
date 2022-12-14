/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import { FULL_HC_ICON_Icon, Notification_Icon, Search_Icon, SideNav_Icon } from '../../assets/Icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../routes/NavigationStrings';

const CustomerProfileHeader = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.HeaderWrapper}>

            <View style={styles.LogoWrapper} >
                <FULL_HC_ICON_Icon width={'65%'} height={'65%'} />
            </View>
            <View style={styles.NavIconWrapper} >
                <Pressable onPress={() => navigation.openDrawer()} style={styles.SideNavStyle} >
                    <SideNav_Icon width={'40%'} height={'40%'} />
                </Pressable>
                <View style={styles.NotiAndSearchStyle} >
                    <Pressable onPress={() => navigation.navigate(NavigationStrings.SEARCH_SCREEN)} style={styles.SearchStyle} >
                        <Search_Icon width={'40%'} height={'40%'} />
                    </Pressable>
                    <Pressable style={styles.NotificationStyle} >
                        <Notification_Icon width={'40%'} height={'40%'} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default CustomerProfileHeader;





const styles = StyleSheet.create({
    HeaderWrapper: {
        backgroundColor: colors.primaryColor,
        height: '8%',
        flexDirection: 'row',
    },
    NavIconWrapper: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        // zIndex: 2,
    },
    LogoWrapper: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        // position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    LogoStyle: {

    },
    NotiAndSearchStyle: {
        flexDirection: 'row',
        width: '30%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    NotificationStyle: {
        flexDirection: 'row',
        width: '50%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    SearchStyle: {
        flexDirection: 'row',
        width: '50%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    SideNavStyle: {
        width: '15%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
