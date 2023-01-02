/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Routes from './src/routes';
import { colors } from './src/assets/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Splash, SplashMain } from './src/screens';
import FlashMessage from 'react-native-flash-message';
import { windowHeight } from './src/utils/Dimension';

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
      <FlashMessage animated position={'top'} style={styles.FlashMessageStyling} />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.primaryColor,
  },
  FlashMessageStyling: {
    marginTop: windowHeight / 16,
  },
});
