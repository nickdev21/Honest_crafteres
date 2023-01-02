/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CommonHeader from '../../component/Headers/CommonHeader';
import { colors } from '../../assets/colors';
import SearchInput from '../../component/Input/SearchInput';

const Search = () => {

    const SearchHeaderData = {
        HeaderTitile: 'Search',
    };

    return (
        <View style={styles.SearchWrapper} >
            <CommonHeader data={SearchHeaderData} />
            <SearchInput style={styles.ButtonStyles} />
        </View>
    );
};

export default Search;





const styles = StyleSheet.create({
    SearchWrapper: {
        backgroundColor: colors.whiteColor,
        flex: 1,
        // flexDirection: 'row',
    },
    ButtonStyles: {
        width: '90%',
    },

});
