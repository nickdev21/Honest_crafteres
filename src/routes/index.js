/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigations from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const index = () => {

    const [user, setuser] = useState(true);

    return (
        <NavigationContainer>
            {user ? <AppNavigations /> : <AuthNavigation />}
        </NavigationContainer>
    );
};

export default index;