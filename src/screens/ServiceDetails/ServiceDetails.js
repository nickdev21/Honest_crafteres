/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
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
import FormInput from '../../component/FormInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import BottomSheet from '../../component/BottomSheet/BottomSheet';
import PickUpBottomSheet from '../ItemDeatil/ItemBottomSheet';
import AddNewItem from './AddNewItem';


const ServiceDetails = () => {

    const [ServiceType, setServiceType] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [startDate, setStartDate] = useState();
    const [isTimePickerFirst, setTimePickerFirst] = useState(false);
    const [FirstTimeSlot, setFirstTimeSlot] = useState();
    const [isTimePickerSecond, setTimePickerSecond] = useState(false);
    const [SecondTimeSlot, setSecondTimeSlot] = useState();
    const [isTimePickerExpiry, setTimePickerExpiry] = useState(false);
    const [ExpiryTimeSlot, setExpiryTimeSlot] = useState();


    const PickUpSheet = useRef();
    const AddNew = useRef();



    const ServiceDetailsData = {
        HeaderTitile: 'Serivce Details',
    };

    const DropDownData = [
        { ItemName: 'Bags' },
        { ItemName: 'Shoes' },
        { ItemName: 'Cars' },
        { ItemName: 'Spaces' },
        { ItemName: 'Bespoke' },
        { ItemName: 'Honest Packages' },
    ];

    // DatePicker

    const showStartDatePicker = () => {
        setDatePickerVisibility(true);
        setStartDate(null);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handelStartPicker = (date) => {
        hideDatePicker();
        setStartDate(moment(date).format('DD-MM-YYYY'));
    };

    // FIRST
    const showPickUpTimeFirst = () => {
        setTimePickerFirst(true);
        setFirstTimeSlot(null);
    };

    const hidePickUpTimeFirst = () => {
        setTimePickerFirst(false);
    };

    const handelPickUpTimeFirst = (date) => {
        hidePickUpTimeFirst();
        setFirstTimeSlot(moment(date).format('hh:mm'));
    };

    // SECOND

    const showPickUpTimeSecond = () => {
        setTimePickerSecond(true);
        setSecondTimeSlot(null);
    };

    const hidePickUpTimeSecond = () => {
        setTimePickerSecond(false);
    };

    const handelPickUpTimeSecond = (date) => {
        hidePickUpTimeSecond();
        setSecondTimeSlot(moment(date).format('hh:mm'));
    };

    // EXPIRY

    const showPickUpTimeExpiry = () => {
        setTimePickerExpiry(true);
        setExpiryTimeSlot(null);
    };

    const hidePickUpTimeExpiry = () => {
        setTimePickerExpiry(false);
    };

    const handelPickUpTimeExpiry = (date) => {
        hidePickUpTimeExpiry();
        setExpiryTimeSlot(moment(date).format('DD-MM-YYYY'));
    };


    return (
        <View style={styles.ServiceDetailsWrapper} >
            <CommonHeader data={ServiceDetailsData} />
            <ScrollView style={styles.FormArea} >
                <DropDown data={DropDownData} Value={'Bags'} stateFunction={setServiceType} InputHeader={'Service Type'} mandatory={true} PalceHolder={'Select'} />
                <FormInput editable={false} iconType="calendar" mandatory={true} dataPickerFunction={showStartDatePicker} changedText={text => setStartDate(text)} InputSubject="Pickup Date" PalceHolder={'DD/MM/YYYY'}
                    autoCapitalize="none" autoCorrect={false} userHeight={50} fontsize={16} >{startDate}</FormInput>
                <Text style={styles.TextStyle} >Pickup Time Slot <Text style={styles.AstrikTextStyle} >*</Text></Text>
                <View style={styles.TimeSlotStyle} >
                    <FormInput editable={false} dataPickerFunction={showPickUpTimeFirst} changedText={text => setFirstTimeSlot(text)} PalceHolder={'09:00-02:00 Pm'}
                        autoCapitalize="none" autoCorrect={false} userHeight={50} fontsize={16} style={styles.MultiInputSTyle} >{FirstTimeSlot}</FormInput>
                    <FormInput editable={false} dataPickerFunction={showPickUpTimeSecond} changedText={text => setSecondTimeSlot(text)} PalceHolder={'09:00-02:00 Pm'}
                        autoCapitalize="none" autoCorrect={false} userHeight={50} fontsize={16} style={styles.MultiInputSTyle} >{SecondTimeSlot}</FormInput>
                </View>
                <CommonInputRemark InputHeader={'Special Request By Customer'} PalceHolder={'Type here'} numberOfLine={5} />
                <CommonInputRemark InputHeader={'Pickup Address'} PalceHolder={'Type here'} mandatory={true} numberOfLine={4} editable={false} RunFunction={() => { PickUpSheet.current.open(); }} />
                <FormInput editable={false} iconType="calendar" mandatory={true} dataPickerFunction={showPickUpTimeExpiry} changedText={text => setExpiryTimeSlot(text)} InputSubject="Expiry Date" PalceHolder={'DD/MM/YYYY'}
                    autoCapitalize="none" autoCorrect={false} userHeight={50} fontsize={16} >{ExpiryTimeSlot}</FormInput>
                <View>
                    <Text style={styles.TextStyle} >Items & Services <Text style={styles.AstrikTextStyle} >*</Text></Text>
                    <View style={styles.GifArea} >
                        <Image style={styles.imageView} source={Images.ServiceDetailGif} />
                        <Pressable onPress={() => { AddNew.current.open(); }} >
                            <Text style={styles.AddItemText} >+Add New Item & Services</Text>
                        </Pressable>
                    </View>
                </View>
                <FormButton buttonTitle="Save" onPress={() => { }} style={styles.ButtonStyle} />
            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                minimumDate={new Date()}
                onConfirm={handelStartPicker}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerFirst}
                mode="time"
                minimumDate={new Date()}
                onConfirm={handelPickUpTimeFirst}
                onCancel={hidePickUpTimeFirst}
            />
            <DateTimePickerModal
                isVisible={isTimePickerSecond}
                mode="time"
                minimumDate={new Date()}
                onConfirm={handelPickUpTimeSecond}
                onCancel={hidePickUpTimeSecond}
            />
            <DateTimePickerModal
                isVisible={isTimePickerExpiry}
                mode="date"
                minimumDate={new Date()}
                onConfirm={handelPickUpTimeExpiry}
                onCancel={hidePickUpTimeExpiry}
            />
            <BottomSheet reference={PickUpSheet} BSheight={windowHeight} RenderComp={() => (<PickUpBottomSheet PickUpSheet={PickUpSheet} />)} />
            <BottomSheet reference={AddNew} BSheight={windowHeight} RenderComp={() => (<AddNewItem AddNew={AddNew} />)} />

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
    TimeSlotStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
    },
    MultiInputSTyle: {
        width: '46%',
        alignSelf: 'flex-start',
        marginRight: '8%',
        textAlign: 'center',
    },
});
