/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { EyeVisible_Icon } from '../../assets/Icons';
import { windowHeight } from '../../utils/Dimension';
import BottomSheet from '../../component/BottomSheet/BottomSheet';
import ItemBottomSheet from './ItemBottomSheet';

const ItemD = () => {

    const PickUpSheet = useRef();


    return (
        <>
            <View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftTextHead} >HCI1234-ORD-(1-1)</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardRightTextHead} >XYZ Hand Bag</Text>
                    <Pressable style={styles.EyeView} onPress={() => { PickUpSheet.current.open() }} >
                        <EyeVisible_Icon width={'100%'} height={windowHeight / 35} />
                    </Pressable>
                </View>
            </View>
            <BottomSheet reference={PickUpSheet} BSheight={windowHeight} RenderComp={() => (<ItemBottomSheet PickUpSheet={PickUpSheet} />)} />
        </>
    );
};

export default ItemD;



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