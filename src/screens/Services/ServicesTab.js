/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../../assets/colors';
import Quotation from './Quotation';
import Invoices from './Invoices';


const ServicesTabs = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarLabel: 'none',

                tabBarLabelStyle: {
                    textTransform: 'none',
                    color: '#0099A8',
                },

                tabBarIndicatorStyle: {
                    backgroundColor: colors.AnotherSecondaryColor,
                    // textTransform: 'lowercase',
                    // tabBarStyle: {backgroundColor: 'yellow'},
                },
            }}
            upperCaseLabel={false}
            tabBarActiveTintColor={colors.AnotherSecondaryColor}

        >
            <Tab.Screen name="Quotation" children={() => <Quotation />} />
            <Tab.Screen name="Invoices" children={() => <Invoices />} />
        </Tab.Navigator>
    );
};

export default ServicesTabs;
