import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';

import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn('Submit');
    navigation.navigate('SignInScreen');
  };

  const onSingInPress = () => {
    console.warn('Sign Up');
    navigation.navigate('SignInScreen');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Reset your password</Text>

        <CustomInput placeholder="code" value={code} setValue={setCode} />
        <CustomInput
          placeholder="Enter your new pasword"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton text="Geri Dön" onPress={onSingInPress} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
