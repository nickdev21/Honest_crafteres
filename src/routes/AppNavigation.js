/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Easing, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationStrings from './NavigationStrings';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CustomDrawer from './customDrawer';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { CustomerAccount, Inquiry, SalesHome, Search, SOCHome } from '../screens';
import { colors } from '../assets/colors';

const Drawer = createDrawerNavigator();

const sideMenuDisabledScreens = [];
const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 250,
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


function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName={(homeData?.user?.role === 0 || homeData?.user?.role === 4) ? NavigationString.ADMIN_HOME : NavigationString.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={NavigationStrings.SOC_HOME_SCREEN} component={SOCHome} />
      <Stack.Screen name={NavigationStrings.HOME_SCREEN} component={SalesHome} />
      <Stack.Screen name={NavigationStrings.SEARCH_SCREEN} component={Search} />
      <Stack.Screen name={NavigationStrings.INQUIRY_SCREEN} component={Inquiry} />
      <Stack.Screen name={NavigationStrings.CUSTOMER_ACCOUNT_SCREEN} component={CustomerAccount} />
    </Stack.Navigator>
  );
}

export default function AppNavigations() {
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.primaryColor} barStyle={'dark-content'} />

      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: { borderTopRightRadius: 10, borderBottomEndRadius: 10 },
        }}>
        <Drawer.Screen
          options={({ navigation, route }) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            if (sideMenuDisabledScreens.includes(routeName)) {
              return { swipeEnabled: false };
            }
          }}
          name={NavigationStrings.HOME_STACK}
          component={HomeStack}
        />
      </Drawer.Navigator>
    </>
  );
}
