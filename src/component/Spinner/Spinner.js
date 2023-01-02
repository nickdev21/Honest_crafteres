/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

const Spinner = ({ size = 30, color = colors.AnotherSecondaryColor, style }) => {
    return <ActivityIndicator size={size} color={color} style={style} />;
};

export default Spinner;
