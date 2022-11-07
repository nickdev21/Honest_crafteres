/* eslint-disable prettier/prettier */
import { NativeModules, Platform } from 'react-native';

export const BASE_URL =
    Platform.OS == 'android'
        ? NativeModules.RNConfig.env == 'staging' ||
            NativeModules.RNConfig.env == 'dev'
            ? 'https://bigfoot.reddotapps.com.sg/api'
            : 'https://vmo.bigfoot.com.sg/api'
        : 'https://vmo.bigfoot.com.sg/api';
console.log('BASE', BASE_URL);
export const API_KEY = 'XXX-XXXX';
