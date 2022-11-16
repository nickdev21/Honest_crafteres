/* eslint-disable prettier/prettier */
import React from 'react';
import LoginComponent from '../../component/LoginComponent';
import NavigationStrings from '../../routes/NavigationStrings';
import { HCLOGO_Icon } from '../../assets/Icons';

const Login = () => {


    let data = {
        OTPLogin: false,
        NavigationScreen: NavigationStrings.OTP_LOGIN_SCREEN,
        CenterIcon: HCLOGO_Icon,
        ButtonTitle: 'Continue',
        PageHeading: 'LOGIN',
        PageSubHeading: 'Please enter your phone number below to get started.',
    };

    return (
        <LoginComponent data={data} />
    );
};

export default Login;
