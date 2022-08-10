import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

const StudentSelectItem = () => {
    return (
        
        <View style={{ flexDirection: "row", height: 80, width: "100%" }}>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
            </View>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                <Icon name='user' size={45} color="black" />
            </View>
            <View style={{ flex: 6, justifyContent: "center", alignItems: "flex-start" }}>
                <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>İsim Soyisim</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: "green",
    },
});
export default StudentSelectItem;