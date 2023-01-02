/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors'
import SearchInput from '../../component/Input/SearchInput'
import Images from '../../assets/Images'
import { BagInq_Icon, CalanderItem_Icon, HomeInq_Icon, ItemUser_Icon, NoAssesmentItem_Icon, QRCode_Icon } from '../../assets/Icons'
import { windowHeight, windowWidth } from '../../utils/Dimension'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useNavigation } from '@react-navigation/native'
import fonts from '../../assets/fonts'
import NavigationStrings from '../../routes/NavigationStrings'

const CompletedAssessment = () => {

    const navigation = useNavigation()


    const TileData = [
        { ItemCode: 'HCI1234-ORD-(1-1)', ItemName: 'XYZ Hand Bag', ItemQty: '1 set', ItemAmount: 'SGD 102.23', ItemStatus: 'Assessment Done', CustomerName: 'John Smith', CustomerItemCode: 'HCI1234-INV', ServiceDate: '19/11/2022' },
        { ItemCode: 'HCI1234-ORD-(1-1)', ItemName: 'XYZ Hand Bag', ItemQty: '1 set', ItemAmount: 'SGD 102.23', ItemStatus: 'Assessment Done', CustomerName: 'John Smith', CustomerItemCode: 'HCI1234-INV', ServiceDate: '21/11/2022' },
    ];

    const RenderTile = ({ item, index }) => {
        let data = { item: item, index: index };
        return (
            <View style={styles.ItemDetailWrap} >
                <View style={styles.FirstPartWrap} >
                    <View style={styles.ImageArea} >
                        <Image source={Images.PurseImage} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.ItemDetailArea} >
                        <View style={styles.ItemDetailAreaFirst} >
                            <View style={styles.ItemMainText} >
                                <Text style={styles.ItemCode} >{item?.ItemCode}</Text>
                                <Text style={styles.ItemName} >{item?.ItemName}</Text>
                                <Text style={styles.ItemQty} >{item?.ItemQty}</Text>
                            </View>
                            <View style={styles.ItemAmountText} >
                                <HomeInq_Icon width={windowWidth / 15} height={'50%'} />
                                <Text style={styles.InvoiceAmountText} >{item?.ItemAmount}</Text>
                            </View>
                        </View>
                        <View style={styles.ItemDetailAreaSecond} >
                            <BagInq_Icon width={windowWidth / 15} height={windowHeight / 30} />
                            <View style={styles.PendingText} >
                                <Text style={styles.PendingTextStyles} >{item?.ItemStatus}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.DashLineStyle} />
                <View style={styles.SecondPartWrap} >
                    <View style={styles.FirstLine} >
                        <ItemUser_Icon width={windowWidth / 15} height={windowHeight / 40} />
                        <View>
                            <Text style={styles.TextName} >John Smith | Invoice Id: <Text style={styles.TextNameBold} >{item?.CustomerItemCode}</Text> </Text>
                        </View>
                    </View>
                    <View style={styles.SecondLine} >
                        <View style={styles.IconTextArea} >
                            <CalanderItem_Icon width={windowWidth / 15} height={windowHeight / 40} />
                            <Text style={styles.TextName} >Handover Date:<Text style={styles.TextNameBold} >{item?.ServiceDate}</Text></Text>
                        </View>
                        <Pressable style={styles.QrView} onPress={() => { navigation.navigate(NavigationStrings.QR_CODE_SCREEN) }} >
                            <QRCode_Icon width={'100%'} height={windowHeight / 20} />
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.AssesmentItemsWrapper} >
            <SearchInput style={styles.SearchStyle} />
            {TileData.length === 0 ?
                <View style={styles.NoInvoice} >
                    <NoAssesmentItem_Icon width={'55%'} height={'50%'} />
                    <View style={styles.TextView} >
                        <Text style={styles.TittleIcon} >No Items For Assessment Yet.</Text>
                        <Text style={styles.SubTittle} >Items will sent for assessment once pickup & bring to store.</Text>
                    </View>
                </View>
                :
                <FlatList contentContainerStyle={styles.FlatListStyles} data={TileData} renderItem={RenderTile} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
            }

        </View>
    )
}


export default CompletedAssessment


const styles = StyleSheet.create({
    AssesmentItemsWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    SearchStyle: {
        width: '95%',
    },
    ItemDetailWrap: {
        backgroundColor: colors.whiteColor,
        width: '90%',
        // height: windowHeight / 10,
        borderRadius: 16,
        marginVertical: 20,
        marginTop: 30,
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignSelf: 'center',
        shadowColor: colors.ShadowColor,
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.50,
        // backgroundColor: 'red',
    },
    FirstPartWrap: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        height: windowHeight / 7,
        width: '100%',
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
    PendingText: {
        backgroundColor: colors.AnotherSecondaryColor,
        paddingHorizontal: 15,
        // marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        borderRadius: 100,
    },
    PendingTextStyles: {
        color: colors.whiteColor,
        fontSize: 12,
        fontFamily: fonts.PoppinsBold,
    },
    ImageArea: {
        // backgroundColor: 'red',
        height: '80%',
        width: '30%',
        // width: windowWidth / 4,
        borderRadius: 10,
    },
    ImageStyle: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    ItemDetailArea: {
        // backgroundColor: 'green',
        height: '100%',
        width: '70%',
    },
    ItemDetailAreaFirst: {
        // backgroundColor: 'beige',
        height: '70%',
        width: '100%',
        flexDirection: 'row',
    },
    ItemDetailAreaSecond: {
        // backgroundColor: 'skyblue',
        height: '30%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
    },
    ItemMainText: {
        // backgroundColor: 'yellow',
        height: '100%',
        width: '60%',
        paddingLeft: 5,
    },
    ItemAmountText: {
        // backgroundColor: 'yellow',
        height: '100%',
        width: '40%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    InvoiceAmountText: {
        color: colors.AnotherSecondaryColor,
        fontSize: 16,
        fontFamily: fonts.PoppinsHeavy,
        height: '50%',
    },
    ItemCode: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 2,
        fontFamily: fonts.PoppinsMedium,
    },
    ItemName: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 2,
        fontFamily: fonts.PoppinsSemiBold,
    },
    ItemQty: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 2,
        fontFamily: fonts.PoppinsRegular,
    },
    FirstLine: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    SecondLine: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    IconTextArea: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '70%',
    },
    TextName: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        marginHorizontal: 5,
    },
    TextNameBold: {
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsBold,
        marginHorizontal: 5,
    },
    FlatListStyles: {
        paddingBottom: 100,
    },
    QrView: {
        // backgroundColor: 'red',
        width: '15%',
    },
    NoInvoice: {
        // backgroundColor: 'red',
        width: '100%',
        alignSelf: 'center',
        flex: 1,
        // justifyContent: 'center',
        paddingVertical: '15%',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    TextView: {
        // backgroundColor: 'pink',
        textAlign: 'center',
        width: '80%',
    },
    TittleIcon: {
        fontFamily: fonts.PoppinsBold,
        color: colors.WelcomeCardText,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
        lineHeight: 24,
    },
    SubTittle: {
        fontFamily: fonts.PoppinsMedium,
        color: colors.CaptionGrey,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 21,
    },

});
