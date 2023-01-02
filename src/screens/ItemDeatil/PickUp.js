/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { EyeVisible_Icon } from '../../assets/Icons';
import { windowHeight } from '../../utils/Dimension';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../routes/NavigationStrings';

const PickUp = () => {

    const navigation = useNavigation();

    return (
        <>
            <View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftTextHead} >HCI1234-ORD-(1-1)</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardRightTextHead} >XYZ Hand Bag</Text>
                    <Pressable style={styles.EyeView} onPress={() => { navigation.navigate(NavigationStrings.PICKUP_HANDOVER) }} >
                        <EyeVisible_Icon width={'100%'} height={windowHeight / 35} />
                    </Pressable>
                </View>
            </View>
        </>
    );
};

export default PickUp;



const styles = StyleSheet.create({
    TextView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: 2,
    },
    InvoiceCardLeftTextHead: {
        // backgroundColor: 'pink',
        color: colors.CaptionGrey,
        fontSize: 12,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        width: '80%',
        height: '100%',
    },
    InvoiceCardRightTextHead: {
        // backgroundColor: 'blue',
        color: colors.CaptionGrey,
        fontSize: 12,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        width: '80%',
        // textAlign: 'right',
        height: '100%',
    },
    EyeView: {
        // backgroundColor: 'blue',
        height: windowHeight / 40,
        width: '10%',
    },
});