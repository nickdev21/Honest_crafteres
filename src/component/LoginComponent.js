/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, StatusBar, ImageBackground, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../assets/colors';
import Images from '../assets/Images';
import { Call_Icon, SALESIcon } from '../assets/Icons';
import { windowHeight, windowWidth } from '../utils/Dimension';
import FormButton from './FormButton';
import fonts from '../assets/fonts';
import OTPInputFeild from './OTPInputFeild';

const LoginComponent = () => {

    const [code, setcode] = useState("")
    const [pinReady, setpinReady] = useState(false)
    const MAX_CODE_LENGTH = 4;

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }} >
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

                <View style={styles.LoginWrapper} >
                    <View style={styles.UpperWrapper} >
                        <View style={styles.EightStyle} >
                            {/* <Image source={Images.loginBackPNG} style={styles.ImageStyle} resizeMode="cover" /> */}
                            <ImageBackground source={Images.loginBackPNG} style={styles.ImageStyle} resizeMode="stretch" />
                        </View>
                        <View style={styles.EmptyView} />
                        <View style={styles.CenterIcon} >
                            {/* <View style={styles.CircleView} /> */}
                            <SALESIcon width={'100%'} height={'70%'} />
                        </View>
                        <Text style={styles.TextStyle}>Sales</Text>
                    </View>
                    <View style={styles.LowerWrapper} >
                        <View style={styles.LowerFirst} >
                            <View style={styles.TextView}>
                                <Text style={styles.loginText}>Login</Text>
                                <Text style={styles.LoginDetailText} >Please enter your phone number below to get started.</Text>
                            </View>
                            {/* <View style={styles.InputVIew} >
                                <Call_Icon width={windowWidth / 15} height={windowHeight / 15} />

                                <TextInput
                                    style={styles.TextInputStyles}
                                    placeholder="Your Phone Number"
                                    placeholderTextColor={colors.placeHolderColor}
                                    // onChangeText={text => setnumberOfCarpets(text)}
                                    autoCorrect={false}
                                    keyboardType="number-pad"
                                    autoCapitalize="none"
                                />
                            </View> */}
                            <View style={styles.InputVIew} >
                                <OTPInputFeild setpinReady={setpinReady} code={code} setcode={setcode} maxLength={MAX_CODE_LENGTH} />
                            </View>
                        </View>
                        <View style={styles.LowerSecond} >
                            <FormButton buttonTitle="Continue" onPress={() => { }} style={styles.ButtonStyle} />
                            <View style={styles.TermsTextView} >
                                <Text style={styles.TermsText}>By continuing, you agree to the honest crafters <Text style={styles.NestedText} >terms & services</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

export default LoginComponent;


const styles = StyleSheet.create({
    LoginWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    UpperWrapper: {
        // backgroundColor: 'red',
        height: '50%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignContent: 'baseline',
        // marginTop: -50,
    },
    EightStyle: {
        // backgroundColor: 'beige',
        // backgroundColor: colors.AnotherSecondaryColor,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        position: 'absolute',
        height: '80%',
        width: '100%',
        // bottom: 200,
    },
    LowerWrapper: {
        height: '50%',
        width: '100%',
        paddingHorizontal: '5%',
    },
    ImageStyle: {
        height: '100%',
        width: '100%',
    },
    EmptyView: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '50%',
    },
    CenterIcon: {
        // backgroundColor: 'green',
        width: '100%',
        height: '40%',
        marginTop: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleView: {
        backgroundColor: '#FFFFFF',
        width: '35%',
        height: windowHeight / 6,
        position: 'absolute',
        // zIndex: 5,
        borderRadius: 100,
    },
    TextStyle: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '10%',
        fontSize: 16,
        textTransform: 'uppercase',
        color: colors.AnotherSecondaryColor,
        textAlign: 'center',
    },
    LowerFirst: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '50%',
        justifyContent: 'space-around',
    },
    LowerSecond: {
        // backgroundColor: 'red',
        width: '100%',
        height: '50%',
        justifyContent: 'space-evenly',
    },
    TextView: {
        // backgroundColor: 'green',
        justifyContent: 'space-around',
        width: '100%',
        height: '30%',
    },
    loginText: {
        fontSize: 18,
        fontFamily: fonts.PoppinsBold,
        color: colors.WelcomeCardText,
        textTransform: 'uppercase',
        lineHeight: 26,
        letterSpacing: 0.2,
    },
    LoginDetailText: {
        // backgroundColor: 'skyblue',
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        color: colors.WelcomeCardText,
        lineHeight: 22,
        letterSpacing: 0.02,

    },
    InputVIew: {
        // backgroundColor: 'beige',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: colors.BottomGrey,
        width: '100%',
        marginBottom: 10,
    },
    TextInputStyles: {
        paddingLeft: 15,
        fontSize: 16,
        lineHeight: 14,
        letterSpacing: 0.5,
        fontFamily: fonts.PoppinsRegular,
        color: colors.placeHolderColor,
        width: '95%',
    },
    TermsTextView: {
        // backgroundColor: 'purple',
        width: '75%',
        alignSelf: 'center',
    },
    TermsText: {
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.5,
        fontFamily: fonts.PoppinsRegular,
        color: colors.CaptionGrey,
    },
    NestedText: {
        textDecorationLine: 'underline',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.5,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.secondaryColor,
    },
});
