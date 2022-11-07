/* eslint-disable prettier/prettier */
import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { HC_OTP_Logo, Lower_Icon, Upper_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { colors } from '../../assets/colors';

const SplashMain = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style={styles.splashWrapper}>
                <View style={styles.UpWrapper}>
                    <Upper_Icon width={'100%'} height={'100%'} />
                </View>
                <View style={styles.DownWrapper} >
                    <Lower_Icon width={'100%'} height={'100%'} />
                </View>
                <View style={styles.LogoWrapper}>
                    <HC_OTP_Logo width={windowWidth / 2.5} height={windowHeight / 3} />
                </View>
            </View>
        </>
    );
};

export default SplashMain;


const styles = StyleSheet.create({
    splashWrapper: {
        flex: 1,
        backgroundColor: colors.AnotherSecondaryColor,
        height: windowHeight,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    UpWrapper: {
        backgroundColor: colors.AnotherSecondaryColor,
        width: '100%',
        height: '50%',
    },
    DownWrapper: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '50%',
    },
    LogoWrapper: {
        position: 'absolute',
        zIndex: 3,
    },
});
