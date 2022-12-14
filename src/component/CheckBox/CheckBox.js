/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { colors } from '../../assets/colors';


const CustomCheckBox = ({ HeadingName, Value, stateFunction }) => {
    const [checked, setChecked] = useState(Value);
    const [disableEdit, setdisableEdit] = useState(false);



    const SetValue = (val) => {
        setChecked(val);
        stateFunction(!checked);
        console.log(val, 'Changed Value');
    };





    return (
        <View style={styles.CheckAreaView} >
            <Text style={styles.TextColor} >{HeadingName}</Text>

            <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                color="#155B9F"
                onPress={() => {
                    SetValue(!checked);
                }}
                disabled={disableEdit}
            />
        </View>
    );
};

export default CustomCheckBox;


const styles = StyleSheet.create({
    TextColor: {
        fontSize: 16,
        marginBottom: 5,
        color: colors.Black,
    },
    CheckAreaView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginVertical: 10,
        // padding: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 50,
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

});

