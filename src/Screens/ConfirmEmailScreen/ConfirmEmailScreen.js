import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn('Confirm');
    navigation.navigate('HomeScreen');
  };

  const onSingInPress = () => {
    console.warn('Sign In');
    navigation.navigate('SignInScreen');
  };

  const onRecendCodePress = () => {
    console.warn('onRecendCodePress');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Tekrar gönder"
          onPress={onRecendCodePress}
          type="SECONDARY"
        />
        <CustomButton text="Geri Dön" onPress={onSingInPress} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

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
