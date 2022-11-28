/* eslint-disable prettier/prettier */
import { View, FlatList, StyleSheet, Animated, StatusBar } from 'react-native';
import React, { useState, useRef } from 'react';
import Data from './Data';
import OnboardingItem from './OnboardingItem';
import { colors } from '../../assets/colors';
import Paginator from './Paginator';

const OnBoardingScreen = () => {
    const [currentIndex, setcurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null);
    // const viewableItemChanged = useRef(({ ViewItem }) => {
    //     ViewItem && setcurrentIndex(ViewItem[0].index);
    // }).current;
    const viewableItemChanged = (({ ViewItem }) => {
        ViewItem && setcurrentIndex(ViewItem[0].index);
    });

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.whiteColor} />
            <View style={styles.OnBoardWrapper} >
                <View style={styles.flexThree} >
                    <FlatList data={Data}
                        renderItem={({ item }) => <OnboardingItem item={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled bounces={false}
                        keyExtractor={(item) => item.id}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                        onViewableItemsChanged={viewableItemChanged}
                        viewabilityConfig={viewConfig}
                        scrollEventThrottle={32}
                        ref={slideRef}
                    />
                </View>
                <Paginator data={Data} scrollX={scrollX} />
            </View>
        </>
    );
};

export default OnBoardingScreen;


const styles = StyleSheet.create({
    OnBoardWrapper: {
        backgroundColor: colors.whiteColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexThree: {
        flex: 3,
    },
    DotAndButton: {
        backgroundColor: 'red',
    },
})