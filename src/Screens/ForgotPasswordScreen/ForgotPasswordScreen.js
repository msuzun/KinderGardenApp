import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, setUserName] = useState('');

  const navigation = useNavigation();
  const onSendPressed = () => {
    console.warn('Send');
    navigation.navigate('NewPasswordScreen');
  };

  const onSingInPress = () => {
    console.warn('Sign Up');
    navigation.navigate('SignInScreen');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Reset your password</Text>

        <CustomInput
          placeholder="username"
          value={username}
          setValue={setUserName}
        />

        <CustomButton text="Send" onPress={onSendPressed} />

        <CustomButton text="Geri Dön" onPress={onSingInPress} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
