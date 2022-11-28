/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllInquiry from './AllInquiry';
import ClaimedInquiry from './ClaimedInquiry';
import ClosedInquiry from './ClosedInquiry';
import { colors } from '../../assets/colors';


const InquiryTabs = () => {
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
            // tabBarOptions={{ labelStyle: { textTransform: 'none', color: colors.AnotherSecondaryColor } }}
            upperCaseLabel={false}
            tabBarActiveTintColor={colors.AnotherSecondaryColor}

        >
            <Tab.Screen name="All" children={() => <AllInquiry />} />
            <Tab.Screen name="Claimed" children={() => <ClaimedInquiry />} />
            <Tab.Screen name="Closed" children={() => <ClosedInquiry />} />
        </Tab.Navigator>
    );
};

export default InquiryTabs;
