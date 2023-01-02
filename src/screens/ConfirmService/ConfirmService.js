/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native';
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
import AddNewItem from '../ServiceDetails/AddNewItem';
import PickUpBottomSheet from '../ItemDeatil/ItemBottomSheet';
import { SuccessGreen_Icon } from '../../assets/Icons';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../routes/NavigationStrings';
import CTAModal from '../../component/Modal/CTAModal';
import ServiceItemServices from '../../component/Cards/ServiceItemServices';


const ConfirmService = () => {

    const [ServiceType, setServiceType] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [startDate, setStartDate] = useState();
    const [isTimePickerFirst, setTimePickerFirst] = useState(false);
    const [FirstTimeSlot, setFirstTimeSlot] = useState();
    const [isTimePickerSecond, setTimePickerSecond] = useState(false);
    const [SecondTimeSlot, setSecondTimeSlot] = useState();
    const [isTimePickerExpiry, setTimePickerExpiry] = useState(false);
    const [ExpiryTimeSlot, setExpiryTimeSlot] = useState();

    const navigation = useNavigation()
    const PickUpSheet = useRef();
    const AddNew = useRef();

    const ChatData = {
        HeaderTitile: 'Confirm Service Details',
    };

    const PopUpData = {
        Icon: SuccessGreen_Icon, PopUpTittle: 'Service details Quotation iD HCI1234- QTN generated successfully!', FirstCTA: 'Back to Inquiry', SecondCTA: 'View Services', FirstFunction: () => { navigation.navigate(NavigationStrings.CHAT_SCREEN) }, SecondFunction: () => { navigation.navigate(NavigationStrings.SERVICES_SCREEN) }
    };



    const DropDownData = [
        { ItemName: 'Bags' },
        { ItemName: 'Shoes' },
        { ItemName: 'Cars' },
        { ItemName: 'Spaces' },
        { ItemName: 'Bespoke' },
        { ItemName: 'Honest Packages' },
    ];


    const StaticData = {
        ServiceType: 'In House', PickupDate: '16/09/2022', PickupTimeSlotFirst: '09:00-02:00 Pm', PickupTimeSlotSecond: '01:00-06:00 pm',
        SpecialReuestBy: 'Loreum ispum is dummy text. Loreum ispum is dummy text', PickupAddress: '510, Kampong Bahru Rd, Street 123,Singapore 456589', ExpiryData: '27/09/2022',
        ItemsData: {}
    }



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



    const RenderFourthSection = () => {
        return (
            <>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Subtotal</Text>
                    <Text style={styles.InvoiceCardRightText} >S$ 200.00</Text>
                </View>
                <View style={styles.TextView} >
                    <View style={styles.viewWithPercent} >
                        <Text style={styles.InvoiceCardLeftFourText} >Discount</Text>
                        <Text style={styles.PercentStyle} >10%</Text>
                    </View>
                    <Text style={styles.InvoiceCardRightText} >S$10.00</Text>
                </View>

                <View style={styles.DashLineStyle} />
                <View style={styles.TextViewNet} >
                    <Text style={styles.NetTest} >Net Total</Text>
                    <Text style={styles.NetTestRight} >S$ 200.00</Text>
                </View>
            </>
        );
    };



    return (
        <View style={styles.ServiceDetailsWrapper} >
            <CommonHeader data={ChatData} />
            <FlatList
                ListFooterComponent={() => (
                    <>
                        <ScrollView style={styles.FormArea} >
                            <DropDown data={DropDownData} Value={'Bags'} stateFunction={setServiceType} InputHeader={'Service Type'} mandatory={true} PalceHolder={'Select'} />
                            <FormInput
                                value={StaticData.PickupDate}
                                editable={false} iconType="calendar" mandatory={true} dataPickerFunction={showStartDatePicker} changedText={text => setStartDate(text)} InputSubject="Pickup Date" PalceHolder={'DD/MM/YYYY'}
                                autoCapitalize="none" autoCorrect={false} userHeight={50} fontsize={16} >{startDate}</FormInput>
                            <Text style={styles.TextStyle} >Pickup Time Slot <Text style={styles.AstrikTextStyle} >*</Text></Text>
                            <View style={styles.TimeSlotStyle} >
                                <FormInput
                                    value={StaticData.PickupTimeSlotFirst}
                                    editable={false} dataPickerFunction={showPickUpTimeFirst} changedText={text => setFirstTimeSlot(text)} PalceHolder={'09:00-02:00 Pm'}
                                    autoCapitalize="none" autoCorrect={false} userHeight={50} fontsize={16} style={styles.MultiInputSTyle} >{FirstTimeSlot}</FormInput>
                                <FormInput
                                    value={StaticData.PickupTimeSlotSecond}
                                    editable={false} dataPickerFunction={showPickUpTimeSecond} changedText={text => setSecondTimeSlot(text)} PalceHolder={'09:00-02:00 Pm'}
                                    autoCapitalize="none" autoCorrect={false} userHeight={50} fontsize={16} style={styles.MultiInputSTyle} >{SecondTimeSlot}</FormInput>
                            </View>
                            <CommonInputRemark value={StaticData.SpecialReuestBy} InputHeader={'Special Request By Customer'} PalceHolder={'Type here'} numberOfLine={5} />
                            <CommonInputRemark value={StaticData.PickupAddress} InputHeader={'Pickup Address'} PalceHolder={'Type here'} mandatory={true} numberOfLine={4} editable={false} RunFunction={() => { PickUpSheet.current.open(); }} />
                            <FormInput
                                value={StaticData.ExpiryData}
                                editable={false} iconType="calendar" mandatory={true} dataPickerFunction={showPickUpTimeExpiry} changedText={text => setExpiryTimeSlot(text)} InputSubject="Expiry Date" PalceHolder={'DD/MM/YYYY'}
                                autoCapitalize="none" autoCorrect={false} userHeight={50} fontsize={16} >{ExpiryTimeSlot}</FormInput>
                            <View>
                                <Text style={styles.TextStyle} >Items & Services <Text style={styles.AstrikTextStyle} >*</Text></Text>
                                <View style={styles.GifArea} >
                                    <ServiceItemServices />
                                    <Pressable style={styles.AddTextStyle} onPress={() => { AddNew.current.open(); }} >
                                        <Text style={styles.AddItemText} >+Add New Item & Services</Text>
                                    </Pressable>
                                </View>
                            </View>

                            <RenderFourthSection />
                            <CTAModal data={PopUpData}
                                RenderComp={(props) => {
                                    return (
                                        <>
                                            <View style={styles.ButtonCTA} >
                                                <FormButton buttonTitle="Save" onPress={() => props?.setModalVisible(!props?.modalVisible)} style={styles.ButtonStyle} />
                                            </View>
                                        </>);
                                }}
                            />
                        </ScrollView>
                    </>
                )}
                contentContainerStyle={styles.flatlistStyle} 
                // style={styles.flatlistStyle}
                showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />

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

export default ConfirmService;


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
    AddTextStyle: {
        marginVertical: 10,
    },
    GifArea: {
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
        borderRadius: 10,
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
    ButtonCTA: {
        // marginBottom: 10,
        marginBottom: 50,
        // backgroundColor: 'red',
        // alignItems: 'center',
    },



    //FourSection
    TextView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        // paddingVertical: 2,
    },
    InvoiceCardLeftText: {
        // backgroundColor: 'pink',
        color: colors.CaptionGrey,
        fontSize: 12,
        lineHeight: 21,
        fontFamily: fonts.PoppinsBold,
        width: '45%',
        height: '100%',
        opacity: 0.3,
    },
    viewWithPercent: {
        // backgroundColor: 'red',
        width: '45%',
        flexDirection: 'row',
    },
    DashLineStyle: {
        // backgroundColor: 'red',
        borderWidth: 0.40,
        width: '100%',
        alignSelf: 'center',
        borderStyle: 'dotted',
        borderColor: colors.justLineUserAccountColor,
        marginTop: 10,
    },
    LineStyle: {
        // backgroundColor: 'red',
        borderWidth: windowHeight / 1500,
        width: '90%',
        alignSelf: 'center',
        borderColor: colors.justLineUserAccountColor,
    },
    NetTest: {
        color: colors.WelcomeCardText,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: fonts.PoppinsBold,
        height: '100%',
    },
    NetTestRight: {
        color: colors.WelcomeCardText,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: fonts.PoppinsBold,
        height: '100%',
    },
    TextViewNet: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: 15,
        // paddingVertical: 2,
    },
    InvoiceCardRightText: {
        // backgroundColor: 'beige',
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        width: '45%',
        textAlign: 'right',
        height: '100%',
    },
    PercentStyle: {
        color: colors.WelcomeCardText,
        fontSize: 10,
        backgroundColor: colors.AnotherSecondaryColor,
        lineHeight: 12,
        fontFamily: fonts.PoppinsMedium,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 2.5,
        borderRadius: 2,
        marginLeft: 5,
        paddingVertical: 1,
    },
    InvoiceCardLeftFourText: {
        color: colors.CaptionGrey,
        fontSize: 12,
        lineHeight: 21,
        fontFamily: fonts.PoppinsBold,
        height: '100%',
        opacity: 0.3,
    },
});
