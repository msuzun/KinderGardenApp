import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import logo from '../../assets/akridalogo.png';


import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';

import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  function EmailChange(value) {
    setEmail(value);
  }
  function PasswordConfirmChange(value) {
    setPasswordConfirm(value);
  }
  const [email, setEmail] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState();
  const {height} = useWindowDimensions();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setData = async () => {
    if (email.length == 0 || passwordConfirm.length == 0) {
      Alert.alert('Warning!', 'Boş bırakılamaz');
    } else if (email !== 'admin' || passwordConfirm !== '12345') {
      Alert.alert('Warning!', 'Böyle bir kullanıcı yok');
    } else {
      try {
        var user = {
          name: 'Sevki',
          lastname: 'Uzun',
          Email: "sevki.meu@gmail.com",
          Tel: "12345"
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('Home')
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="E-mail"
          value={email}
          setValue={EmailChange}
        />
        <CustomInput
          placeholder="Password"
          value={passwordConfirm}
          setValue={PasswordConfirmChange}
          secureTextEntry={true}
        />

        <CustomButton text="Sign In" onPress={setData} />
        <CustomButton text="Forgot Password" type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
