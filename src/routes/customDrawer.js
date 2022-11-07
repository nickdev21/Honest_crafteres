import React from 'react';
import { Alert, FlatList, Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import { DrawerIcon, HC_Logo } from '../assets/Icons';
import { windowHeight, windowWidth } from '../utils/Dimension';
// import fonts from '../assets/fonts';
import { colors } from '../assets/colors';



const CustomDrawer = ({ navigation }) => {
    // const navigation = useNavigation();
    const data = [
        { icon: DrawerIcon, title: "VMO", onPress: () => { } },
        { icon: DrawerIcon, title: "Logout", onPress: () => Alert.alert("Logout", "Are you sure want to logout", [{ text: "No", style: "cancel" }, { text: "Yes", onPress: () => { } }]) },
    ]




    function renderItem({ item, index }) {
        return (
            <Pressable onPress={item.onPress} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: windowWidth / 1.25, paddingTop: 20, paddingBottom: 5, paddingRight: 20, borderBottomColor: '#ccc', borderBottomWidth: 0.3 }} >
                <View style={{ flexDirection: "row", paddingLeft: 15 }} >
                    <item.icon width={windowWidth / 15} height={windowWidth / 15} />
                    {/* <Text style={{ fontSize: 16, fontFamily: fonts.PoppinsRegular, color: colors.black, paddingHorizontal: 10 }} >{item.title}</Text> */}
                </View>
                <DrawerIcon width={windowWidth / 20} height={windowWidth / 30} />
            </Pressable>
        )
    }
    return (
        <View style={styles.container} >
            <View style={{ marginTop: windowWidth / 15 }} >
                <HC_Logo width={windowWidth / 2.50} height={windowWidth / 3} />
            </View>
            {/* <FlatList
                style={{ marginTop: width / 15 }}
                data={data}
                keyExtractor={item => item.title}
                renderItem={renderItem} /> */}

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: windowWidth / 1.30, paddingHorizontal: 10 }} >
                <View>
                    {/* <Text style={{ color: colors.TextColor, fontFamily: fonts.PoppinsRegular, fontSize: 10 }} >Last updated at</Text>
                    <Text style={{ color: colors.TextColor, fontFamily: fonts.PoppinsRegular, fontSize: 11 }} >Time</Text> */}
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: "center"
    },
    imgContainer: { marginVertical: 50 },
    titleContainer: { width: windowWidth / 1.30, height: windowHeight / 19, paddingHorizontal: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomColor: colors.TextColor, borderBottomWidth: 1 },
    titleText: { color: colors.TextColor }

})
export default CustomDrawer;      