/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { colors } from '../../assets/colors';
import CommonHeader from '../../component/Headers/CommonHeader';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../routes/NavigationStrings';
import { GiftedChat } from 'react-native-gifted-chat';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { ScrollView } from 'react-native-gesture-handler';
import CommonInput from '../../component/Input/CommonInput';
import { DoneAll_Icon, DurationClock_Icon, HamBurger_Icon, HelpCenter_Icon, Media_Icon, Mic_Icon, MsgPop_Icon, Note_Icon, Send_Icon, Trash_Icon, Wrench_Icon } from '../../assets/Icons';
import fonts from '../../assets/fonts';
import BottomSheet from '../../component/BottomSheet/BottomSheet';
import CTAModalChat from './CTAModalChat';

const Chat = () => {

    const [ChatMessageData, setChatMessageData] = useState();
    const [NewMessage, setNewMessage] = useState();
    const [ShowPopUp, setShowPopUp] = useState(false);

    const navigation = useNavigation();
    const ChatBottomSheet = useRef();

    const ChatData = {
        HeaderTitile: 'Jhon Smith',
        SeondEndIcon: true,
        RunFunction: () => CTA_Action(),
        SecondIcon: HamBurger_Icon,
    };

    const CTA_Action = () => {
        ChatBottomSheet.current.open()
    };

    useEffect(() => {
        setChatMessageData(ChatsMessage);
    }, []);


    const ChatsMessage = [
        { user: 0, message: 'Loreum Ipsum is dummy text. Check this out my new one. ', time: '1:11 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Here it is ?', time: '1:13 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Chat is having done', time: '1:15 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text.', time: '1:19 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Got that ', time: '1:21 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Check this out my new one. ', time: '1:11 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Here it is ?', time: '1:13 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Chat is having done', time: '1:15 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text.', time: '1:19 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Got that ', time: '1:21 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Check this out my new one. ', time: '1:11 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Here it is ?', time: '1:13 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Chat is having done', time: '1:15 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text.', time: '1:19 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Got that ', time: '1:21 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Check this out my new one. ', time: '1:11 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Here it is ?', time: '1:13 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Chat is having done', time: '1:15 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text.', time: '1:19 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Got that ', time: '1:21 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Check this out my new one. ', time: '1:11 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Here it is ?', time: '1:13 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text. Chat is having done', time: '1:15 PM' },
        { user: 0, message: 'Loreum Ipsum is dummy text.', time: '1:19 PM' },
        { user: 1, message: 'Loreum Ipsum is dummy text. Got that ', time: '1:21 PM' },
    ];





    const RenderChat = ({ item, index }) => {
        let data = { item: item, index: index };
        return (
            <>
                <View style={[styles.ChatMessage, item?.user === 1 ? { backgroundColor: colors.AnotherSecondaryColor, alignSelf: 'flex-end' } : null]} >
                    <View style={styles.TextStyle} >
                        <Text style={[styles.ChatText, item?.user === 1 ? styles.ChatTextAlter : null]} >{item?.message}</Text>
                    </View>
                    <View style={styles.TimeAndIcon} >
                        <Text style={[styles.TimeText, item?.user === 1 ? styles.TimeTextAlter : null]} >{item?.time}</Text>
                        {item?.user === 1 ?
                            <DoneAll_Icon width={'30%'} height={'115%'} />
                            : null}
                    </View>
                </View>
            </>
        );
    };













    //RENDERING THE BOTTOM 

    const RenderBottomSheet = () => {

        const BottomSheetData = [
            { Icon: HelpCenter_Icon, PopUpTittle: 'Claim Inquiry' },
            { Icon: Trash_Icon, PopUpTittle: 'Close Inquiry' },
            { Icon: Note_Icon, PopUpTittle: 'Service Details' },
        ];


        const PopUpData = {
            Icon: MsgPop_Icon, PopUpTittle: 'Are you sure you want to claim inquiry ID 124356?', FirstCTA: 'No,Not Now', SecondCTA: 'Yes, Please', SecondPopUpTitle: 'Inquiry Id #123 is claimed successfully!',
        };


        return (
            <>
                <View style={styles.BottomSheetWrapper} >

                    <View style={styles.TileWrapper} >

                        <CTAModalChat data={PopUpData} RenderComp={(props) => {
                            return (
                                <>
                                    <Pressable style={styles.TileWrapperInner} onPress={() => props?.setModalVisible(true)}  >
                                        <HelpCenter_Icon width={'15%'} height={'33%'} />
                                        <Text style={styles.BottomSheetHadline} >Claim Inquiry</Text>
                                    </Pressable>
                                </>);
                        }}
                        />
                    </View>
                    <View style={[styles.LineStyle]} />
                    <Pressable style={styles.TileWrapper} onPress={() => [navigation.navigate(NavigationStrings.CLOSE_INQUIRY)]} >
                        <Trash_Icon width={'15%'} height={'33%'} />
                        <Text style={styles.BottomSheetHadline} >Close Inquiry</Text>
                    </Pressable>
                    <View style={[styles.LineStyle]} />
                    <Pressable style={styles.TileWrapper} onPress={() => [navigation.navigate(NavigationStrings.SERVICE_DETAIL)]} >
                        <Note_Icon width={'15%'} height={'33%'} />
                        <Text style={styles.BottomSheetHadline} >Service Details</Text>
                    </Pressable>
                </View>
            </>
        );
    };










    const AddInArray = (msg) => {
        let newObj = { user: 1, message: msg, time: '2:21 PM' };
        console.log(newObj, 'NEWObj');
        let newArray = ChatMessageData?.push(newObj);

        console.log(newArray, 'newArray');
        setNewMessage('');
    };

    // const [messages, setMessages] = useState([]);
    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //                 user: {
    //                     _id: 2,
    //                     name: 'React Native',
    //                     avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //                 },
    //             },
    //         },
    //     ]);
    // }, []);

    // const onSend = useCallback((messages = []) => {
    //     setMessages((previousMessages) =>
    //         GiftedChat.append(previousMessages, messages),
    //     );
    // }, []);


    return (
        <View style={styles.ChatWrapper} >
            <CommonHeader data={ChatData} />
            <View style={[styles.BrownArea]} >
                <View style={styles.BrownContent} >
                    <Wrench_Icon width={'20%'} height={'95%'} />
                    <View style={styles.twoDetail} >
                        <Text style={styles.MainHeading} >Service Progress - #123</Text>
                        <View style={styles.downDetail} >
                            <DurationClock_Icon width={'10%'} height={'85%'} />
                            <Text style={styles.daysTime} >2 Days</Text>
                        </View>
                    </View>
                </View>
            </View>
            <FlatList inverted style={styles.ChatArea} contentContainerStyle={styles.FlatListStyles} data={ChatMessageData?.reverse()} renderItem={RenderChat} showsVerticalScrollIndicator={true} showsHorizontalScrollIndicator={false} />
            <View style={styles.WriitenArea} >
                <View style={styles.InputAndIcon} >
                    <Media_Icon width={'15%'} height={'50%'} />
                    <TextInput style={styles.Input} placeholder={'Type Your message'}
                        onChangeText={text => setNewMessage(text)}
                        autoCorrect={true}
                        value={NewMessage}
                    // editable={!disableEdit}
                    />
                    <Pressable style={styles.PressSend} onPress={() => AddInArray(NewMessage)} >
                        <Send_Icon width={'100%'} height={'50%'} />
                    </Pressable>
                </View>
                <Mic_Icon width={'15%'} height={'80%'} />
            </View>
            <BottomSheet reference={ChatBottomSheet} BSheight={windowHeight / 3.5} RenderComp={RenderBottomSheet} />
            {/* <Pressable onPress={() => { navigation.navigate(NavigationStrings.SERVICE_DETAIL); }} >
                <View style={{ height: windowHeight / 1.1, }} >
                    <Text>Tap this chat</Text>
                    <GiftedChat
                        messages={messages}
                        onSend={(messages) => onSend(messages)}
                        user={{
                            _id: 1,

                        }}
                        placeholder="Start Typing..."
                        showUserAvatar
                        alwaysShowSend
                    />

                </View>
            </Pressable> */}
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
    ChatArea: {
        // backgroundColor: 'pink',
        flex: 1,
        width: '100%',
        paddingHorizontal: 30,
        // paddingVertical: 10,
        paddingBottom: 20,
        marginBottom: '15%',
    },
    WriitenArea: {
        position: 'absolute',
        backgroundColor: colors.whiteColor,
        width: '100%',
        bottom: 0,
        zIndex: 10,
        flexDirection: 'row',
        paddingBottom: 15,
        paddingTop: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        elevation: 10,
        shadowOffset: {
            width: 50,
            height: 50,
        },
        shadowRadius: 100,
        shadowOpacity: 0.50,
    },
    InputAndIcon: {
        backgroundColor: colors.ChatTextInput,
        flexDirection: 'row',
        width: '85%',
        height: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
    },
    Input: {
        // backgroundColor: colors.ChatTextInput,
        width: '70%',
    },
    ChatMessage: {
        flex: 1,
        backgroundColor: colors.ChatUserFirst,
        width: '80%',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginBottom: 25,
    },
    TextStyle: {
        // backgroundColor: 'pink',
    },
    ChatText: {
        // backgroundColor:  'yellow',
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        width: '90%',
        color: colors.WelcomeCardText,
    },
    TimeText: {
        // backgroundColor: 'yellow',
        fontSize: 10,
        lineHeight: 16,
        fontFamily: fonts.PoppinsMedium,
        width: '60%',
        textAlign: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: colors.WelcomeCardText,
    },
    ChatTextAlter: {
        // backgroundColor:  'yellow',
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.whiteColor,
        width: '90%',
        color: colors.whiteColor,
    },
    TimeTextAlter: {
        // backgroundColor: 'yellow',
        fontSize: 10,
        lineHeight: 16,
        fontFamily: fonts.PoppinsMedium,
        width: '60%',
        textAlign: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: colors.whiteColor,
    },
    TimeAndIcon: {
        // backgroundColor: 'skyblue',
        position: 'absolute',
        right: '5%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        bottom: 0,
        width: '30%',
        flexDirection: 'row',

    },
    BrownContent: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center',
    },
    twoDetail: {
        // backgroundColor: 'pink',
        width: '80%',
        paddingHorizontal: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    downDetail: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    MainHeading: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.PoppinsBold,
        color: colors.whiteColor,
    },
    daysTime: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: fonts.PoppinsMedium,
        color: colors.whiteColor,
        opacity: 0.6,
    },
    BottomSheetWrapper: {
        flex: 1,
        height: '100%',
        // backgroundColor: 'red',
        // paddingHorizontal: 15,
        paddingVertical: 10,
    },
    TileWrapper: {
        // flex: 1,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        height: '33%',
        width: '100%',
        // paddingHorizontal: 15,
        alignItems: 'center',
    },
    TileWrapperInner: {
        // flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: '100%',
        // width: '100%',
        width: windowWidth,
        // paddingHorizontal: 15,
        alignItems: 'center',
    },
    BottomSheetHadline: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.WelcomeCardText,
    },
    LineStyle: {
        // backgroundColor: 'red',
        borderWidth: windowHeight / 1500,
        width: '100%',
        alignSelf: 'center',
        borderColor: colors.justLineUserAccountColor,
    },
    PressSend: {
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
