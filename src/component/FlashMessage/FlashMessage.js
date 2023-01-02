/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { colors } from '../../assets/colors';
import fonts from '../../assets/fonts';
import { CrossCta_Icon, Cross_Icon, WhiteTick_Icon } from '../../assets/Icons';
import { windowHeight, windowWidth } from '../../utils/Dimension';


export function ShowErrorMessage(data) {
    console.log('DKSJDKLSD', data);
    showMessage({
        type: 'danger',
        icon: 'danger',
        message: data,
        position: 'top',
        duration: 1500,

    });
}

export function ShowInfoMessage(data) {
    console.log('DKSJDKLSD', data);
    showMessage({
        type: 'info',
        icon: 'info',
        message: data,
        position: 'top',
        duration: 1500,
    });
}

export function ShowSuccessMessage(data) {
    console.log('DKSJDKLSD', data);
    showMessage({
        // autoHide: false,
        color: '#841584',
        type: 'success',
        icon: 'success',
        position: 'top',
        message: data,
    });
}

export function ShowCustomFlashMessage(data) {
    console.log('DKSJDKLSD', data);
    showMessage({
        autoHide: false,
        backgroundColor: colors.PendingColor,
        type: 'success',
        // icon: 'success',
        position: 'top',
        message: data,
        titleStyle: {
            fontFamily: fonts.PoppinsSemiBold,
            fontSize: 14,
            // marginTop: windowHeight / 16,
            paddingRight: 50,
        },
        style: {
            // backgroundColor: 'green',
            marginTop: windowHeight / 16,
            height: 'auto',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: 50,
        },
        icon: () => <View style={styles.WhiteIconStyle} >
            <WhiteTick_Icon height={'70%'} width={'80%'} />
        </View>,
        // renderCustomContent: () => <Text hideOnPress={true} style={{ position: 'absolute', height: 10, width: 10, right: 0, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}><Cross_Icon height={windowHeight / 35} width={windowWidth / 20} /></Text>,
        renderAfterContent: () => <View style={styles.CrossIcon} ><Cross_Icon height={windowHeight / 35} width={windowWidth / 20} /></View>,
        // renderCustomContent: () => <Text>x</Text>,
        // renderBeforeContent: () => <Text>cdvf</Text>,
        // iconProps: () => <Text>cdvf</Text>,
        // renderFlashMessageIcon: () => <Text>ICON</Text>,
    });
}



const styles = StyleSheet.create({
    CrossIcon: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        // backgroundColor: 'pink',
        height: '100%',
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    WhiteIconStyle: {
        // backgroundColor: 'red',
        height: 40,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
    },
})