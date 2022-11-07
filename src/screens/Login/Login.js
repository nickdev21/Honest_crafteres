/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import LoginComponent from '../../component/LoginComponent';

const Login = () => {
    return (
        <LoginComponent />
    );
};

export default Login;


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
