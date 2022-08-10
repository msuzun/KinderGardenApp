import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';

import SocialMediaButtons from '../../Components/SocialMediaButtons/SocialMediaButton';
import {useNavigation} from '@react-navigation/native';

import FormSuccess from '../../Components/FormSuccess/FormSuccess';
import FormError from '../../Components/FormError/FormError';

import auth from '@react-native-firebase/auth';

import BackIcon from 'react-native-vector-icons/Feather';
const SignUpScreen = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [displayFormErr, setDisplayFormErr] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const [successMessage, setsuccessMessage] = useState('');
  const [loading, setIsLoading] = useState(false);

  function UserNameChange(value) {
    setUserName(value);
  }
  function EmailChange(value) {
    setEmail(value);
  }
  function PasswordChange(value) {
    setPasword(value);
  }
  function PasswordRepeatChange(value) {
    setPasswordRepeat(value);
  }
  const onRegisterPressed = () => {
    console.warn('Confirm Email');
    navigation.navigate('ConfirmEmailScreen');
  };

  const onSingInPress = () => {
    console.warn('Sign In');
    navigation.navigate('SignInScreen');
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  function createUser() {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setIsLoading(false);
        user.user.updateProfile({displayName:username})
        setsuccessMessage('Your account created.');
      })
      .catch(err => {
        setIsLoading(false);
        seterrorMessage(err.message);
        setDisplayFormErr(true);
      });
  }
  const validatForm = () => {
    var form_inputs = [username, email, password, passwordRepeat];
    var passwords_match = password == passwordRepeat;

    if (form_inputs.includes('') || form_inputs.includes(undefined)) {
      return (
        setDisplayFormErr(true), seterrorMessage('Please fill in all fields')
      );
    }
    if (!passwords_match) {
      return setDisplayFormErr(true), seterrorMessage('Passwords do not match');
    }
    if (passwords_match) {
      return createUser();
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Create an Account</Text>

        <CustomInput
          placeholder="username"
          value={username}
          setValue={UserNameChange}
        />
        <CustomInput placeholder="email" value={email} setValue={EmailChange} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={PasswordChange}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={PasswordRepeatChange}
          secureTextEntry={true}
        />

        <SocialMediaButtons />
        <CustomButton text="Register" onPress={validatForm} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use{' '}
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text="Hesabınız var ise tıklayınız"
          onPress={onSingInPress}
          type="TERTIARY"
        />
      </View>
      {
        displayFormErr == true ?
        <FormError  hideErrOverlay={setDisplayFormErr} err={errorMessage}/>
        :
        null
      }
       {
        loading == true ?
          <FormSuccess /> 
          :
          successMessage =="Your account created."?
          <FormSuccess successMessage={successMessage} closeSuccess={setsuccessMessage}/>
          :
          null
       }
    </ScrollView>
    
  );
};

export default SignUpScreen;

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
