/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';

const OnboardingItem = ({ item }) => {
    return (
        <View style={[styles.OnBoardItemWrapper]} >
            <View style={[styles.ImageANdHeading]} >
                <View style={styles.IconView} >
                    <item.Icon width={'90%'} height={'90%'} />
                </View>
                <View style={styles.TextStyle} >
                    <Text style={styles.titleStyle} >{item.Title}</Text>
                    <Text style={styles.SubtitleStyle} >{item.SubTitle}</Text>
                </View>
            </View>
        </View>
    );
};

export default OnboardingItem;

const styles = StyleSheet.create({
    OnBoardItemWrapper: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        height: windowHeight,
        width: windowWidth,
    },
    ImageANdHeading: {
        // backgroundColor: 'red',
        height: '75%',
        width: '100%',
    },
    IconView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        width: '90%',
        alignSelf: 'center',
    },
    TextStyle: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        height: '30%',
        alignSelf: 'center',
        width: '80%',
        paddingVertical: '5%',
    },
    titleStyle: {
        textAlign: 'center',
        color: colors.WelcomeCardText,
        fontSize: 20,
        lineHeight: 26,
        fontFamily: fonts.PoppinsBold,
    },
    SubtitleStyle: {
        textAlign: 'center',
        color: colors.CaptionGrey,
        fontSize: 14,
        lineHeight: 17,
        fontFamily: fonts.PoppinsSemiBold,
    },
})