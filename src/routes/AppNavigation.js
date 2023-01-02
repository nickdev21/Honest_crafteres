/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Easing, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationStrings from './NavigationStrings';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CustomDrawer from './customDrawer';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { AssesmentItems, Chat, CloseInquiry, CollectPayment, ConfirmService, ConfirmServiceInfo, CustomerAccount, CustomerProfileTab, Inquiry, InvoiceDetails, InvoicePreview, InvoicesList, ItemAssesment, ItemDetail, PaymentDetails, PickUpHandOver, QRCode, SalesHome, Search, ServiceDetails, ServiceInfo, Services, SOCHome } from '../screens';
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
      <Stack.Screen name={NavigationStrings.CUSTOMER_PROFILE_TAB} component={CustomerProfileTab} />
      <Stack.Screen name={NavigationStrings.INVOICE_DETAILS} component={InvoiceDetails} />
      <Stack.Screen name={NavigationStrings.CLOSE_INQUIRY} component={CloseInquiry} />
      <Stack.Screen name={NavigationStrings.INVOICE_PREVIEW} component={InvoicePreview} />
      <Stack.Screen name={NavigationStrings.COLLECT_PAYMENT} component={CollectPayment} />
      <Stack.Screen name={NavigationStrings.SERVICE_DETAIL} component={ServiceDetails} />
      <Stack.Screen name={NavigationStrings.CHAT_SCREEN} component={Chat} />
      <Stack.Screen name={NavigationStrings.CONFIRM_SERVICES} component={ConfirmService} />
      <Stack.Screen name={NavigationStrings.SERVICES_SCREEN} component={Services} />
      <Stack.Screen name={NavigationStrings.SERVICES_INFO} component={ServiceInfo} />
      <Stack.Screen name={NavigationStrings.CONFIRM_SERVICE_INFO} component={ConfirmServiceInfo} />
      <Stack.Screen name={NavigationStrings.PAYMENT_DETAILS} component={PaymentDetails} />
      <Stack.Screen name={NavigationStrings.ITEM_DETAILS} component={ItemDetail} />
      <Stack.Screen name={NavigationStrings.QR_CODE_SCREEN} component={QRCode} />
      <Stack.Screen name={NavigationStrings.INVOICES_LIST} component={InvoicesList} />
      <Stack.Screen name={NavigationStrings.PICKUP_HANDOVER} component={PickUpHandOver} />
      <Stack.Screen name={NavigationStrings.ASSESMENT_ITEMS} component={AssesmentItems} />
      <Stack.Screen name={NavigationStrings.ITEM_ASSESMENT} component={ItemAssesment} />
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
