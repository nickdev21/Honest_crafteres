/* eslint-disable prettier/prettier */
import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { windowHeight } from '../../utils/Dimension';
import { colors } from '../../assets/colors';
import { SearchInput_Icon } from '../../assets/Icons';
import fonts from '../../assets/fonts';

const SearchInput = (props) => {
    const [searchContent, setsearchContent] = useState()

    return (
        <View style={[styles.SearchWrapper, props?.style]} >
            <View style={styles.SearchIconStyle} >
                <SearchInput_Icon width={'60%'} height={'60%'} />
            </View>
            <TextInput style={styles.searchText}
                value={searchContent}
                onChangeText={text => setsearchContent(text)}
                placeholder="Search here.."
                placeholderTextColor={colors.SearchPlaceHOlderColor} />

        </View>
    );
};

export default SearchInput;



const styles = StyleSheet.create({
    SearchWrapper: {
        width: '100%',
        height: windowHeight / 18,
        marginVertical: '5%',
        paddingHorizontal: 2,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: colors.SearchBorder,
        borderWidth: 1,
        borderRadius: 100,
        
    },
    searchText: {
        color: '#000',
        flex: 1,
        fontSize: 14,
        height: '100%',
        paddingLeft: 12,
        fontsFamily: fonts.PoppinsMedium,
    },
    SearchIconStyle: {
        width: '10%',
        height: '100%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconArea: {
        width: '15%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: '#155B9F',
    },
    CloseIconArea: {
        marginHorizontal: 5,
    },
})