import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationStrings from './NavigationStrings';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CustomDrawer from './customDrawer';

const Drawer = createDrawerNavigator();

const sideMenuDisabledScreens = []


function HomeStack({ navigation }) {
  return (
    <View
      style={{ backgroundColor: "red" }}>
      <Text>Home</Text>
    </View>
  );
}


export default function AppNavigations() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false, drawerStyle: { borderTopRightRadius: 10, borderBottomEndRadius: 10 } }}
    >
      <Drawer.Screen
        options={({ navigation, route }) => {
          const routeName = getFocusedRouteNameFromRoute(route)
          if (sideMenuDisabledScreens.includes(routeName))
            return ({ swipeEnabled: false })
        }}
        name={NavigationStrings.HOME_STACK}
        component={HomeStack} />
    </Drawer.Navigator>

  );
}