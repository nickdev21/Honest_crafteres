/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ImageBackground, FlatList, Animated, Pressable } from 'react-native';
import React, { useRef } from 'react';
import HomeHeader from '../../component/Headers/HomeHeader';
import { colors } from '../../assets/colors';
import { windowWidth } from '../../utils/Dimension';
import Images from '../../assets/Images';
import fonts from '../../assets/fonts';
import HomeTile from './HomeTile';
import { Assign_Icon, Calander_Icon, Customer_Icon, Delivery_Icon, INQ_Icon, Inspection_Icon, Invoices_Icon, Profile_Icon, QC_Icon, Speaker_Icon } from '../../assets/Icons';
import NavigationStrings from '../../routes/NavigationStrings';

const SOCHome = () => {


    const cardArray = [{ id: '0', number: '105', title: 'Items in waiting for parts', progress: '', image: Images.DicePNG },
    { id: '1', number: 105, title: 'Inquiries', progress: '', image: Images.inquiPNG },
    { id: '2', number: 26, title: 'Assessment Items', progress: '', image: Images.mailPNG },
    { id: '3', number: 10, title: 'Items for QC-ed', progress: '', image: Images.QcEDPNG },
    { id: '4', number: `$${100}`, title: 'Payments', progress: '', image: Images.paymentPNG },
    { id: '5', number: 15, title: 'Pending Payments', progress: '', image: Images.PendingpaymentPNG },
    ];

    const TileArray = [{ id: '0', SubTitle: 'View inquiries assigned to you.', title: 'Inquiry', Icon: INQ_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
    { id: '1', SubTitle: 'Manage customer accounts', title: 'Customer Accounts', Icon: Customer_Icon, SCREEN_NAME: NavigationStrings.CUSTOMER_ACCOUNT_SCREEN },
    { id: '2', SubTitle: 'View item invoices details ', title: 'Invoices', Icon: Invoices_Icon, SCREEN_NAME: NavigationStrings.INVOICES_LIST },
    { id: '4', SubTitle: 'View Inspection Items', title: 'Items For Assessment', Icon: Inspection_Icon, SCREEN_NAME: NavigationStrings.ASSESMENT_ITEMS },
    { id: '3', SubTitle: 'Assign orders for services', title: 'Assign Services', Icon: Assign_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
    { id: '5', SubTitle: 'View item qc check', title: 'Items For QC', Icon: QC_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
    { id: '6', SubTitle: 'Request items for delivery from logistics team', title: 'Request Delivery', Icon: Delivery_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
    { id: '7', SubTitle: 'Update your profile details', title: 'Profile', Icon: Profile_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
    { id: '8', SubTitle: 'Latest announcement from HC', title: 'Announcements', Icon: Speaker_Icon, SCREEN_NAME: NavigationStrings.INQUIRY_SCREEN },
    ];



    const RequestCards = ({ item, index }) => (

        <ImageBackground style={[styles.ImagBackStyle]} source={item?.image} borderRadius={20} >
            <View style={styles.TextView} >
                <Text style={styles.HeadingText} >{item.title}</Text>
                <Text style={styles.HeadingTextNumber} >{item.number}</Text>
            </View>
        </ImageBackground>
    );

    const RenderTile = ({ item, index }) => {
        let data = { item: item, index: index };
        return (
            <View style={styles.TileWraper} >
                <HomeTile data={data} />
            </View>
        );
    };

    //ANIMATION 

    const scrollY = useRef(new Animated.Value(0)).current;

    // const HeightShring = scrollY.interpolate({
    //     inputRange: [100 - 1, 100, 100 + 1],
    //     outputRange: [-200, 100, 80],
    // })

    Animated.timing(                    // Animate over time
        scrollY,             // The animated value to drive, this would be a new Animated.Value(0) object.
        {
            toValue: 100,                   // Animate the value
            duration: 1000,                 // Make it take a while
            useNativeDriver: false,
        }
    ).start();

    const ViewScaleValue = scrollY.interpolate({
        inputRange: [0, 25, 50, 75, 100],
        outputRange: [0, 0.5, 0.75, 0.9, 1],
        extrapolate: 'clamp',
    });


    const HeightShring = scrollY.interpolate({
        inputRange: [50, 500],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.HomeWrapper} >
            <HomeHeader />
            <View>
                <View style={styles.UpperArea} >
                    <Animated.View style={[styles.BrownArea, {
                        transform: [{ scale: ViewScaleValue }],
                    }]} />
                    <View style={styles.UpContentArea} >
                        <View style={styles.NameGreetStyle} >
                            <Text style={styles.GreetText}>Good Morning!</Text>
                            <Text style={styles.NameText}>John smith.</Text>
                        </View>
                        <View style={styles.CardStyling} >
                            <FlatList horizontal data={cardArray} renderItem={RequestCards} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />

                        </View>
                    </View>
                </View>
                <View style={styles.ScrollArea} >
                    {/* <HomeTile /> */}
                    <FlatList contentContainerStyle={styles.FlatListStyles} data={TileArray} renderItem={RenderTile} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
                </View>
            </View>
        </View>
    );
};

export default SOCHome;




const styles = StyleSheet.create({
    HomeWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    UpperArea: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '30%',
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '70%',
    },
    UpContentArea: {
        // backgroundColor: 'skyblue',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    NameGreetStyle: {
        // backgroundColor: 'yellow',
        width: '40%',
        height: '40%',
        paddingHorizontal: '5%',
        paddingTop: 10,
    },
    CardStyling: {
        // backgroundColor: 'green',
        width: '100%',
        height: '60%',
    },
    GreetText: {
        fontFamily: fonts.PoppinsRegular,
        color: colors.whiteColor,
        fontSize: 12,
    },
    NameText: {
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.whiteColor,
        fontSize: 18,
    },
    ImagBackStyle: {
        width: windowWidth / 3,
        height: windowWidth / 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    TextView: {
        // backgroundColor: 'red',
        height: '60%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    HeadingText: {
        // backgroundColor: 'pink',
        width: '90%',
        height: 'auto',
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.whiteColor,
        fontSize: 12,
        paddingTop: 5,
        textAlign: 'center',
    },
    HeadingTextNumber: {
        // backgroundColor: 'green',
        width: '80%',
        // height: '60%',
        fontFamily: fonts.PoppinsBold,
        color: colors.whiteColor,
        fontSize: 28,
        paddingTop: 5,
        textAlign: 'center',
    },
    ScrollArea: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    FlatListStyles: {
        paddingBottom: 100,
    },
    TileWraper: {
        flex: 1,
        // backgroundColor: 'skyblue',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

});
