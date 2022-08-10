import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const StudentSelectItem = () => {
    return (
        <View style={{ width: "100%", height: 155, borderBottomWidth: 1 }}>
            <View style={{ flex: 5 }}>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                       centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                    </Text>
            </View>
            <View style={{ flexDirection: "row", flex: 2, margin: 2 }}>
                <TouchableOpacity style={{ backgroundColor: "green", width: 60, justifyContent: 'center', alignItems: "center", borderRadius: 50 }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Seç</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 10, backgroundColor: "red", width: 60, justifyContent: 'center', alignItems: "center", borderRadius: 50 }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Sil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default StudentSelectItem;