/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import { windowHeight } from '../../utils/Dimension';
import fonts from '../../assets/fonts';

const CustomerTile = ({ Data }) => {
    return (
        <View style={styles.CustomerTile} >
            <View style={styles.IconView} >
                <Data.Icon width={'90%'} height={'90%'} />
            </View>
            <View style={styles.TileDetail} >
                <View style={styles.DataViewStyle} >
                    <Text style={styles.DataNUmber} >{Data.Number}</Text>
                </View>
                <View style={styles.TileViewStyle} >
                    <Text style={styles.DataTitle} >{Data.title}</Text>
                </View>
            </View>
        </View>
    );
};

export default CustomerTile;



const styles = StyleSheet.create({
    CustomerTile: {
        backgroundColor: colors.whiteColor,
        // backgroundColor: 'red',
        width: '45%',
        height: windowHeight / 9,
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 24,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 0.10,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    IconView: {
        // backgroundColor: 'pink',
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TileDetail: {
        // backgroundColor: 'green',
        width: '75%',
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 10,
    },
    DataViewStyle: {
        // backgroundColor: 'green',
        height: '40%',
        color: colors.Black,
        fontSize: 18,
        lineHeight: 27,
        fontFamily: fonts.PoppinsHeavy,
        justifyContent: 'center',
    },
    TileViewStyle: {
        // backgroundColor: 'pink',
        height: '20%',
        color: colors.lowerGrey,
        fontSize: 14,
        lineHeight: 14,
        justifyContent: 'center',
    },
    DataNUmber: {
        // backgroundColor: 'green',
        color: colors.Black,
        fontSize: 18,
        lineHeight: 27,
        fontFamily: fonts.PoppinsHeavy,
    },
    DataTitle: {
        // backgroundColor: 'pink',
        color: colors.lowerGrey,
        fontSize: 13,
        lineHeight: 20,
        fontFamily: fonts.PoppinsSemiBold,
    },
});
