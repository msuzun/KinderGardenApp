import {Modal, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, FlatList, ScrollView, LogBox } from 'react-native';
import React, { useState, useEffect, handleRegistration } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from "../../../../../Components/CustomInput/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { openStudentModal } from '../../../../../redux/action/studentSelectModalAction';
import { openNoteModal } from '../../../../../redux/action/selectNoteModalAction';
import { addSelectedNote } from "../../../../../redux/action/noteActions";
import { addSelectedStudents } from "../../../../../redux/action/selectedStudentActions";
import StudentSelectModal from '../../../../../Components/Modals/SudentSelectModal';
import SelectNoteModal from '../../../../../Components/Modals/SelectNoteModal';



const Otobus = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  const [modal, setModal] = useState(false);

  const studentsURL = "https://dummyjson.com/posts";
  useEffect(() => {
    fetch(studentsURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.posts);
      })
      .catch((error) => alert(error));
  }, []);

  //ANLAMSIZ HATAYI GİZLİYOR->
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])

  useEffect(() => {
    dispatch(addSelectedStudents([]));
    dispatch(addSelectedNote(""));
  }, []);


  let count = 0;
  //turuncu = #ff830f koyu beyaz = #ddd9d4
  return (
    <View style={{ flex: 1, backgroundColor: "whitesmoke", height: '100%' }}>
      <StudentSelectModal />
      <SelectNoteModal />
      <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', borderBottomWidth: 1, backgroundColor: "#646b7a", height: 40, width: "100%" }}>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Servis Detay</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <TouchableOpacity style={{
                                alignSelf: "flex-end", backgroundColor: "white",
                                borderRadius: 50, height: 35, width: 35,
                                justifyContent: "center"
                            }} onPress={() => setModal(false)}>
                                <Icon style={{ alignSelf: "center" }} name="close" size={28} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={{ width: "100%" }}>
                    <Icon name="image" size={180} style={{alignSelf:"center", marginLeft: 5 }} />
                        <Text style={{fontSize:18,padding:10}}>{selectedData}</Text>
                    </ScrollView>
                </View>

            </View>
        </Modal>
      <View style={{ backgroundColor: "white", height: 30, justifyContent: "center", alignItems: "center", borderBottomWidth: 0.5 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Servis Bildirimleri</Text>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (

            <TouchableOpacity onPress={() => {setSelectedData(item.body);setModal(true);}} style={(item.id % 2 === 0) ? styles.item : styles.itemTwo}>
              <Icon name="image" size={140} style={{ marginLeft: 5 }} />
              <ScrollView>
                <Text style={{ color: "black", fontSize: 15 }}>{item.body}</Text>
              </ScrollView>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  )
}

export default Otobus

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

  item:{
    flexDirection: "row", backgroundColor: "#ddd9d4", height: 140
  },
  itemTwo:{
    flexDirection: "row", backgroundColor: "white", height: 140
  }
})