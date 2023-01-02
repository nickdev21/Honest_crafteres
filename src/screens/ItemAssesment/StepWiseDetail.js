/* eslint-disable prettier/prettier */
import { View, Text, StatusBar, StyleSheet, SafeAreaView, ScrollView, Platform, Pressable, Alert, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../assets/fonts';
import { colors } from '../../assets/colors';
import Spinner from '../../component/Spinner/Spinner';
import FormButton from '../../component/FormButton';
import { StepFive_Icon, StepFour_Icon, StepOne_Icon, StepThree_Icon, StepTwo_Icon } from '../../assets/Icons';
import { color } from 'react-native-reanimated';










const StepWiseDetail = (props) => {
    const [page, setPage] = useState(1);
    const [active, setActive] = useState(1);
    const [loacalLoading, setloacalLoading] = useState(false);
    const [disableEdit, setdisableEdit] = useState(props?.disableEdit);
    const [loading, setLoading] = useState(true);

    const scrollViewRef = useRef();
    const navigation = useNavigation();

    const fillDetailSection = () => {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    };



    const StepWiseComponent = () => {

        // Final API HIT FOR DATA SAVE

        return (
            <>
                <View>
                    {page === 1 ?
                        <>

                            <View style={styles.TextView} >
                                <Text style={styles.TextStyle} >Invoice Id</Text>
                                <Text style={styles.InvoiceCode} >HCI1234-INV</Text>
                            </View>
                            <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} />

                        </>
                        : page === 2 ?
                            <>
                                <View style={styles.TextView} >
                                    <Text style={styles.TextStyle} >Invoice Id</Text>
                                    <Text style={styles.InvoiceCode} >HCI1234-INV</Text>
                                </View>
                                <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} />



                            </>
                            : page === 3 ?

                                <>
                                    <Text style={styles.TextColor} >Step Three</Text>
                                    <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} />

                                </>
                                : page === 4 ?
                                    <>
                                        <Text style={styles.TextColor} >Step Four</Text>
                                        <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} />

                                    </>
                                    : page === 5 ?
                                        <>
                                            <Text style={styles.TextColor} >Step Five</Text>
                                            <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} />
                                        </>

                                        : null
                    }


                </View>

            </>
        );
    };



    //HER THE MAIN RENDER OF STEPWISE END


    const goNext = async () => {
        if (page === 5) {
            // FinalDataSave()
            return;
        }
        setPage(page => page + 1);
        if (page === 1) {
            setActive(active + 1);
        } else if (page === 2) {
            setActive(active + 1);
        } else if (page === 3) {
            setActive(active + 1);
        } else if (page === 4) {
            setActive(active + 1);
        } else if (page === 5) {
            setActive(active + 1);
        }
    };

    const goToStepOne = () => {
        if (page === 2) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    const goToStepTwo = () => {
        if (page === 3) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    const goToStepThree = () => {
        if (page === 4) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    const goToStepFour = () => {
        if (page === 5) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    return (
        <View>
            <View style={styles.StepWiseWrapper} >
                {loacalLoading === true ? <Spinner style={{ height: windowHeight }} /> :

                    <View style={styles.StepProgressWrap} >
                        <View style={styles.ProgressLine}>
                            <View style={styles.OverStepLine}>
                                <View style={styles.StepLine}>
                                    <View style={[styles.StepLineOne,
                                    { backgroundColor: active > 1 ? colors.successColor : colors.BottomGrey },
                                    ]} />
                                    <View style={[styles.StepLineTwo,
                                    { backgroundColor: active > 2 ? colors.successColor : colors.BottomGrey },
                                    ]} />
                                    <View style={[styles.StepLineThree,
                                    { backgroundColor: active > 3 ? colors.successColor : colors.BottomGrey },
                                    ]} />
                                    <View style={[styles.StepLineFour,
                                    { backgroundColor: active > 4 ? colors.successColor : colors.BottomGrey },
                                    ]} />
                                </View>
                            </View>

                            {active === 1 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <Text style={styles.StepTextActive} >Item</Text>
                                    <View style={styles.StepCircleTouchActive} onPress={goToStepOne}>
                                        <StepOne_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </View>
                                </View>
                            ) : (

                                <View style={styles.StepNameAndCircle} >
                                    <Text style={styles.StepText} >Item</Text>
                                    <Pressable style={[styles.StepCircleTouch, { backgroundColor: active > 1 ? colors.successColor : colors.BottomGrey }]} onPress={goToStepOne}>
                                        <StepOne_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </Pressable>
                                </View>
                            )}
                            {active === 2 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} onPress={goToStepTwo}>
                                        <StepTwo_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </View>
                                    <Text style={styles.StepTextActive} >Inspection</Text>
                                </View>
                            ) : (
                                <View style={styles.StepNameAndCircle} >
                                    <Pressable style={[styles.StepCircleTouch, { backgroundColor: active > 1 ? colors.successColor : colors.BottomGrey }]} onPress={goToStepTwo}>
                                        <StepTwo_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </Pressable>
                                    <Text style={styles.StepText} >Inspection</Text>
                                </View>
                            )}
                            {active === 3 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} onPress={goToStepThree}>
                                        <StepThree_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </View>
                                    <Text style={styles.StepTextActive} >Service</Text>
                                </View>
                            ) : (
                                <View style={styles.StepNameAndCircle} >
                                    <Pressable style={[styles.StepCircleTouch, { backgroundColor: active > 2 ? colors.successColor : colors.BottomGrey }]} onPress={goToStepThree}>
                                        <StepThree_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </Pressable>
                                    <Text style={styles.StepText} >Service</Text>
                                </View>
                            )}
                            {active === 4 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} >
                                        <StepFour_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </View>
                                    <Text style={styles.StepTextActive} >Images</Text>
                                </View>
                            ) : (
                                <View style={styles.StepNameAndCircle} >
                                    <Pressable style={[styles.StepCircleTouch, { backgroundColor: active > 3 ? colors.successColor : colors.BottomGrey }]} onPress={goToStepFour} >
                                        <StepFour_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </Pressable>
                                    <Text style={styles.StepText} >Images</Text>
                                </View>
                            )}
                            {active === 5 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} >
                                        <StepFive_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </View>
                                    <Text style={styles.StepTextActive} >Preview</Text>
                                </View>
                            ) : (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={[styles.StepCircleTouch, { backgroundColor: active > 4 ? colors.successColor : colors.BottomGrey }]} >
                                        <StepFive_Icon width={windowWidth / 25} height={windowHeight / 30} />
                                    </View>
                                    <Text style={styles.StepText} >Preview</Text>
                                </View>
                            )}
                        </View>

                    </View>
                }
                <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, alignSelf: 'stretch', marginBottom: 20, paddingBottom: 20 }} ref={scrollViewRef} onContentSizeChange={() => fillDetailSection}>

                    <View style={styles.StepContentView}>
                        <View style={styles.PageContent} >
                            {page === 1 &&
                                <StepWiseComponent />
                            }
                            {page === 2 &&
                                <StepWiseComponent />
                            }
                            {page === 3 &&
                                <StepWiseComponent />
                            }
                            {page === 4 &&
                                <StepWiseComponent />
                            }
                            {page === 5 &&
                                <StepWiseComponent />
                            }
                        </View>
                    </View>
                </ScrollView>

            </View>

        </View>
    );
};

export default StepWiseDetail;



const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 15,
        paddingHorizontal: 10,
        // borderWidth: 1,
        borderRadius: 10,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
        backgroundColor: '#fff',
        borderColor: 'rgba(0, 110, 233, 0.2)',
        borderWidth: 1,
        marginBottom: 20,
        shadowColor: 'rgba(0, 110, 233, 0.02)',
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,

    },

    inputAndroid: {
        fontSize: 14,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderColor: 'rgba(0, 110, 233, 0.2)',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
        marginBottom: 20,
        shadowColor: 'rgba(0, 110, 233, 0.02)',
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
    },
});


const styles = StyleSheet.create({
    CheckInWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    StepWiseWrapper: {
        marginBottom: 10,
        height: '100%',
    },
    StepProgressWrap: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
        height: windowHeight / 7,
        alignItems: 'center',
    },
    ProgressLine: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: '70%',
        width: '85%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        top: 0,
    },
    // StepLine: {
    //     backgroundColor: '#000',
    //     height: '2%',
    //     margin: 2,
    //     justifyContent: 'center',
    //     alignSelf: 'center',
    //     alignItems: 'center',
    //     position: 'absolute',
    //     /* left: 90%, */
    //     width: '95%',
    //     top: '45%',
    //     // content: '',
    // },
    // StepLine: {
    //     backgroundColor: '#000',
    //     height: '2%',
    //     margin: 2,
    //     justifyContent: 'center',
    //     alignSelf: 'center',
    //     alignItems: 'center',
    //     position: 'absolute',
    //     /* left: 90%, */
    //     width: '95%',
    //     top: '45%',
    //     // content: '',
    // },
    // ProgressLine: {
    //     flexDirection: 'row',
    //     height: '100%',
    //     width: '85%',
    //     justifyContent: 'space-between',
    //     alignSelf: 'center',
    //     alignItems: 'center',
    //     top: 0,
    // },
    // StepLine: {
    //     backgroundColor: "#000",
    //     height: "2%",
    //     margin: 2,
    //     justifyContent: "center",
    //     alignSelf: "center",
    //     alignItems: "center",
    //     position: "absolute",
    //     /* left: 90%, */
    //     width: "95%",
    //     top: "45%",
    //     // content: '',
    // },
    OverStepLine: {
        width: '100%',
        height: '2%',
        position: 'absolute',
        backgroundColor: 'beige',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    StepLine: {
        backgroundColor: 'skyblue',
        height: '100%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    StepLineOne: {
        backgroundColor: 'red',
        height: '100%',
        margin: 2,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        alignItems: 'center',
        // position: 'absolute',
        width: '25%',
        // top: '100%',
        // zIndex: 5,
    },
    StepLineTwo: {
        backgroundColor: 'green',
        height: '100%',
        margin: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // position: 'absolute',
        width: '25%',
        // zIndex: 5,
    },
    StepLineThree: {
        backgroundColor: 'purple',
        height: '100%',
        margin: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // position: 'absolute',
        width: '25%',
        // zIndex: 5,
    },
    StepLineFour: {
        // backgroundColor: 'yellow',
        height: '100%',
        margin: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // position: 'absolute',
        width: '25%',
        // zIndex: 5,
    },
    StepNameAndCircle: {
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        // width:'20%' ,
        height: '100%',
    },
    StepCircleTouchActive: {
        backgroundColor: colors.successColor,
        // marginTop: 10,
        width: 25,
        height: 25,
        borderRadius: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%',
        // borderColor: '#FFF',
        // borderWidth: 3,
    },
    UpperCircle: {
        // backgroundColor: "transparent",
        width: 45,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: '#AE282E',
        borderWidth: 3,
    },
    StepTextActive: {
        // backgroundColor: 'pink',
        position: 'absolute',
        color: colors.WelcomeCardText,
        width: '300%',
        alignSelf: 'center',
        top: -10,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: fonts.PoppinsSemiBold,
        marginBottom: 5,
    },
    StepText: {
        // backgroundColor: 'red',
        color: colors.CaptionGrey,
        position: 'absolute',
        fontSize: 12,
        width: '300%',
        alignSelf: 'center',
        top: -10,
        textAlign: 'center',
        fontFamily: fonts.PoppinsSemiBold,
        lineHeight: 20,
    },
    StepCircleTouch: {
        // marginTop: 10,
        backgroundColor: '#004A7F',
        width: 25,
        height: 25,
        borderRadius: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%',
    },
    StepContentView: {
        height: '100%',
        paddingBottom: '15%',
        paddingHorizontal: '5%',
        // padding: 0 5% 15% 5%,
    },
    PageContent: {
        maxHeight: '100%',
    },
    TextColor: {
        fontSize: 14,
        paddingVertical: 10,
        color: colors.AnotherSecondaryColor,
        fontFamily: fonts.PoppinsMedium,
    },
    MediaWrapper: {
        width: '100%',
        height: '100%',
    },
    ImageView: {
        width: '100%',
        justifyContent: 'space-around',
        height: '70%',
        // flexGrow : 1,
    },
    touchImage: {
        width: windowWidth / 2.2,
        height: '100%',
        marginRight: 10,
        borderRadius: 5,
    },
    addIMageView: {
        width: windowWidth / 2.2,
        height: '55%',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 5,
    },
    ADDtouchImage: {
        backgroundColor: '#E8EFF5',
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    addImageStyle: {
        backgroundColor: '#E8EFF5',
    },
    ImageWrapper: {
        width: '100%',
        flex: 1,
        height: windowHeight / 1.7,
    },
    TotalMediaWrapper: {
        width: '100%',
    },
    ImageHeadingText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        lineHeight: 24,
        color: '#155B9F',
        paddingVertical: 10,
    },
    TextInputStyles: {
        height: 50,
        backgroundColor: '#fff',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#000',
        borderColor: 'rgba(0, 110, 233, 0.2)',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: 'rgba(0, 110, 233, 0.02)',
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,

    },
    RemarkInput: {
        backgroundColor: '#fff',
        padding: 5,
        width: '100%',
        height: 100,
        fontSize: 18,
        color: '#000',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
    },
    TextView: {
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

});

