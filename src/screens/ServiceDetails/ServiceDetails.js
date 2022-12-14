/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import CommonInput from '../../component/Input/CommonInput';
import CommonInputRemark from '../../component/Input/CommonInputRemark';
import { ScrollView } from 'react-native-gesture-handler';
import FormButton from '../../component/FormButton';
import fonts from '../../assets/fonts';
import Images from '../../assets/Images';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import DropDown from '../../component/DropDowns/DropDown';
import CustomCheckBox from '../../component/CheckBox/CheckBox';

const ServiceDetails = () => {

    const ServiceDetailsData = {
        HeaderTitile: 'Serivce Details',
    };

    return (
        <View style={styles.ServiceDetailsWrapper} >
            <CommonHeader data={ServiceDetailsData} />
            <ScrollView style={styles.FormArea} >
                <DropDown />
                <CustomCheckBox />
                <CommonInput InputHeader={'Service Type'} PalceHolder={'Select'} mandatory={true} DownIcon={true} />
                <CommonInput InputHeader={'Pickup Date'} PalceHolder={'Select'} mandatory={true} />
                <CommonInput InputHeader={'Pickup Time Slot'} PalceHolder={'Select'} mandatory={true} />
                <CommonInputRemark InputHeader={'Special Request By Customer'} PalceHolder={'Type here'} numberOfLine={5} />
                <CommonInputRemark InputHeader={'Pickup Address'} PalceHolder={'Type here'} mandatory={true} numberOfLine={4} />
                <CommonInput InputHeader={'Expiry Date'} PalceHolder={'DD/MM/YYYY'} mandatory={true} />
                <View>
                    <Text style={styles.TextStyle} >Items & Services <Text style={styles.AstrikTextStyle} >*</Text></Text>
                    <View style={styles.GifArea} >
                        <Image style={styles.imageView} source={Images.ServiceDetailGif} />
                        <Text style={styles.AddItemText} >+Add New Item & Services</Text>
                    </View>
                </View>
                <FormButton buttonTitle="Save" onPress={() => { }} style={styles.ButtonStyle} />
            </ScrollView>
        </View>
    );
};

export default ServiceDetails;


const styles = StyleSheet.create({
    ServiceDetailsWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    FormArea: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 10,
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
    AddItemText: {
        color: colors.TextRed,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
    },
    GifArea: {
        height: windowHeight / 4,
        width: '98%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.whiteColor,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        marginBottom: 20,
        alignSelf: 'center',
    },
    imageView: {
        // width: windowWidth / 10,
        // height: windowHeight / 15,
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
    },
});
