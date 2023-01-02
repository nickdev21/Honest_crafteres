/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
// import { TimeLineAPI } from '../../api';
import moment from 'moment';
import { windowHeight, windowWidth } from '../utils/Dimension';
import { colors } from '../assets/colors';


const RenderTimeLine = (props) => {


    const StepTitle = [
        {
            id: '1',
            title: 'Inquiry Assigned.',
            time: props?.TimeLine?.service_scheduled?.time,
            date: (moment(props?.TimeLine?.service_scheduled?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.service_scheduled?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineFirstColor,

        },
        {
            id: '2',
            title: 'Quotation Created.',
            time: props?.TimeLine?.quote_created?.time,
            date: (moment(props?.TimeLine?.quote_created?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.quote_created?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineSecondColor,
        },
        {
            id: '3',
            title: 'Quotation Sent.',
            time: props?.TimeLine?.quotation_approved_internally?.time,
            date: (moment(props?.TimeLine?.quotation_approved_internally?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.quotation_approved_internally?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineThirdColor,
        },
        {
            id: '4',
            title: 'Quotation Approved.',
            time: props?.TimeLine?.vehicle_in_workshop?.time,
            date: (moment(props?.TimeLine?.vehicle_in_workshop?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.vehicle_in_workshop?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineFourthColor,
        },
        {
            id: '5',
            title: 'Payment Done.',
            time: props?.TimeLine?.material_requested?.time,
            date: (moment(props?.TimeLine?.material_requested?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.material_requested?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineFifthColor,
        },
        {
            id: '6',
            title: 'Invoice Created.',
            time: props?.TimeLine?.material_collected?.time,
            date: (moment(props?.TimeLine?.material_collected?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.material_collected?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineSixColor,
        },
        {
            id: '7',
            title: 'Invoice Sent.',
            time: props?.TimeLine?.repair_complete?.time,
            date: (moment(props?.TimeLine?.repair_complete?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.repair_complete?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineSevenColor,
        },
        {
            id: '8',
            title: 'Pickup Scheduled.',
            time: props?.TimeLine?.vehicle_in_quality_control?.time,
            date: (moment(props?.TimeLine?.vehicle_in_quality_control?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.vehicle_in_quality_control?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineEightColor,
        },
        {
            id: '9',
            title: 'Pickup Done.',
            time: props?.TimeLine?.vehicle_quality_control_complete?.time,
            date: (moment(props?.TimeLine?.vehicle_quality_control_complete?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.vehicle_quality_control_complete?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineNineColor,
        },
        {
            id: '10',
            title: 'Physical Aassessment Done',
            time: props?.TimeLine?.vehicle_in_wash_queue?.time,
            date: (moment(props?.TimeLine?.vehicle_in_wash_queue?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.vehicle_in_wash_queue?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineTenColor,
        },
        {
            id: '11',
            title: 'Update Sent To Customer',
            time: props?.TimeLine?.wash_completed?.time,
            date: (moment(props?.TimeLine?.wash_completed?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.wash_completed?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineEleevenColor,
        },
        {
            id: '12',
            title: 'Ordering Of Parts.',
            time: props?.TimeLine?.invoice_discharge_voucher_generated?.time,
            date: (moment(props?.TimeLine?.invoice_discharge_voucher_generated?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.invoice_discharge_voucher_generated?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineTwelveColor,
        },
        {
            id: '13',
            title: 'Service Assigned',
            time: props?.TimeLine?.delivered?.time,
            date: (moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineThirteenColor,
        },
        {
            id: '14',
            title: 'Service Completed',
            time: props?.TimeLine?.delivered?.time,
            date: (moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineFourteenColor,
        },
        {
            id: '15',
            title: 'QC Checks Done',
            time: props?.TimeLine?.delivered?.time,
            date: (moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineFifteenColor,
        },
        {
            id: '16',
            title: 'Update To Customer',
            time: props?.TimeLine?.delivered?.time,
            date: (moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineSixteenColor,
        },
        {
            id: '17',
            title: 'Arranged Delivery',
            time: props?.TimeLine?.delivered?.time,
            date: (moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineSevenTeenColor,
        },
        {
            id: '18',
            title: 'Delivery Trip Scheduled',
            time: props?.TimeLine?.delivered?.time,
            date: (moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineEighteenColor,
        },
        {
            id: '19',
            title: 'Items Delivered',
            time: props?.TimeLine?.delivered?.time,
            date: (moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY') === 'Invalid date' ? 'Pending' : moment(props?.TimeLine?.delivered?.date).format('DD MMM YYYY')),
            CircleColor: colors.TimeLineNineteenColor,
        },
    ];

    function getIndex(id) {
        return StepTitle.findIndex(obj => obj.id === id);
    }

    return (
        <View>
            <View style={styles.RowTimeLineWrapper}>
                {
                    StepTitle.map((item, i, StepTitle) => (
                        <View style={styles.RowStepAndTitleWrap} key={i}>
                            <View style={styles.RowTimeLine} >

                                <View style={[styles.RowTimeLineCircleCompleted, { backgroundColor: item.CircleColor }]}>
                                    <View style={styles.InnerCircle} />
                                </View>

                                {StepTitle.length - 1 === i ?
                                    null :
                                    <View style={styles.LineArea} >
                                    <View style={styles.FirstRowDownLine} />
                                    <View style={styles.FirstRowDownLine} />
                                    <View style={styles.FirstRowDownLine} />
                                    <View style={styles.FirstRowDownLine} />
                                    <View style={styles.FirstRowDownLine} />
                                    <View style={styles.FirstRowDownLine} />
                                    <View style={styles.FirstRowDownLine} />
                                    <View style={styles.FirstRowDownLine} />
                                    {/* <View style={styles.FirstRowDownLine} />
                                    <View style={styles.FirstRowDownLine} /> */}
                                    </View>
                                }
                            </View>
                            <View style={styles.RowTimeLineSteps}>
                                <View style={styles.RowNameAndTIme} key={i}>
                                    <Text style={styles.TimeLineItemTitle}>{item.title}</Text>
                                        <Text style={styles.DateAndTime}>{item.date},10:00 am</Text>
                                    {item.date === 'Pending' ? null
                                        :
                                        <Text style={styles.DateAndTime}>{item.time}</Text>
                                    }
                                </View>

                            </View>
                        </View>
                    ))
                }
            </View>
        </View>

    );
};

export default RenderTimeLine;

const styles = StyleSheet.create({

    RowTimeLineWrapper:
    {
        // border: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingVertical: 10,
        // backgroundColor: 'red',
    },
    TimeLineWrap:
    {
        marginVertical: 20,
    },

    RowStepAndTitleWrap:
    {
        flexDirection: 'row',
    },


    RowTimeLineSteps:
    {
        // backgroundColor: 'pink',
        width: '80%',
        /* backgroundColor: red, */
        // flexDirection: 'row',
        // paddingBottom: 15,
        marginVertical: 2,
        minHeight: windowHeight / 10,
        // justifyContent: 'center',
        // alignSelf: 'center',
        // alignItems: 'center',
    },


    RowNameAndTIme:
    {
        // backgroundColor: 'green',
        width: '100%',
        bottom: 10,
        minHeight: 40,
        justifyContent: 'center',
        // alignSelf: 'center',
    },

    TimeLineItemTitle:
    {
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
    },

    DateAndTime:
    {

        color: '#777',
        fontSize: 15,
    },

    RowTimeLine:
    {
        width: '20%',
        /* margin:2 , */
        // borderColor: '#fff',
        // borderWidth: 0.5,
        // backgroundColor: "yellow",
    },

    RowTimeLineCircle:
    {

        backgroundColor: '#B3B3B3',
        width: 25,
        height: 25,
        borderRadius: 14,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%',
    },

    RowTimeLineCircleIncomplete:
    {
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 14,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%',
        zIndex: 2,
        borderColor: '#B3B3B3',
        borderWidth: 1,
    },

    RowTimeLineCircleCompleted:
    {

        backgroundColor: '#0DAF4B',
        // backgroundColor: 'skyblue',
        width: windowWidth / 25,
        height: windowHeight / 50,
        borderRadius: 14,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%',
        zIndex: 2,
    },

    RowTimeLineCircleOngoing:
    {

        backgroundColor: '#FFA600',
        width: 30,
        height: 30,
        borderRadius: 14,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%',
        zIndex: 5,
    },


    RowDownLine:
    {

        backgroundColor: '#B3B3B3',
        // backgroundColor: #000,
        height: 3,
        transform: [{ rotate: '90deg' }],
        /* position: absolute, */
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        /* bottom: 30%, */
        width: '121%',
        zIndex: -3,
        // content: '',
        // backgroundColor: "blue",
    },
    LineArea:{
        // backgroundColor: 'pink',
        height: '100%',
        width: 50,
        position: 'absolute',
        // justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: -3,
                // borderWidth: 0.5,
    },
    FirstRowDownLine:
    {
        height: '10%',
        backgroundColor: colors.TimeColorLine,
        width: '2%',
        marginVertical: 1,
        // transform: [{ rotate: "90deg" }],
        // position: 'absolute',
        // justifyContent: 'center',
        // alignSelf: 'center',
        // alignItems: 'center',
        /* bottom: 30%, */
        // borderColor: colors.TimeColorLine,
        // borderWidth: 0.5,
        // borderStyle: 'dashed',

        // borderStyle: 'dotted',
        // borderLeftWidth: 0.5,
        // content: '',
    },

    RowBottomLine: {

        backgroundColor: '#ddd',
        height: '2%',
        position: 'absolute',
        width: '100%',
        bottom: 2,
        // content: '',
    },
    InnerCircle: {
        backgroundColor: 'white',
        height: '35%',
        width: '35%',
        borderRadius: 150,
        // content: '',
    },

    RowStepTick:
    {

    },

});
