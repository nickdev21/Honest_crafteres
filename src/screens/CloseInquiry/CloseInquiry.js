/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import { ClosePopUp_Icon, CloseRed_Icon, Merge_Icon, SuccessGreen_Icon } from '../../assets/Icons';
import FormButton from '../../component/FormButton';
import fonts from '../../assets/fonts';
import { windowHeight } from '../../utils/Dimension';
import CommonInputRemark from '../../component/Input/CommonInputRemark';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from '../../component/BottomSheet/BottomSheet';
import CommonInput from '../../component/Input/CommonInput';
import PaymentSuccessModal from '../../component/Modal/PaymentSuccessModal';

const CloseInquiry = () => {

    const [ButtonIndex, setButtonIndex] = useState(0)

    const refRBSheet = useRef();

    const InquiryHeaderData = {
        HeaderTitile: 'Close Inquiry',
    };

    const ButtonDawta = [
        { id: 1, title: 'Duplicate Inquiry' },
        { id: 2, title: 'No real needs / Fake inquiry' },
        { id: 3, title: 'Out of scope' },
        { id: 4, title: 'Other' },
    ];


    const RenderButtons = ({ item, index }) => {
        return (
            <>
                <Pressable style={[styles.GreyButtons, ButtonIndex === index ? { backgroundColor: colors.AnotherSecondaryColor } : null]} onPress={() => setButtonIndex(index)} >
                    <Text style={[styles.ButtonText, ButtonIndex === index ? { color: colors.whiteColor } : null]} >{item?.title}</Text>
                </Pressable>
            </>
        );
    };

    const RenderBottomSheet = () => {

        const PopUpData = {
            Icon: SuccessGreen_Icon, PopUpTittle: 'This inquiry has been marked closed. Please ask admin to open again if needed.',
        }

        return (
            <>
                <View style={styles.BottomSheetWrapper} >
                    <View style={styles.FirstAreaIcon} >
                        <Pressable onPress={() => refRBSheet.current.close()} style={styles.CloseIconBS} >
                            <ClosePopUp_Icon width={'10%'} height={windowHeight / 30} />
                        </Pressable>
                        <Merge_Icon width={'60%'} height={'60%'} />
                        <Text style={styles.BSText} >Merge with inquiry ID</Text>
                    </View>
                    <View style={styles.InputArea} >
                        <CommonInput InputHeader={'Inquiry ID'} PalceHolder={'Type here'} />
                    </View>
                    <View style={styles.BottomCTA} >
                        <PaymentSuccessModal data={PopUpData} />
                    </View>
                </View>
            </>
        );
    };


    return (
        <>
            <View style={styles.CloseInquiryWrapper} >
                <CommonHeader data={InquiryHeaderData} />
                <View style={styles.MainSection} >
                    <View style={styles.UpperIconAndText} >
                        <CloseRed_Icon width={'50%'} height={'40%'} />
                        <Text style={styles.UpperMainText} >Tell us what went wrong. We will investigated & take action soon.</Text>
                    </View>
                    <View style={styles.ButtonsArea} >
                        <FlatList contentContainerStyle={styles.FlatListStyles} data={ButtonDawta} renderItem={RenderButtons} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                            ListFooterComponent={({ item, index }) => (
                                <>{
                                    ButtonIndex === 3 ?
                                        <>
                                            <View style={styles.OtherRemarkStyle} >
                                                <CommonInputRemark PalceHolder={'Type here'} numberOfLine={5} />
                                            </View>
                                        </>
                                        : null
                                }
                                </>
                            )} />
                    </View>
                    <View style={styles.MainCTA} >
                        <FormButton buttonTitle="Submit" onPress={() => refRBSheet.current.open()} style={styles.ButtonStyle} />
                    </View>
                </View>
            </View>
            <BottomSheet reference={refRBSheet} RenderComp={RenderBottomSheet} />
        </>
    );
};

export default CloseInquiry;


const styles = StyleSheet.create({
    CloseInquiryWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    MainSection: {
        // backgroundColor: 'red',
        width: '100%',
        flex: 1,
    },
    UpperIconAndText: {
        // backgroundColor: 'red',
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonsArea: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '60%',
        justifyContent: 'flex-start',
        paddingTop: '2%',

    },
    MainCTA: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonStyle: {
        width: '92%',
    },
    UpperMainText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        textAlign: 'center',
        paddingVertical: 15,
    },
    GreyButtons: {
        backgroundColor: colors.InquiryCloseButtonColor,
        width: '95%',
        borderRadius: 50,
        height: windowHeight / 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    ButtonText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        textAlign: 'center',
    },
    OtherRemarkStyle: {
        // backgroundColor: 'red',
        width: '88%',
        alignSelf: 'center',
    },
    BottomSheetWrapper: {
        // backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // justifyContent: 'center',
    },
    FirstAreaIcon: {
        // backgroundColor: 'red',
        height: '40%',
        // justifyContent: 'space-around',
        justifyContent: 'center',
        paddingTop: 10,
        alignItems: 'center',
    },
    InputArea: {
        // backgroundColor: 'pink',
        height: '30%',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 10,
    },
    BottomCTA: {
        // backgroundColor: 'yellow',
        height: '30%',
        paddingHorizontal: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    CloseIconBS: {
        // backgroundColor: 'yellow',
        position: 'absolute',
        // justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: '100%',
        width: '100%',
        top: 0,
        right: 0,
    },
    BSText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsBold,
        textAlign: 'center',
        marginVertical: 10,
    },
});
