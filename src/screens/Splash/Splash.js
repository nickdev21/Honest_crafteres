/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { HC_OTP_Logo } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { colors } from '../../assets/colors';

const Splash = () => {
    return (
        <View style={styles.splashWrapper}>
            <View style={styles.UpWrapper} />
            <View style={styles.MiddleWrapper} />
            <View style={styles.LogoWrapper}>
                <HC_OTP_Logo width={windowWidth / 2.5} height={windowHeight / 3} />
            </View>
        </View>
    );
};

export default Splash;

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
        height: '100%',
    },
    MiddleWrapper: {
        backgroundColor: colors.OTP_Splash_Color,
        transform: [{ rotate: '145deg' }],
        width: '300%',
        height: '40%',
        position: 'absolute',
        zIndex: 2,
    },
    DownWrapper: {
        backgroundColor: 'pink',
        width: '100%',
        height: '42%',
    },
    LogoWrapper: {
        position: 'absolute',
        zIndex: 3,
    },
});
