/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ClosePopUp_Icon, Gallery_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import CommonInput from '../../component/Input/CommonInput';
import FormButton from '../../component/FormButton';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import DropDown from '../../component/DropDowns/DropDown';
import CommonInputRemark from '../../component/Input/CommonInputRemark';
import InputNumber from '../../component/Input/InputNumber';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../routes/NavigationStrings';

const AddNewItem = (props) => {

    const [ItemType, setItemType] = useState();
    const [ServiceCat, setServiceCat] = useState();
    const [Price, setPrice] = useState(0);

    const { AddNew } = props;

    const navigation = useNavigation()

    const DropDownData = [
        { ItemName: 'Bags' },
        { ItemName: 'Shoes' },
        { ItemName: 'Cars' },
        { ItemName: 'Spaces' },
        { ItemName: 'Bespoke' },
        { ItemName: 'Honest Packages' },
    ];

    return (
        <>
            <ScrollView style={styles.BottomSheetWrapper} >
                <View style={styles.FirstAreaIcon} >
                    <Pressable
                        onPress={() => AddNew.current.close()}
                        style={styles.CloseIconBS} >
                        <ClosePopUp_Icon width={'10%'} height={windowHeight / 30} />
                    </Pressable>
                </View>
                <View style={styles.FormArea} >
                    <Text style={styles.TextStyle} >Item ID</Text>
                    <Text style={styles.InvoiceCode} >HCI1234-ORD-(1-1)</Text>
                    <DropDown data={DropDownData} Value={'Bags'} stateFunction={setItemType} InputHeader={'Item Type'} mandatory={true} PalceHolder={'Item Type'} />
                    <CommonInput InputHeader={'Item Type'} PalceHolder={'Item Type'} mandatory={true} />
                    <CommonInput InputHeader={'Item Name*'} PalceHolder={'Item Name*'} mandatory={true} />
                    <CommonInput InputHeader={'Brand'} PalceHolder={'Item Brand'} mandatory={true} />
                    <CommonInput InputHeader={'Colour'} PalceHolder={'Item Colour'} mandatory={true} />
                    <CommonInput InputHeader={'Qty'} PalceHolder={'Qty'} mandatory={true} />
                    <DropDown data={DropDownData} Value={'Bags'} stateFunction={setServiceCat} InputHeader={'Service Category'} mandatory={true} PalceHolder={'Service Type'} />
                    <CommonInputRemark InputHeader={'Services'} PalceHolder={'Type Here'} mandatory={true} numberOfLine={8} />
                    <InputNumber InputHeader={'Price'} PalceHolder={'100.00'} mandatory={true} changedText={setPrice} StateValue={Price} />
                    <Text>{Price}</Text>
                    <View style={styles.TwoInputStyle} >
                        <InputNumber InputHeader={'Discount Type'} PalceHolder={'Percentage'} mandatory={true} changedText={setPrice} StateValue={Price} style={styles.MultiInputSTyle} />
                        <InputNumber InputHeader={'Discount Value'} PalceHolder={'0'} mandatory={true} changedText={setPrice} StateValue={Price} style={styles.MultiInputSTyle} />
                    </View>
                    <CommonInput InputHeader={'Net Total'} PalceHolder={'0'} />
                    <Text style={styles.ImageTextStyle} >Add Images</Text>
                    <View style={styles.AddImageView} >
                        <Gallery_Icon width={'12%'} height={'75%'} />
                        <Text style={styles.AddIMagesText} >Add Images</Text>
                    </View>
                </View>
                <View style={styles.ButtonCTA} >
                    <FormButton buttonTitle="Save" onPress={() => { navigation.navigate(NavigationStrings.CONFIRM_SERVICES) }} style={styles.ButtonStyle} />
                </View>
            </ScrollView>

        </>
    );
};

export default AddNewItem;


const styles = StyleSheet.create({
    BottomSheetWrapper: {
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // height: '5%',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    FirstAreaIcon: {
        // backgroundColor: 'red',
        // justifyContent: 'space-around',
        justifyContent: 'center',
        paddingTop: 10,
        alignItems: 'center',
        height: windowHeight / 15,
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
    FormArea: {
        // backgroundColor: 'yellow',
        // height: '80%',
        width: '100%',
    },
    ButtonCTA: {
        // backgroundColor: 'pink',
        // height: '15%',
        width: '100%',
        marginBottom: 20,
    },
    TextStyle: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        // paddingVertical: 5,
    },
    ImageTextStyle: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        fontFamily: fonts.PoppinsSemiBold,
        paddingVertical: 10,
    },
    InvoiceCode: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        paddingVertical: 10,
    },
    TwoInputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    MultiInputSTyle: {
        width: '46%',
        alignSelf: 'flex-start',
        marginRight: '8%',
        textAlign: 'center',
    },
    AddImageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight / 14,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1.3,
        borderColor: colors.AnotherSecondaryColor,
        borderStyle: 'dashed',
        marginBottom: 30,
    },
    AddIMagesText: {
        color: colors.AnotherSecondaryColor,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.PoppinsSemiBold,
    },
});
