/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import LoginComponent from '../../component/LoginComponent';
import NavigationStrings from '../../routes/NavigationStrings';
import { HCLOGO_Icon } from '../../assets/Icons';

const OTPLogin = () => {

    let data = {
        OTPLogin : true,
        NavigationScreen : NavigationStrings?.HOME_SCREEN,
        CenterIcon: HCLOGO_Icon,
        ButtonTitle: 'Get Verified',
        PageHeading: 'OTP VERIFICATION',
        PageSubHeading: 'Please enter 4 digit OTP sent to +65 12345689 below.',
    };

    return (
        <LoginComponent OTPLogin={true} data={data} />
    );
};

export default OTPLogin;


const styles = StyleSheet.create({
    LoginWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    UpperWrapper: {
        backgroundColor: 'pink',
        height: '40%',
        width: '100%',
    },
    LowerWrapper: {
        backgroundColor: 'yellow',
        height: '60%',
        width: '100%',
    },
});
