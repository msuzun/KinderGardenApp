import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const showAlert = (message: string) => {
    alert(`${message}`);
}

const TopBar = () => {
    return (
        <View style={{ flexDirection: 'row', width: '100%', height: 55, backgroundColor: '#646b7a' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 2 }}>
                <TouchableOpacity onPress={() => showAlert("Çıkış Butonu")}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 6 }}>
                <Text style={{ fontSize: 25,fontWeight:'bold', color:"white", fontFamily: "sans-serif-medium" }}>Ödev</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center', flex: 3.8 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => showAlert("Bildirim Butonu")}>
                        <Icon name="bell" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => showAlert("Mesaj Butonu")}>
                        <Icon name="envelope" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
        </View>
    );
}
export default TopBar;