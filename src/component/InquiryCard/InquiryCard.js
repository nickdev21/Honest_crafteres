/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { windowHeight } from '../../utils/Dimension';
import Images from '../../assets/Images';
import { BagInq_Icon, HomeInq_Icon, MobileIn_Icon, ShoeInq_Icon } from '../../assets/Icons';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';

const InquiryCard = ({ data }) => {
    const { item, index } = data;
    return (
        <View style={styles.InqWcardWrapper} >
            <View style={styles.upperWrapper} >
                <View style={styles.profileArea} >
                    <View style={styles.ImageSTyle} >
                        <Image source={Images.TempUser} style={styles.UserImageStyle} />
                    </View>
                </View>
                <View style={styles.NameData} >
                    <View style={styles.NameDetailStyleText} >
                        <Text style={styles.nameText} >{item?.name}</Text>
                        <Text style={styles.DetailText} >Loreum ipsum is dummy text...</Text>
                    </View>
                    <View style={styles.InquiryStyle} >
                        <Text style={styles.textInquiry} >#123 General Inquiry</Text>
                    </View>
                </View>
                <View style={styles.TimeContact} >
                    <Text style={styles.TimeText} >10 mins ago</Text>
                    <View style={styles.SocialSTyle} >
                        <View style={styles.mobileStyle}  >
                            <Image source={Images.TempUser} style={styles.mobileSideuser} />
                        </View>
                        <View style={styles.mobileStyle}  >
                            <item.Icon width={'70%'} height={'70%'} />
                        </View>
                    </View>
                </View>
            </View>
            {true ?
                <View style={styles.DownWrapper} >
                    <View style={styles.EmptyView} />
                    <View style={styles.wrapTwoView}>
                        <View style={styles.JustLine}>
                            <View style={styles.JustLineMain} />
                        </View>
                        <View style={styles.IconView} >
                            <HomeInq_Icon width={'33%'} height={'50%'} />
                            <ShoeInq_Icon width={'33%'} height={'50%'} />
                            <BagInq_Icon width={'33%'} height={'50%'} />
                        </View>
                        <View style={styles.AmountView} >
                            <Text style={styles.AmountText} >SGD 102.23</Text>
                        </View>
                    </View>
                </View>
                : null
            }
        </View>
    );
};

export default InquiryCard;


const styles = StyleSheet.create({
    InqWcardWrapper: {
        backgroundColor: colors.whiteColor,
        // backgroundColor: 'red',
        height: windowHeight / 4.8,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 0.10,
        paddingTop: 5,

    },
    upperWrapper: {
        // backgroundColor: 'red',
        height: '60%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    DownWrapper: {
        // backgroundColor: 'green',
        height: '40%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    profileArea: {
        // backgroundColor: 'purple',
        height: '100%',
        width: '15%',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '2%',
    },
    NameData: {
        // backgroundColor: 'pink',
        paddingTop: 5,
        height: '100%',
        width: '60%',
        alignSelf: 'center',
    },
    TimeContact: {
        // backgroundColor: 'beige',
        height: '100%',
        width: '25%',
        alignSelf: 'center',
        justifyContent: 'space-around',
    },
    SocialSTyle: {
        // backgroundColor: 'skyblue',
        height: '40%',
        width: '80%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    mobileSideuser: {
        height: windowHeight / 30,
        width: windowHeight / 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    mobileStyle: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    EmptyView: {
        // backgroundColor: 'skyblue',
        height: '100%',
        width: '15%',
        alignSelf: 'center',
    },
    wrapTwoView: {
        // backgroundColor: 'skyblue',
        height: '100%',
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    JustLine: {
        height: '2%',
        top: '5%',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        // alignItems: 'center',
        // alignSelf: 'center',
        position: 'absolute',
    },
    JustLineMain: {
        backgroundColor: colors.justLineColor,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    IconView: {
        // backgroundColor: 'red',
        height: '100%',
        width: '60%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    AmountView: {
        // backgroundColor: 'yellow',
        paddingTop: 5,
        height: '100%',
        width: '40%',
        // alignSelf: 'center',
        paddingHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    AmountText: {
        // backgroundColor: 'pink',
        width: '100%',
        alignSelf: 'center',
        textAlign: 'right',
        height: '50%',
        color: colors.AnotherSecondaryColor,
        fontSize: 16,
        // lineHeight: 24,
        fontFamily: fonts.PoppinsHeavy,

    },
    nameText: {
        height: '50%',
        color: colors.WelcomeCardText,
        fontSize: 14,
        lineHeight: 18,
        fontFamily: fonts.PoppinsBold,
    },
    DetailText: {
        height: '50%',
        color: colors.CaptionGrey,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: fonts.PoppinsMedium,
    },
    TimeText: {
        color: colors.lowerGrey,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: fonts.PoppinsRegular,
    },
    textInquiry: {
        color: colors.lowerGrey,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: fonts.PoppinsSemiBold,
    },
    ImageSTyle: {
        // backgroundColor: 'black',
        height: windowHeight / 20,
        width: windowHeight / 20,
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
    },
    NameDetailStyleText: {
        // backgroundColor: 'red',
        height: '60%',
        width: '100%',
        alignSelf: 'center',
    },
    InquiryStyle: {
        // backgroundColor: 'green',
        height: '40%',
        width: '100%',
        // alignSelf: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
    },
})