/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { windowHeight } from '../../utils/Dimension';
import { HomeTileArrow_Icon, INQ_Icon } from '../../assets/Icons';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';

const HomeTile = ({ data }) => {
    console.log(data?.index, "CHECK DATA")
    return (
        <Pressable style={[styles.TileWraper, { backgroundColor: data?.index % 2 === 0 ? colors.TileFirst : colors.TileSecond }]} >
            <View style={styles.FirstWrap} >
                <data.item.Icon width={'90%'} height={'90%'} />
            </View>
            <View style={styles.SecondWrap} >
                <View style={styles.TextWrap} >
                    <Text style={styles.TileHeading} >{data?.item?.title}</Text>
                    <Text style={styles.TileSubHeading} >{data?.item?.SubTitle}</Text>
                </View>
                <View style={styles.IconWrap} >
                    <HomeTileArrow_Icon width={'70%'} height={'70%'} />
                </View>
            </View>

        </Pressable>
    );
};

export default HomeTile;



const styles = StyleSheet.create({
    TileWraper: {
        backgroundColor: colors.TileFirst,
        width: '90%',
        height: windowHeight / 10,
        borderRadius: 16,
        marginVertical: 20,
        flexDirection: 'row',
    },
    FirstWrap: {
        // backgroundColor: 'pink',
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SecondWrap: {
        // backgroundColor: 'green',
        width: '70%',
        height: '100%',
        flexDirection: 'row',
    },
    TextWrap: {
        // backgroundColor: 'purple',
        width: '85%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    TileHeading: {
        color: colors.WelcomeCardText,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.PoppinsBold,
    },
    TileSubHeading: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fonts.PoppinsRegular,
    },
    IconWrap: {
        // backgroundColor: 'yellow',
        width: '15%',
        height: '100%',
        paddingVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});
