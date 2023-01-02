/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import React from 'react';
import { ClosePopUp_Icon } from '../../assets/Icons';
import { windowHeight } from '../../utils/Dimension';
import CommonInput from '../../component/Input/CommonInput';
import FormButton from '../../component/FormButton';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import Images from '../../assets/Images';

const ItemBottomSheet = (props) => {

    const { PickUpSheet } = props;

    return (
        <>
            <View style={styles.BottomSheetWrapper} >
                <View style={styles.FirstAreaIcon} >
                    <Pressable
                        onPress={() => PickUpSheet.current.close()}
                        style={styles.CloseIconBS} >
                        <ClosePopUp_Icon width={'10%'} height={windowHeight / 30} />
                    </Pressable>
                </View>
                <ScrollView style={styles.FormArea} showsVerticalScrollIndicator={false} >
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Item Id</Text>
                        <Text style={styles.InvoiceCode} >HCI1234-ORD-(1-1)</Text>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Item Type</Text>
                        <Text style={styles.InvoiceCode} >Bag</Text>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Item Name</Text>
                        <Text style={styles.InvoiceCode} >XYZ Hand Bag</Text>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Brand</Text>
                        <Text style={styles.InvoiceCode} >XYZ</Text>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Colour</Text>
                        <Text style={styles.InvoiceCode} >Brown</Text>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Qty</Text>
                        <Text style={styles.InvoiceCode} >1</Text>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Service Type</Text>
                        <Text style={styles.InvoiceCode} >Deep Cleaning</Text>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Services</Text>
                        <Text style={styles.InvoiceCode} >Loreum ispum is dummy text. Loreum
                            ispum is dummy text.Loreum ispum is dummy text. Loreum ispum is dummy text</Text>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Price</Text>
                        <Text style={styles.InvoiceCode} >S$100</Text>
                    </View>
                    <View style={styles.TwoView} >
                        <View style={styles.TextViewRow} >
                            <Text style={styles.TextStyle} >Discount Type</Text>
                            <Text style={styles.InvoiceCode} >5%</Text>
                        </View>
                        <View style={styles.TextViewRow} >
                            <Text style={styles.TextStyle} >Discount Type</Text>
                            <Text style={styles.InvoiceCode} >5%</Text>
                        </View>
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.TextStyle} >Net Total</Text>
                        <Text style={styles.InvoiceCode} >S$95</Text>
                    </View>
                    <View style={styles.TextViewLast} >
                        <Text style={styles.TextStyle} > Images</Text>
                        <View style={styles.ImageView} >
                            <Image source={Images.PurseImage} style={styles.ImageStyle} />
                            <Image source={Images.PurseImage} style={styles.ImageStyle} />
                        </View>
                    </View>
                </ScrollView>
            </View>

        </>
    );
};

export default ItemBottomSheet;


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
        height: '5%',
        // justifyContent: 'space-around',
        justifyContent: 'center',
        paddingTop: 10,
        alignItems: 'center',
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
        paddingBottom: 10,
    },
    ButtonCTA: {
        // backgroundColor: 'pink',
        height: '15%',
        width: '100%',
    },
    TextView: {
        marginBottom: 10,
    },
    TextViewRow: {
        // backgroundColor: 'pink',
        width: '50%',
        marginBottom: 10,
    },
    TextStyle: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        paddingVertical: 5,
    },
    InvoiceCode: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        paddingVertical: 10,
    },
    TextViewLast: {
        marginBottom: 50,
    },
    TwoView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ImageView: {
        // backgroundColor: 'red',
        minHeight: windowHeight / 4,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 5,
        marginVertical: 10,
    },
    ImageStyle: {
        height: windowHeight / 10,
        width: '20%',
        marginRight: 20,
        borderRadius: 10,
    },
});
