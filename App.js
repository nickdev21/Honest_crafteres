/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Routes from './src/routes';
import { colors } from './src/assets/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Splash, SplashMain } from './src/screens';

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    if (splash) {
      setTimeout(() => {
        setSplash(false);
      }, 1500);
    }
  });
  // Routes
  return (
    <SafeAreaProvider style={styles.container}>
      {splash ? <SplashMain /> : <Routes />}
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.primaryColor,
  },
});
