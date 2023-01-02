/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { windowHeight } from '../../utils/Dimension';

const BottomSheet = (props) => {

    const { RenderComp, reference, BSheight } = props;

    return (
        <>

            <RBSheet
                ref={reference}
                height={BSheight ? BSheight : windowHeight / 2}
                //   closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(32, 32, 32, 0.5)',
                    },
                    // draggableIcon: {
                    //   backgroundColor: '#DADCE5',
                    //   width: 100,
                    // },
                    container: {
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                    }
                }}
            >
                <RenderComp />
            </RBSheet>
        </>

    );
};

export default BottomSheet;
