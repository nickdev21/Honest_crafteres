/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import { BackArrow_Icon } from '../../assets/Icons';
import fonts from '../../assets/fonts';
import { windowHeight } from '../../utils/Dimension';
import { useNavigation } from '@react-navigation/native';

const CommonHeader = (props) => {
    const data = props.data;

    const navigation = useNavigation()
    return (
        <View style={styles.HeaderWrapper} >
            <View style={styles.EmptyView} />
            <View style={styles.DownContent} >
                <View style={styles.TextWrap} >
                    <Text style={styles.TextStyles} >{data?.HeaderTitile}</Text>
                </View>
                <Pressable onPress={() => navigation.goBack()} style={styles.IconView} >
                    <BackArrow_Icon width={'50%'} height={'50%'} />
                </Pressable>
            </View>
        </View>
    );
};

export default CommonHeader;



const styles = StyleSheet.create({
    HeaderWrapper: {
        backgroundColor: colors.primaryColor,
        // backgroundColor: 'pink',
        height: windowHeight / 13,
        // height: '8%',
        // flexDirection: 'row',
    },
    TextWrap: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    TextStyles: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.whiteColor,
        fontFamily: fonts.PoppinsBold,
        // lineHeight: 20,
    },
    DownContent: {
        height: '85%',
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
    },
    EmptyView: {
        height: '15%',
        width: '100%',
        // backgroundColor: 'green',
    },
    IconView: {
        position: 'absolute',
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
