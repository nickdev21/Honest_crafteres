/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { Attachment_Icon, BagInq_Icon, CalanderItem_Icon, CustomerDetail_Icon, DownArrow_Icon, HomeInq_Icon, ItemDetail_Icon, ItemStatus_Icon, ItemUser_Icon, MoverIcon_Icon, QRCode_Icon } from '../../assets/Icons';
import fonts from '../../assets/fonts';
import ItemTile from '../../component/Cards/ItemTile';
import Images from '../../assets/Images';
import RenderTimeLine from '../../component/RenderTimeLine';
import CustomerDetail from './CustomerDetail';
import ItemD from './Item';
import Attachment from './Attachments';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../routes/NavigationStrings';
import PickUp from './PickUp';

const ItemDetail = () => {
    const ItemDetailsHeaderData = {
        HeaderTitile: 'Item Details',
    };

    const navigation = useNavigation()


    const TileData = [
        { TileTittle: 'Pickup Handover', TileIcon: MoverIcon_Icon, TileDiscription: 'View Item Pickup Handover Details', TileColor: colors.TimeLineEighteenColor, RenderTilesComp: <PickUp /> },
        { TileTittle: 'Item Status', TileIcon: ItemStatus_Icon, TileDiscription: 'Track Item status', TileColor: colors.ItemTileFirstColor, RenderTilesComp: <RenderTimeLine /> },
        { TileTittle: 'Customer Details', TileIcon: CustomerDetail_Icon, TileDiscription: 'View customer details', TileColor: colors.ItemTileSecondColor, RenderTilesComp: <CustomerDetail /> },
        { TileTittle: 'Item Details', TileIcon: ItemDetail_Icon, TileDiscription: 'View item details', TileColor: colors.ItemTileThirdColor, RenderTilesComp: <ItemD /> },
        { TileTittle: 'Attachments', TileIcon: Attachment_Icon, TileDiscription: 'View item images ', TileColor: colors.ItemTileFourthColor, RenderTilesComp: <Attachment /> },
    ];

    const RenderTile = ({ item }) => {
        return (
            <>
                <ItemTile Data={item} RenderComponent={() => (item.RenderTilesComp)} />
            </>
        );
    };

    return (
        <View style={styles.ItemDetailWrapper} >
            <CommonHeader data={ItemDetailsHeaderData} />
            <FlatList ListFooterComponent={() => {
                return (
                    <>
                        <ScrollView>
                            <View style={styles.ItemDetailWrap} >
                                <View style={styles.FirstPartWrap} >
                                    <View style={styles.ImageArea} >
                                        <Image source={Images.PurseImage} style={styles.ImageStyle} />
                                    </View>
                                    <View style={styles.ItemDetailArea} >
                                        <View style={styles.ItemDetailAreaFirst} >
                                            <View style={styles.ItemMainText} >
                                                <Text style={styles.ItemCode} >HCI1234-ORD-(1-1)</Text>
                                                <Text style={styles.ItemName} >XYZ Hand Bag</Text>
                                                <Text style={styles.ItemQty} >1 set</Text>
                                            </View>
                                            <View style={styles.ItemAmountText} >
                                                <HomeInq_Icon width={windowWidth / 15} height={'50%'} />
                                                <Text style={styles.InvoiceAmountText} >SGD 102.23</Text>
                                            </View>
                                        </View>
                                        <View style={styles.ItemDetailAreaSecond} >
                                            <BagInq_Icon width={windowWidth / 15} height={windowHeight / 30} />
                                            <View style={styles.PendingText} >
                                                <Text style={styles.PendingTextStyles} >Pending Collection</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.DashLineStyle} />
                                <View style={styles.SecondPartWrap} >
                                    <View style={styles.FirstLine} >
                                        <ItemUser_Icon width={windowWidth / 15} height={windowHeight / 40} />
                                        <View>
                                            <Text style={styles.TextName} >John Smith | Invoice Id: <Text style={styles.TextNameBold} >HCI1234-INV</Text> </Text>
                                        </View>
                                    </View>
                                    <View style={styles.SecondLine} >
                                        <View style={styles.IconTextArea} >
                                            <CalanderItem_Icon width={windowWidth / 15} height={windowHeight / 40} />
                                            <Text style={styles.TextName} >Service Date:<Text style={styles.TextNameBold} > N/A</Text></Text>
                                        </View>
                                        <Pressable style={styles.QrView} onPress={() => { navigation.navigate(NavigationStrings.QR_CODE_SCREEN) }} >
                                            <QRCode_Icon width={'100%'} height={windowHeight / 20} />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <FlatList style={styles.FlatListStyles} data={TileData} renderItem={RenderTile} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
                        </ScrollView>
                    </>
                );
            }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
        </View>
    );
};

export default ItemDetail;


const styles = StyleSheet.create({
    ItemDetailWrapper: {
        flex: 1,
        backgroundColor: colors.AnotherBackColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
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
        backgroundColor: colors.PendingColor,
        paddingHorizontal: 15,
        // marginHorizontal: 5,
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
});
