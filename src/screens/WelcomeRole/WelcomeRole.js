/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import React from 'react';
import FormButton from '../../component/FormButton';
import fonts from '../../assets/fonts';
import SquareCard from './SquareCard';
import { colors } from '../../assets/colors';
import { CRAFTSMANIcon, DELIVERYMANIcon, LOGISTICIcon, SALESIcon, SOCIcon } from '../../assets/Icons';
import NavigationStrings from '../../routes/NavigationStrings';


const WelcomeRole = ({ navigation }) => {

    const CardData = [
        { title: 'CRAFTSMAN', Icon: CRAFTSMANIcon },
        { title: 'SOC', Icon: SOCIcon },
        { title: 'Sales', Icon: SALESIcon },
        { title: 'Logistics', Icon: LOGISTICIcon },
        { title: 'Delivery Man', Icon: DELIVERYMANIcon },
        // { title: 'Material purchasing team', Icon: MATERIALPURCHASINGIcon },

    ];


    const renderItem = ({ item }) => (
        <>
            <SquareCard title={item?.title} Icon={item?.Icon} />
        </>

    );


    return (
        <>
            <StatusBar animated={true} backgroundColor={colors.whiteColor} barStyle={'dark-content'} />
            <View style={styles.WelcomeView} >
                <View style={styles.TextView} >
                    <Text style={styles.textStyle} >Welcome to honest crafters.Please select your role below.</Text>
                </View>
                <View style={styles.CenterVIew} >
                    {/* <View style={styles.ThreeStrip} >
                        <SquareCard title={'CRAFTSMAN'} Icon={CRAFTSMANIcon} />
                        <SquareCard title={'SOC'} Icon={SOCIcon} />
                    </View>
                    <View style={styles.ThreeStrip} >
                        <SquareCard title={'Sales'} Icon={SALESIcon} />
                        <SquareCard title={'Logistics'} Icon={LOGISTICIcon} />
                    </View>
                    <View style={styles.ThreeStrip} >
                        <SquareCard title={'Delivery Man'} Icon={DELIVERYMANIcon} />
                        <SquareCard title={'Material purchasing team'} Icon={MATERIALPURCHASINGIcon} />
                    </View> */}
                    <FlatList
                        data={CardData}
                        numColumns={2}
                        renderItem={renderItem}
                    />
                </View>
                <FormButton buttonTitle="LOGIN" onPress={() => navigation.navigate(NavigationStrings.LOGIN_SCREEN)} style={styles.ButtonStyle} />
            </View>
        </>
    );
};

export default WelcomeRole;


const styles = StyleSheet.create({
    WelcomeView: {
        flex: 1,
        paddingHorizontal: '2%',
        backgroundColor: colors.whiteColor,
    },
    TextView: {
        height: '10%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 14,
        fontFamily: fonts.PoppinsHeavy,
        color: colors.AnotherSecondaryColor,
        lineHeight: 22,
        textAlign: 'center',
    },
    CenterVIew: {
        height: '80%',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    ThreeStrip: {
        flexDirection: 'row',
        // height: '33.33%',
    },
    ButtonStyle: {
        width: '98%',
        alignSelf: 'center',
    },
});
