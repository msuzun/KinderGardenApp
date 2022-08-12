import React, { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { closeStudentModal } from '../../redux/action/studentSelectModalAction';
import StudentSelectItem from "./StudentSelectItem";

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
    Image,
    FlatList,
    LogBox 
} from 'react-native';

const StudentSelectModal = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [data, setData] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState([]);

    const studentsURL = "https://jsonplaceholder.typicode.com/users"; 
    useEffect(() => {
        fetch(studentsURL)
          .then((response) => response.json())
          .then((json) => {
            setData(json);
          })
          .catch((error) => alert(error));
      }, []);

      //ANLAMSIZ HATAYI GİZLİYOR->
      useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
      }, [])


      function addSelectStudent(id){

        let exist = false;
        for (let studentId of selectedStudent) {
            if (studentId === id) {
                exist = true;
            }
        }
        if (exist === false) {
            setSelectedStudent(current => [...current, id]);
        } else {
            var index = selectedStudent.indexOf(id);

            if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
                selectedStudent.splice(index, 1);
                setSelectedStudent(current => [...current]);
            }
        }
    }
    function deleteSelectStudents() {
        setSelectedStudent([]);
    }
    function selectAllStudents() {
        for (let item of data) {
            setSelectedStudent(current => [...current, item.id]);
        }
    }
    function isExistSelectStudent(id) {
        for (let studentId of selectedStudent) {
            if (studentId === id) {
                return true;
            }
        }
        return false;
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={state.studentSelectModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', borderBottomWidth: 1, backgroundColor: "#646b7a", height: 40, width: "100%" }}>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Öğrenci Seç{selectedStudent}{/*Buradaki state silinecek*/}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <TouchableOpacity style={{
                                alignSelf: "flex-end", backgroundColor: "white",
                                borderRadius: 50, height: 35, width: 35,
                                justifyContent: "center"
                            }} onPress={() => dispatch(closeStudentModal())}>
                                <Icon style={{ alignSelf: "center" }} name="close" size={28} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={{ width: "100%" }}>
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: "row", height: 80, width: "100%" }}>
                                    <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                                        <TouchableOpacity onPress={()=>addSelectStudent(item.id)} style={isExistSelectStudent(item.id) === false ? styles.checkbox:styles.checked}></TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                                        <Icon name='user' size={45} color="black" />
                                    </View>
                                    <View style={{ flex: 6, justifyContent: "center", alignItems: "flex-start" }}>
                                        <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>{item.name}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </ScrollView>
                    <View style={{ backgroundColor: "whitesmoke", height: 50, width: "100%", flexDirection: "row", borderTopWidth: 1 }}>

                        <TouchableOpacity onPress={()=>selectAllStudents()} style={{ width: "50%", justifyContent: "center", alignItems: "center", borderRightWidth: 1 }}>
                            <Text style={{ color: "black", fontSize: 19, fontWeight: "bold" }}>Tümünü Ekle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>deleteSelectStudents()} style={{ width: "50%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "black", fontSize: 19, fontWeight: "bold" }}>Tümünü Kaldır</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: "green",
    },
    checked: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: "green",
        backgroundColor:"green"
    },
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

export default StudentSelectModal;