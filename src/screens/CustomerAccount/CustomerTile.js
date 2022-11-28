/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import { windowHeight } from '../../utils/Dimension';
import fonts from '../../assets/fonts';
import Images from '../../assets/Images';

const CustomerTile = ({ data }) => {
    const { item, index } = data;
    return (
        <View style={styles.TileWrapper} >
            <View style={styles.ImageWrapper} >
                <View style={styles.ImageSTyle} >
                    <Image source={Images.TempUser} style={styles.UserImageStyle} />
                </View>
            </View>
            <View style={styles.NameStyle} >
                <Text style={styles.nameText} >{item?.name}</Text>
                <Text style={styles.userCode} >HC1234</Text>
            </View>
            <View style={styles.DateStyle} >
                <Text style={styles.dateText} >since 10/09/2022</Text>
            </View>
        </View>
    );
};

export default CustomerTile;



const styles = StyleSheet.create({

    TileWrapper: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        marginTop: 20,
        width: '90%',
        height: windowHeight / 12,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.BottomGrey,
        borderBottomWidth: 1,
    },
    ImageSTyle: {
        // backgroundColor: 'black',
        height: windowHeight / 20,
        width: windowHeight / 20,
        // width: 'auto',
        borderRadius: 100,
        alignSelf: 'center',
    },
    UserImageStyle: {
        // backgroundColor: 'red',
        height: '100%',
        width: '100%',
        borderRadius: 100,
        alignSelf: 'center',

    },
    ImageWrapper: {
        // backgroundColor: 'pink',
        height: '100%',
        width: '15%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    NameStyle: {
        // backgroundColor: 'skyblue',
        height: '100%',
        width: '50%',
        justifyContent: 'space-evenly',
        paddingVertical: 10,

    },
    DateStyle: {
        // backgroundColor: 'yellow',
        height: '100%',
        width: '35%',
        paddingTop: 13,
        alignItems: 'center',

    },
    nameText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 18,
        fontFamily: fonts.PoppinsBold,

    },
    userCode: {
        color: colors.Black,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: fonts.PoppinsMedium,

    },
    dateText: {
        color: colors.Black,
        fontSize: 12,
        // lineHeight: 10,
        fontFamily: fonts.PoppinsMedium,

    },

})