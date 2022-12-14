/* eslint-disable prettier/prettier */
import { Easing, StatusBar } from 'react-native';
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import NavigationStrings from './NavigationStrings';
import { CustomerAccount, Inquiry, Login, OnBoardingScreen, OTPLogin, SalesHome, Search, SOCHome, WelcomeRole } from '../screens';
import { colors } from '../assets/colors';


const Stack = createStackNavigator();



const AuthNavigation = (props) => {



    const config = {
        animation: 'timing',
        config: {
            duration: 400,
            easing: Easing.linear,
        },
    };

    const closeConfig = {
        animation: 'timing',
        config: {
            duration: 200,
            easing: Easing.linear,
        },
    };

    return (
        <>
            <StatusBar animated={true} backgroundColor={colors.AnotherSecondaryColor} barStyle={'dark-content'} />

            <Stack.Navigator screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                transitionSpec: {
                    open: config,
                    close: closeConfig,
                },
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}>
                <Stack.Screen name={NavigationStrings.ONBOARDING_SCREEN} component={OnBoardingScreen} />
                <Stack.Screen name={NavigationStrings.WELCOME_ROLE_SCREEN} component={WelcomeRole} />
                <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={Login} />
                <Stack.Screen name={NavigationStrings.OTP_LOGIN_SCREEN} component={OTPLogin} />
                {/* <Stack.Screen name={NavigationStrings.SOC_HOME_SCREEN} component={SOCHome} />
                <Stack.Screen name={NavigationStrings.HOME_SCREEN} component={SalesHome} />
                <Stack.Screen name={NavigationStrings.SEARCH_SCREEN} component={Search} />
                <Stack.Screen name={NavigationStrings.INQUIRY_SCREEN} component={Inquiry} />
                <Stack.Screen name={NavigationStrings.CUSTOMER_ACCOUNT_SCREEN} component={CustomerAccount} /> */}

            </Stack.Navigator>
        </>
    );
};

export default AuthNavigation;
