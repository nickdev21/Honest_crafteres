/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import HomeHeader from '../../component/Headers/HomeHeader';
import { colors } from '../../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { windowWidth } from '../../utils/Dimension';
import Images from '../../assets/Images';
import fonts from '../../assets/fonts';
import HomeTile from './HomeTile';
import { Calander_Icon, INQ_Icon, Invoices_Icon, Profile_Icon, Speaker_Icon } from '../../assets/Icons';

const Home = () => {


  const cardArray = [{ id: '0', number: `$${105}`, title: 'Sales Amount', progress: '', image: Images.paymentPNG },
  { id: '1', number: 105, title: 'Total Inquiries', progress: '', image: Images.inquiPNG },
  { id: '2', number: 26, title: 'Inquiries to reply', progress: '', image: Images.orderPNG },
  ];

  const TileArray = [{ id: '0', SubTitle: 'View inquiries assigned to you.', title: 'Inquiry', Icon: INQ_Icon },
  { id: '1', SubTitle: 'View inquiries assigned to you.', title: 'Invoices', Icon: Invoices_Icon },
  { id: '2', SubTitle: 'Update your profile details. ', title: 'Profile', Icon: Profile_Icon },
  { id: '3', SubTitle: 'See schedule of each driver. ', title: 'Staff Schedule', Icon: Calander_Icon },
  { id: '4', SubTitle: 'Latest announcement from HC.', title: 'Announcements', Icon: Speaker_Icon },
  ];



  const RequestCards = ({ item, index }) => (

    <ImageBackground style={[styles.ImagBackStyle]} source={item?.image} borderRadius={20} >
      <View style={styles.TextView} >
        <Text style={styles.HeadingText} >{item.title}</Text>
        <Text style={styles.HeadingTextNumber} >{item.number}</Text>
      </View>
    </ImageBackground>
  );

  const RenderTile = ({ item, index }) => {
    let data = { item: item, index: index };
    return (
      <View style={styles.TileWraper} >
        <HomeTile data={data} />
      </View>
    );
  };

  return (
    <View style={styles.HomeWrapper} >
      <HomeHeader />
      <View>
        <View style={styles.UpperArea} >
          <View style={styles.BrownArea} />
          <View style={styles.UpContentArea} >
            <View style={styles.NameGreetStyle} >
              <Text style={styles.GreetText}>Good Morning!</Text>
              <Text style={styles.NameText}>John smith.</Text>
            </View>
            <View style={styles.CardStyling} >
              <FlatList horizontal data={cardArray} renderItem={RequestCards} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}/>

            </View>
          </View>
        </View>
        <View style={styles.ScrollArea} >
          {/* <HomeTile /> */}
          <FlatList contentContainerStyle={styles.FlatListStyles} data={TileArray} renderItem={RenderTile} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
        </View>
      </View>
    </View>
  );
};

export default Home;




const styles = StyleSheet.create({
  HomeWrapper: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  UpperArea: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: '30%',
  },
  BrownArea: {
    backgroundColor: colors.primaryColor,
    width: '100%',
    height: '70%',
  },
  UpContentArea: {
    // backgroundColor: 'skyblue',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  NameGreetStyle: {
    // backgroundColor: 'yellow',
    width: '40%',
    height: '40%',
    paddingHorizontal: '5%',
    paddingTop: 10,
  },
  CardStyling: {
    // backgroundColor: 'green',
    width: '100%',
    height: '60%',
  },
  GreetText: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.whiteColor,
    fontSize: 12,
  },
  NameText: {
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.whiteColor,
    fontSize: 18,
  },
  ImagBackStyle: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  TextView: {
    height: '60%',
    width: '100%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  HeadingText: {
    width: windowWidth / 4,
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.whiteColor,
    fontSize: 12,
    paddingTop: 10,
    textAlign: 'center',
  },
  HeadingTextNumber: {
    width: windowWidth / 4,
    fontFamily: fonts.PoppinsBold,
    color: colors.whiteColor,
    fontSize: 28,
    paddingTop: 10,
    textAlign: 'center',
  },
  ScrollArea: {
    // backgroundColor: 'pink',
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatListStyles: {
    paddingBottom: 100,
  },
  TileWraper: {
    flex: 1,
    // backgroundColor: 'skyblue',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

});
