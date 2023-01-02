/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/Feather';
import { colors } from '../assets/colors';
import fonts from '../assets/fonts';
import { Calander_Icon, Date_Icon } from '../assets/Icons';
import { windowHeight, windowWidth } from '../utils/Dimension';

// onChangeText={changedText}
const FormInput = ({
  style,
  newHeading,
  InputSubject,
  newHeadingColor,
  labelValue,
  PalceHolder,
  iconType,
  changedText,
  isPassword,
  headingTextColor,
  fontsize,
  mandatory,
  dataPickerFunction,
  ...rest
}) => {
  return (
    <>
      {newHeading ? (
        <Text
          style={[
            styles.TextColor,
            { color: newHeadingColor ? newHeadingColor : colors.primaryColor },
          ]}>
          {newHeading}
        </Text>
      ) : (
        <View style={styles.rowText} >
          <Text style={styles.TextStyle} >{InputSubject}</Text>
          {mandatory === true ?
            <Text style={styles.AstrikTextStyle} >*</Text>
            : null
          }
        </View>
      )}
      <Pressable style={[styles.inputContainer, style]} onPress={() => { dataPickerFunction() }} >

        <TextInput
          value={labelValue}
          onChangeText={changedText}
          style={styles.input}
          numberOfLines={1}
          placeholder={PalceHolder}
          placeholderTextColor="#666"
          {...rest}
        />
        {iconType ? (
          <View style={styles.iconStyle}>
            <Date_Icon width={'100%'} height={'100%'} />
          </View>
        ) : null}
      </Pressable>
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: windowHeight / 18,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000',
    borderColor: colors.BottomGrey,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: 'rgba(0, 110, 233, 0.02)',
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowOpacity: 0.25,
  },
  Subjectstyle: {
    color: '#000',
    fontSize: 16,
  },
  TextColor: {
    fontSize: 14,
    paddingVertical: 10,
    color: colors.AnotherSecondaryColor,
    fontFamily: fonts.PoppinsMedium,
  },
  iconStyle: {
    padding: 5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    width: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    // fontFamily: 'DM Sans',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle: {
    color: colors.WelcomeCardText,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: fonts.PoppinsSemiBold,
    paddingVertical: 5,
  },
  AstrikTextStyle: {
    color: colors.AstrikRed,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: fonts.PoppinsSemiBold,
  },
});
