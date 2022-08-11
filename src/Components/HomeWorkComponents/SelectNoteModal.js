import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { closeNoteModal } from '../../redux/action/selectNoteModalAction';
import SelectNoteItem from "./SelectNoteItem";

import {
    Alert,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

const SelectNoteModal = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={state.selectNoteModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', borderBottomWidth: 1, backgroundColor: "#646b7a", height: 40, width: "100%" }}>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Hızlı Not Seçimi</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <TouchableOpacity style={{
                                alignSelf: "flex-end", backgroundColor: "white",
                                borderRadius: 50, height: 35, width: 35,
                                justifyContent: "center"
                            }} onPress={() => dispatch(closeNoteModal())}>
                                <Icon style={{ alignSelf: "center" }} name="close" size={28} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={{ width: "100%" }}>
                        <SelectNoteItem/>
                        <SelectNoteItem/>
                        <SelectNoteItem/>
                        <SelectNoteItem/>
                        <SelectNoteItem/>
                    </ScrollView>
                </View>

            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        height: '90%',
        width: '90%',
        padding: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        backgroundColor: 'whitesmoke',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

});

export default SelectNoteModal;