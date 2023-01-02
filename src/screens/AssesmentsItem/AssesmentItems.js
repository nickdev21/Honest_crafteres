/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PendingAssessment from './PendingAssessment';
import CompletedAssessment from './CompletedAssessment';

const AssesmentItems = () => {

    const Tab = createMaterialTopTabNavigator();

    const AssesmentHeaderData = {
        HeaderTitile: 'Assessment Items',
    };

    return (
        <View style={styles.AssesmentItemsWrapper} >
            <CommonHeader data={AssesmentHeaderData} />
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
                <Tab.Screen name="Pending Assessment" children={() => <PendingAssessment />} />
                <Tab.Screen name="Completed Assessment" children={() => <CompletedAssessment />} />
            </Tab.Navigator>
        </View>
    );
};

export default AssesmentItems;


const styles = StyleSheet.create({
    AssesmentItemsWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
   
});
