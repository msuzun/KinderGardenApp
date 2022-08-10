import { SafeAreaView, StyleSheet, Text,TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopBar from '../../../Components/HomeWorkComponents/TopBar';
import CustomInput from "../../../Components/CustomInput/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { openStudentModal } from '../../../redux/action/studentSelectModalAction';
import { openNoteModal } from '../../../redux/action/selectNoteModalAction';
import StudentSelectModal from '../../../Components/HomeWorkComponents/SudentSelectModal';
import SelectNoteModal from '../../../Components/HomeWorkComponents/SelectNoteModal';

const HomeWork = () => {
  const dispatch = useDispatch();
    const state = useSelector((state) => state);
  return (
    <View style={{ flex: 1, backgroundColor: "whitesmoke", height: '100%' }}>
      <StudentSelectModal/>
      <SelectNoteModal/>
      <View style={{backgroundColor:"white",height:"100%",width:"100%"}}>
        <View style={{height:"100%",justifyContent:"center",alignItems:"center",flex:1}}>
          <TouchableOpacity style={{backgroundColor:"#ff830f",justifyContent:"center",alignItems:"center",width:"80%",height:"60%",borderRadius:50}} onPress={() => dispatch(openStudentModal())}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Öğrenci Seçimi</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#ddd9d4",height:"100%",justifyContent:"center",alignItems:"center",flex:1}}>
        <TouchableOpacity style={{backgroundColor:"#ff830f",justifyContent:"center",alignItems:"center",width:"80%",height:"60%",borderRadius:50}}  onPress={() => dispatch(openNoteModal())}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Hızlı Not Seçimi</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:"100%",flex:4,justifyContent:"flex-start",alignItems:"center"}}>
          <View style={{width:"80%",height:"50%",marginTop:25}}>
            <TextInput placeholder='Notunuzu giriniz' multiline numberOfLines={11} style={{ fontSize: 15, color: "black", backgroundColor: "#ddd9d4" }} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", width: "80%", height: "8%" }}>
            <View style={{flex: 6 }}>
              <TouchableOpacity style={{ height: "100%", backgroundColor: "grey", borderRadius: 50, justifyContent: "center", alignItems: "center", width: 125 }}>
                <Text style={{ fontWeight: "bold", fontStyle: "italic", color: "white" }}>Hızlı Notlara Ekle</Text>
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
        </View>
      </View>
      <TopBar />
    </View>
  )
}

export default HomeWork

const styles = StyleSheet.create({})