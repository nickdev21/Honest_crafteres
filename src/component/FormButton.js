/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { colors } from '../assets/colors';
import fonts from '../assets/fonts';
// import fonts from '../assets/fonts';
import { windowHeight } from '../utils/Dimension';

const FormButton = ({ buttonTitle, style, ...rest }) => {
  return (
    <Pressable style={[styles.buttonContainer, style]} {...rest}>
      <Text style={styles.buttonText} {...rest}>
        {buttonTitle}
      </Text>
    </Pressable>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
    height: windowHeight / 14,
    backgroundColor: colors.AnotherSecondaryColor,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: fonts.PoppinsBold,
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    // fontWeight: '700',
    color: colors.whiteColor,
    textTransform: 'uppercase',
  },
});
