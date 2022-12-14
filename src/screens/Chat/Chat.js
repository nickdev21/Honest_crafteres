/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../routes/NavigationStrings';

const Chat = () => {

    const ChatData = {
        HeaderTitile: 'Jhon Smith',
    };

    const navigation = useNavigation();

    return (
        <View style={styles.ChatWrapper} >
            <CommonHeader data={ChatData} />
            <Pressable onPress={() => { navigation.navigate(NavigationStrings.SERVICE_DETAIL); }} >
                <Text>Chat</Text>
            </Pressable>
        </View>
    );
};

export default Chat;


const styles = StyleSheet.create({
    ChatWrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    BrownArea: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        height: '15%',
    },
});
