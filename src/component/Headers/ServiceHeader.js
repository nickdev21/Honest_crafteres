/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import { BackArrow_Icon, HamBurger_Icon, MsgPop_Icon, YellowFlag_Icon } from '../../assets/Icons';
import fonts from '../../assets/fonts';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { useNavigation } from '@react-navigation/native';
import CTAModal from '../Modal/CTAModal';
import CTAModalChat from '../../screens/Chat/CTAModalChat';

const ServiceHeader = (props) => {
    const data = props.data;

    const navigation = useNavigation()

    const PopUpData = {
        Icon: YellowFlag_Icon, PopUpTittle: 'Are you sure you want service details id HCI1234-QTN flagged as express?', FirstCTA: 'No,Cancel', SecondCTA: 'Yes, Flag', SecondPopUpTitle: 'Service details ID HCI1234-QTN flagged as express successfully!',
    };

    return (
        <View style={styles.HeaderWrapper} >
            {/* <View style={styles.EmptyView} /> */}
            <View style={styles.DownContent} >
                <View style={styles.TextWrap} >
                    <Text style={styles.TextStyles} >{data?.HeaderTitile}</Text>
                </View>
                <Pressable onPress={() => navigation.goBack()} style={styles.IconView} >
                    <BackArrow_Icon width={'50%'} height={'60%'} />
                </Pressable>
                <View style={styles.IconViewLast} >
                    <CTAModalChat data={PopUpData}
                        RenderComp={(props) => {
                            return (
                                <>
                                    <Pressable onPress={() => props?.setModalVisible(true)} style={styles.IconLast} >
                                        <data.SecondIcon width={windowWidth / 5} height={windowHeight / 25} />
                                    </Pressable>
                                </>);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default ServiceHeader;



const styles = StyleSheet.create({
    HeaderWrapper: {
        backgroundColor: colors.primaryColor,
        // backgroundColor: 'pink',
        height: windowHeight / 16,
        justifyContent: 'center',
        alignItems: 'center',
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
        height: '100%',
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
        // backgroundColor: 'pink',
    },
    ViewModal: {
        backgroundColor: 'pink',
    },
    IconViewLast: {
        // backgroundColor: 'pink',
        position: 'absolute',
        height: '100%',
        width: '20%',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconLast: {
        // backgroundColor: 'green',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
