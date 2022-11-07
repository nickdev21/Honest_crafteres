/* eslint-disable prettier/prettier */
import { Easing } from 'react-native';
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import NavigationStrings from './NavigationStrings';
import { Login, WelcomeRole } from '../screens';


const Stack = createStackNavigator();



const AuthNavigation = () => {

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
            <Stack.Screen name={NavigationStrings.WELCOME_ROLE_SCREEN} component={WelcomeRole} />
            <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={Login} />
        </Stack.Navigator>
    );
};

export default AuthNavigation;
