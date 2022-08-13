import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState, useEffect,handleRegistration } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from "../../../Components/CustomInput/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { openStudentModal } from '../../../redux/action/studentSelectModalAction';
import { openNoteModal } from '../../../redux/action/selectNoteModalAction';
import {addSelectedNote} from "../../../redux/action/noteActions";
import {addSelectedStudents} from "../../../redux/action/selectedStudentActions";
import StudentSelectModal from '../../../Components/Modals/SudentSelectModal';
import SelectNoteModal from '../../../Components/Modals/SelectNoteModal';



const Otobus = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(addSelectedStudents([]));
    dispatch(addSelectedNote(""));
  }, []);

  function postDatas(){
    if(!state.selectedStudents.length){
      alert("Öğrenci seçilmedi");
    }else{
      alert("index.js/postDatas()\n\nSeçili Öğrenci Id'leri : "+state.selectedStudents+"\n\nNot : "+state.selectedNote);
    }
  }
  function addNote(note){
    alert("index.js/addNote(note)\n\nHızlı Notlara Ekle =\n\n" + note);
  }
  function clearNote(){
    dispatch(addSelectedNote(""));
  }

  return (
    <View style={{ flex: 1, backgroundColor: "whitesmoke", height: '100%' }}>
      <StudentSelectModal />
      <SelectNoteModal />
      <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
        <View style={{ height: "100%", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <TouchableOpacity style={{ backgroundColor: "#ff830f", justifyContent: "center", alignItems: "center", width: "80%", height: "60%", borderRadius: 50 }} onPress={() => dispatch(openStudentModal())}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Öğrenci Seçimi</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#ddd9d4", height: "100%", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <TouchableOpacity style={{ backgroundColor: "#ff830f", justifyContent: "center", alignItems: "center", width: "80%", height: "60%", borderRadius: 50 }} onPress={() => dispatch(openNoteModal())}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Hızlı Not Seçimi</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "100%", flex: 4, justifyContent: "flex-start", alignItems: "center" }}>
          <View style={{ width: "80%", height: "50%", marginTop: 25 }}>
            <TextInput placeholder='Notunuzu giriniz' onChangeText={newText => dispatch(addSelectedNote(newText))} multiline numberOfLines={11} style={{ fontSize: 15, color: "black", backgroundColor: "#ddd9d4" }} >
            <Text>{state.selectedNote}</Text>
            </TextInput>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", width: "80%", height: "8%" }}>
            <View style={{flexDirection: "row", flex: 6 }}>
              <TouchableOpacity onPress={() => addNote(state.selectedNote)} style={{ height: "100%", backgroundColor: "grey", borderRadius: 50, justifyContent: "center", alignItems: "center", width: 125 }}>
                <Text style={{ fontWeight: "bold", fontStyle: "italic", color: "white" }}>Hızlı Notlara Ekle</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => clearNote()} style={{ height: "100%", backgroundColor: "grey", borderRadius: 50, justifyContent: "center", alignItems: "center", width: 70 }}>
                <Text style={{ fontWeight: "bold", fontStyle: "italic", color: "white" }}>Temizle</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: "100%", width: 50 }}>
                <Icon name="camera" size={25} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: "100%", width: 50 }}>
                <Icon name="paperclip" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width:"100%",height:150,justifyContent:"center",alignItems:"center"}}>
           <TouchableOpacity style={{backgroundColor:"#228b22",padding:10,borderRadius:15}} onPress={()=>postDatas()}>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>Gönder</Text>
           </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Otobus

const styles = StyleSheet.create({})