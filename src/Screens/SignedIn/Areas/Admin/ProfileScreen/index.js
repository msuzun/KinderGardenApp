import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const ProfileScreen = () => {
  const [ogrAd,setOgrAd] = useState("Ahmet Öğretmen");
  const [ogrMail,setOgrMail] = useState("ogr@hotmail.com");
  const [ogrTelefon,setOgrTelefon] = useState("02124190505");
  const [ogrSifre,setOgrSifre] = useState("123456");

  const [okulAd,setOkulAd] = useState("Akrida Çamlıca");
  const [okulTelefon,setOkulTelefon] = useState("02163262448");
  const [okulAdres,setOkulAdres] = useState("Bulgurlu, Blugurlu Cd. No:12, 34760 Üsküdar/İstanbul");
  const [okulYetkili,setOkulYetkili] = useState("Büşra Aklan");
  const [okulYetkiliTelefon,setOkulYetkiliTelefon] = useState("05352657888");


  function saveChanges(){
    alert("Değişiklikleri Kaydet");
  }

  function signOut(){
    alert("Çıkış Yap");
  }
  return (
    <SafeAreaView style={{ backgroundColor: "whitesmoke", height: "100%" }}>
      
      <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white", height: 180, borderBottomWidth: 0.5 }}>
        <View style={{ backgroundColor: "#93CAED", borderRadius: 50, height: 110, width: 110, justifyContent: "center", alignItems: "center" }}>
          <Icon name="user" size={74} />
        </View>
        <Text style={{ fontSize: 22 }}>{ogrAd}</Text>
      </View>
      <ScrollView>
        <View style={{ borderWidth:0.5,flexDirection: "row", backgroundColor: "whitesmoke", height: 60 }}>
          <TouchableOpacity style={{ flexDirection:"row",justifyContent:"center",alignItems:"center", flex: 1 }}>
            <Icon name='user' size={45}/>
            <Text style={{fontSize:25,paddingLeft:5,fontStyle:"italic",fontWeight:"bold"}}>Öğretmen Bilgileri</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Adı</Text>
          <TextInput style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15}}>{ogrAd}</Text>
          </TextInput>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Mail</Text>
          <TextInput style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15}}>{ogrMail}</Text>
          </TextInput>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Telefon</Text>
          <TextInput style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15}}>{ogrTelefon}</Text>
          </TextInput>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Şifre</Text>
          <TextInput style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15}}>{ogrSifre}</Text>
          </TextInput>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <TouchableOpacity onPress={()=>saveChanges()} style={{backgroundColor:"#93CAED",height:35,justifyContent:"center",alignItems:"center"}}><Text>Kaydet</Text></TouchableOpacity>
        </View>
        
        <View style={{ borderWidth:0.5,flexDirection: "row", backgroundColor: "whitesmoke", height: 60 }}>
          <TouchableOpacity style={{ flexDirection:"row",justifyContent:"center",alignItems:"center", flex: 1 }}>
            <Icon name='building' size={45}/>
            <Text style={{fontSize:25,paddingLeft:5,fontStyle:"italic",fontWeight:"bold"}}>Okul Bilgileri</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Adı</Text>
          <TextInput editable={false} style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{okulAd}</Text>
          </TextInput>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Telefon</Text>
          <TextInput editable={false} style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{okulTelefon}</Text>
          </TextInput>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Adres</Text>
          <TextInput editable={false} style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{okulAdres}</Text>
          </TextInput>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Yetkili</Text>
          <TextInput editable={false} style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{okulYetkili}</Text>
          </TextInput>
        </View>
        <View style={{borderBottomWidth:0.5}}>
          <Text style={{fontSize:15,color:"black",paddingStart:15,paddingTop:5}}>Yetkili Telefon</Text>
          <TextInput editable={false} style={{paddingLeft:15,paddingBottom:0,paddingTop:0}}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{okulYetkiliTelefon}</Text>
          </TextInput>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", height: 40 }}>
        <TouchableOpacity onPress={()=>signOut()} style={{ flexDirection: "row", height: "100%", alignItems: "center" }}>
          <Text style={{ marginRight: 8, fontWeight: "bold", fontSize: 17,color:"#FF3333" }}>Çıkış Yap</Text>
          <Icon name="arrow-right" size={30} style={{color:"#FF3333"}}/>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
