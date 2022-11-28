/* eslint-disable prettier/prettier */
import { View, StyleSheet, Animated } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import { windowWidth } from '../../utils/Dimension';
import OnBoardingButon from '../../component/Buttons/OnBoardingButon';
import NavigationStrings from '../../routes/NavigationStrings';

const Paginator = ({ data, scrollX }) => {
    return (
        <View style={styles.PaginatorWrap} >
            <View style={styles.DotView} >

                {data.map((_, i) => {
                    const inputRange = [(i - 1) * windowWidth, i * windowWidth, (i + 1) * windowWidth];

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 30, 10],
                        extrapolate: 'clamp',
                    });
                    return <Animated.View style={[styles.Dot, { width: dotWidth }]} key={i.toString()} />;
                })}
            </View>

            <View style={styles.ButtonView} >
                <OnBoardingButon buttonTittle={'SIGNUP'} SCREEN_NAME={NavigationStrings.LOGIN_SCREEN} />
                <OnBoardingButon borderButton={true} buttonTittle={'LOGIN'} SCREEN_NAME={NavigationStrings.LOGIN_SCREEN} />
            </View>

        </View>
    );
};

export default Paginator;


const styles = StyleSheet.create({
    PaginatorWrap: {
        backgroundColor: colors.whiteColor,
        flex: 1,
        // flexDirection: 'row',
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: colors.AnotherSecondaryColor,
        marginHorizontal: 8,
    },
    DotView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonView: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
