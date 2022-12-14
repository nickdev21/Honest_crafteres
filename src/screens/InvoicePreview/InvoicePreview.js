/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import Images from '../../assets/Images';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import fonts from '../../assets/fonts';
import VacantButton from '../../component/Buttons/VacantButton';
import FormButton from '../../component/FormButton';
import NavigationStrings from '../../routes/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import { FULL_HC_ICON_Icon, PayPal_Icon } from '../../assets/Icons';

const InvoicePreview = () => {

    const navigation = useNavigation()
    const InvoiceHeaderData = {
        HeaderTitile: 'Invoice Preview',
    };



    const ItemStaticData = [
        { id: 1, ItemCode: 'HCI1234-ORD-(1-1)', ProductName: 'XYZ HAND BAG', ServiceName: 'Deep Cleaning', Description: 'Loreum ispum is dummy text... ', Qty: 1, SingleAmount: 100.00, TotalAmount: 100.00 },
        { id: 2, ItemCode: 'HCI1234-ORD-(1-2)', ProductName: 'Sneakers', ServiceName: 'Shoe shine & polish', Description: 'Loreum ispum is dummy text...', Qty: 2, SingleAmount: 75, TotalAmount: 150.00 },
    ];



    const RenderItem = ({ item, index }) => {
        return (
            <>
                <View style={styles.FlatListItemRow} >

                    <View style={styles.ItemRow} >
                        <View style={styles.ProfileImgView} >
                            <View style={styles.ImageSTyle} >
                                <Image source={Images.TempUser} style={styles.UserImageStyle} />
                            </View>
                        </View>
                        <View style={styles.TextDetail} >
                            <Text style={styles.ItemNameTextHeading} >{item?.ItemCode}</Text>
                            <Text style={styles.ProductNameText} >{item?.ProductName}</Text>
                            <Text style={styles.ProductNameText} >{item?.ServiceName}</Text>
                            <Text style={styles.ServiceDesText} >{item?.Description}</Text>
                        </View>
                    </View>

                    <View style={styles.Amount} >
                        <Text style={styles.ItemTextValue} >S${item?.SingleAmount}</Text>
                    </View>
                    <View style={styles.QTYStyle} >
                        <Text style={styles.ItemTextValue} >{item?.Qty}</Text>
                    </View>
                    <View style={styles.SUBTotal} >
                        <Text style={styles.ItemTextValue} >S${item?.TotalAmount}</Text>
                    </View>
                </View>

            </>
        );
    };

    const RenderSecondSection = () => {
        return (
            <>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftTextHead} >Honest Crafters</Text>
                    <Text style={styles.InvoiceCardRightTextHead} >John Smith</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >hcrafters@contact.com</Text>
                    <Text style={styles.InvoiceCardRightText} >HC-123456</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >510, Kampong Bahru
                        Rd, Street 123,Singapore
                        456589</Text>
                    <Text style={styles.InvoiceCardRightText} >Johnsmith@gmail.com
                        1111 ABC Road,XYZ Tower
                        Singapore, 0023</Text>
                </View>
                {/* <View style={styles.JustLine}>
                    <View style={styles.JustLineMain} />
                </View> */}
                {/* <View style={styles.LineStyle} /> */}


            </>
        );
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
                <View style={[styles.LineStyle, { width: '95%' }]} />

            </>
        );
    };


    const RenderFiveSection = () => {
        return (
            <>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Invoice Date</Text>
                    <Text style={styles.InvoiceCardRightText} >S$ 200.00</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Payemt Date</Text>
                    <Text style={styles.InvoiceCardRightText} >19/10/2022</Text>
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Payment Mode</Text>
                    <PayPal_Icon width={'12%'} height={'90%'} />
                </View>
                <View style={styles.TextView} >
                    <Text style={styles.InvoiceCardLeftText} >Payment Status</Text>
                    <Text style={styles.InvoicePaidText} >Paid</Text>
                </View>
            </>
        );
    };






    return (

        <View style={styles.InvoicePreviewWrapper} >
            <CommonHeader data={InvoiceHeaderData} />
            <FlatList
                ListHeaderComponent={<>
                    <ScrollView >
                        <View style={styles.InvoiceDetailCardWrapper} >
                            <ImageBackground imageStyle={styles.ImageRadius} style={styles.UpperCardArea} source={Images.InvoiceGreenBackground} resizeMode="cover"  >
                                <View style={styles.HonestIcon} >
                                    <FULL_HC_ICON_Icon width={'70%'} height={'70%'} />
                                </View>
                                <View style={styles.IconStyle} >
                                    <Image style={styles.imageView} source={Images.InvoiceGif} />
                                </View>
                            </ImageBackground>
                            <View style={styles.DownCardArea} >
                                <View style={styles.InvoiceFirstSection} >
                                    <Text style={styles.ItemNameText} >HCI1234-INV</Text>
                                    {/* <View style={styles.JustLine}>
                                    <View style={styles.JustLineMain} />
                                </View> */}

                                </View>
                                <View style={styles.LineStyle} />
                                <View style={styles.InvoiceSecondSection}  >
                                    <RenderSecondSection />
                                </View>
                                <View style={styles.LineStyle} />
                                <View style={styles.InvoiceThirdSection} >
                                    <View style={styles.InvoiceThirdSectionPart} >
                                        <View style={styles.ItemName} >
                                            <Text style={styles.TextSecondSection} >Items & Services</Text>
                                        </View>
                                        <View style={styles.Amount} >
                                            <Text style={styles.TextSecondSection} >Amount</Text>
                                        </View>
                                        <View style={styles.QTYStyle} >
                                            <Text style={styles.TextSecondSection} >Qty</Text>
                                        </View>
                                        <View style={styles.SUBTotal} >
                                            <Text style={styles.TextSecondSection} >Sub Total</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.InvoiceThirdSection} >
                                    <FlatList data={ItemStaticData} renderItem={RenderItem} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
                                </View>
                                <View style={styles.LineStyle} />
                                <View style={styles.InvoiceFourthSection} >
                                    <RenderFourthSection />
                                </View>
                                <View style={styles.InvoiceFiveSection} >
                                    <RenderFiveSection />
                                </View>
                            </View>


                        </View>
                        <View style={styles.ButtonView} >
                            <VacantButton buttonTittle={'Download'} SCREEN_NAME={NavigationStrings.INVOICE_PREVIEW} />
                            <FormButton buttonTitle="Send Invoice Details" onPress={() => navigation.navigate(NavigationStrings.COLLECT_PAYMENT)} style={styles.ButtonStyle} />
                        </View>
                    </ScrollView>
                </>
                }
                renderItem={() => {
                    return <View />
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.FlatListStyles}
            />

        </View>
    );
};

export default InvoicePreview;


const styles = StyleSheet.create({
    InvoicePreviewWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
    InvoiceDetailCardWrapper: {
        backgroundColor: colors.whiteColor,
        marginVertical: 30,
        borderRadius: 10,
        margin: '4%',
        marginBottom: '5%',
        shadowColor: '#000',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
    },
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    UpperCardArea: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: windowHeight / 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: '2%',
        // paddingVertical: '4%',
    },
    ImageRadius: {
        backgroundColor: 'blue',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    HonestIcon: {
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '50%',
        height: '100%',
    },
    DownCardArea: {
        width: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'space-between',
        paddingVertical: '2%',

        // paddingHorizontal: '2%',
    },
    CardTitle: {
        // backgroundColor: 'black',
        color: colors.whiteColor,
        fontSize: 16,
        paddingLeft: 10,
        // lineHeight: 25,
        fontFamily: fonts.PoppinsBold,
        width: '85%',
        paddingHorizontal: '2%',
        // height: '100%',
    },
    IconStyle: {
        // backgroundColor: 'black',
        // justifyContent: 'center',
        // top: 5,
        right: 10,
        position: 'absolute',
        alignItems: 'flex-end',
        width: '10%',
        height: '100%',
    },
    imageView: {
        width: windowWidth / 10,
        height: windowHeight / 15,
        resizeMode: 'contain',
        opacity: 0.2,
    },
    JustLine: {
        height: windowHeight / 300,
        top: '5%',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 5,
        // alignItems: 'center',
        // alignSelf: 'center',
        // position: 'absolute',
    },
    JustLineMain: {
        backgroundColor: colors.justLineColor,
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    ItemNameText: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        fontFamily: fonts.PoppinsBold,
    },
    TextView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        // paddingVertical: 2,
    },
    InvoiceCardLeftTextHead: {
        // backgroundColor: 'pink',
        color: colors.CaptionGrey,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        width: '45%',
        height: '100%',
    },
    InvoiceCardRightTextHead: {
        // backgroundColor: 'pink',
        color: colors.CaptionGrey,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        width: '45%',
        textAlign: 'right',
        height: '100%',
    },
    InvoiceCardLeftText: {
        // backgroundColor: 'pink',
        color: colors.CaptionGrey,
        fontSize: 12,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        width: '45%',
        height: '100%',
    },
    InvoicePaidText: {
        color: colors.successColor,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsBold,
    },
    InvoiceCardRightText: {
        // backgroundColor: 'beige',
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        width: '45%',
        textAlign: 'right',
        height: '100%',
    },
    InvoiceFirstSection: {
        // backgroundColor: 'yellow',
        margin: 10,
        // height: '10%',
    },
    InvoiceSecondSection: {
        // backgroundColor: 'red',
        // marginVertical: 20,
        marginVertical: 15,
    },
    InvoiceThirdSectionPart: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        // marginVertical: 10,
    },
    InvoiceThirdSection: {
        // backgroundColor: 'pink',
        margin: 10,
        flexDirection: 'row',
        // marginVertical: 10,
    },
    InvoiceFourthSection: {
        margin: 10,
        // backgroundColor: 'beige',
        marginVertical: 15,
    },
    InvoiceFiveSection: {
        margin: 10,
        // backgroundColor: 'blue',
        paddingHorizontal: 5,
        // marginVertical: 10,
    },
    ItemDetail: {
        // backgroundColor: 'beige',
        flexDirection: 'row',
        marginVertical: 10,
    },
    ItemName: {
        marginTop: 10,
        // backgroundColor: 'red',
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: fonts.PoppinsBold,
        width: '45%',
    },
    TextSecondSection: {
        color: colors.SecondSectionColor,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: fonts.PoppinsMedium,
    },
    Amount: {
        marginTop: 10,
        // backgroundColor: 'yellow',
        width: '20%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    QTYStyle: {
        marginTop: 10,
        // backgroundColor: 'pink',
        width: '15%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    SUBTotal: {
        marginTop: 10,
        // backgroundColor: 'skyblue',
        width: '20%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ItemRow: {
        flexDirection: 'row',
        width: '45%',
    },
    ProfileImgView: {
        // backgroundColor: 'beige',
        width: '20%',
    },
    ImageSTyle: {
        // backgroundColor: 'black',
        height: windowHeight / 30,
        width: windowHeight / 30,
        // width: 'auto',
        borderRadius: 100,
        alignSelf: 'center',
    },
    UserImageStyle: {
        // backgroundColor: 'red',
        height: '100%',
        width: '100%',
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 5,
    },
    TextDetail: {
        // backgroundColor: 'skyblue',
        width: '85%',
        paddingVertical: 5,
    },
    ItemNameTextHeading: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fonts.PoppinsBold,
    },
    ProductNameText: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fonts.PoppinsSemiBold,
    },
    DescriptionNameText: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 19,
        fontFamily: fonts.PoppinsLight,
    },
    ItemTextValue: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 19,
        fontFamily: fonts.PoppinsMedium,
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
    viewWithPercent: {
        // backgroundColor: 'red',
        width: '45%',
        flexDirection: 'row',
    },
    FlatListItemRow: {
        flexDirection: 'row',
        // backgroundColor: 'red',
    },
    InvoiceCardLeftFourText: {
        color: colors.CaptionGrey,
        fontSize: 12,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        height: '100%',
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
    DashLineStyle: {
        // backgroundColor: 'red',
        borderWidth: 0.25,
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
    TextViewNet: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: 15,
        // paddingVertical: 2,
    },
    ButtonView: {
        marginBottom: 20,
    },
    ButtonStyle: {
        width: '95%',
        alignSelf: 'center',
    },
});
