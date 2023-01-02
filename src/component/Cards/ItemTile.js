/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { DownArrow_Icon, ItemStatus_Icon } from '../../assets/Icons';
import RenderTimeLine from '../RenderTimeLine';

const ItemTile = (props) => {

    const [Expand, setExpand] = useState(false);
    const translateX = useRef(new Animated.Value(0)).current;


    const { Data } = props;


    // Animation;

    const interpolateRotating = translateX.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const animate = () => {
        Animated.spring(translateX, {
            toValue: Expand ? 0 : 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        setExpand(!Expand);
    };

    return (
        // <Pressable onPress={() => { handleAnimation(); setExpand(!Expand); console.log(!Expand, 'VAL') }} style={styles.TileWrap} >
        <Pressable onPress={() => { animate(); setExpand(!Expand); }} style={styles.TileWrap} >
            <View style={styles.TileWrapView} >
                <View style={styles.ImageWrap} >
                    <View style={[styles.ImageArea, { backgroundColor: Data.TileColor }]} >
                        <Data.TileIcon width={windowWidth / 10} height={windowHeight / 15} />
                    </View>
                </View>
                <View style={styles.TitleWrap} >
                    <Text style={styles.ItemText} >{Data?.TileTittle}</Text>
                    <Text style={styles.ItemTextDesc} >{Data?.TileDiscription}</Text>
                </View>
                <Animated.View style={[styles.ArrowWrap, {
                    transform: [{ rotate: interpolateRotating }],
                }]} >
                    {/* <View style={styles.ArrowWrap} > */}
                    <DownArrow_Icon width={windowWidth / 20} height={windowHeight / 20} />
                    {/* </View> */}
                </Animated.View>
            </View>
            {
                Expand ?
                    <View style={styles.RenderView} >
                        <View style={styles.DashLineStyle} />
                        <props.RenderComponent />
                    </View>
                    : null
            }
        </Pressable>
    );
};

export default ItemTile;


const styles = StyleSheet.create({

    TileWrap: {
        // backgroundColor: 'yellow',
        backgroundColor: colors.whiteColor,
        width: '90%',
        // height: windowHeight / 10,
        borderRadius: 16,
        marginVertical: 10,
        // paddingVertical: 3,
        alignSelf: 'center',
        shadowColor: colors.ShadowColor,
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
    },
    TileWrapView: {
        // backgroundColor: 'yellow',
        backgroundColor: colors.whiteColor,
        width: '100%',
        height: windowHeight / 10,
        borderRadius: 16,
        marginVertical: 10,
        flexDirection: 'row',
        // paddingVertical: 3,
        alignSelf: 'center',
        // shadowColor: colors.ShadowColor,
        // elevation: 10,
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowRadius: 20,
        // shadowOpacity: 0.25,
    },
    ImageWrap: {
        // backgroundColor: 'pink',
        width: '22%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TitleWrap: {
        // backgroundColor: 'green',
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    ArrowWrap: {
        // backgroundColor: 'red',
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageArea: {
        backgroundColor: '#94A3B8',
        width: '80%',
        height: '80%',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ItemText: {
        color: colors.WelcomeCardText,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.PoppinsBold,
    },
    ItemTextDesc: {
        color: colors.WelcomeCardText,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fonts.PoppinsMedium,
    },
    DashLineStyle: {
        // backgroundColor: 'red',
        borderWidth: 0.75,
        width: '90%',
        alignSelf: 'center',
        borderStyle: 'dashed',
        borderColor: colors.DashTimeLine,
        marginTop: 10,
        marginBottom: 20,
    },
    RenderView: {
        marginBottom: 10,
        marginHorizontal: 5,
    },
});
