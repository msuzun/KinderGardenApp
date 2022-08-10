import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import logo from '../../assets/akridalogo.png';
import FormError from '../../Components/FormError/FormError';
import FormSuccess from '../../Components/FormSuccess/FormSuccess';

import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import SocialMediaButtons from '../../Components/SocialMediaButtons/SocialMediaButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const SignInScreen = ({navigation}) => {
  // const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState();
  const {height} = useWindowDimensions();
  const [errorMessage, seterrorMessage] = useState();
  const [displayFormErr, setDisplayFormErr] = useState(false);
  const [loading, setIsLoading] = useState(false);

  function EmailChange(value) {
    setEmail(value);
  }
  function PasswordConfirmChange(value) {
    setPasswordConfirm(value);
  }
  const validateInput = () => {
    var form_inputs = [email, passwordConfirm];
    if (form_inputs.includes('') || form_inputs.includes(undefined)) {
      return (
        setDisplayFormErr(true), seterrorMessage('Please fill in all fields')
      );
    }
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, passwordConfirm)
      .then(() => {
        setIsLoading(false);
      })
      .catch(err => {
        return (
          setDisplayFormErr(true),
          seterrorMessage(err.message),
          setIsLoading(false)
        );
      });
  };
  const onForgotPassword = () => {
    console.warn('Forgot Password');
    navigation.navigate('ForgotPasswordScreen');
  };

  const onSingUpPress = () => {
    console.warn('Sign Up');
    navigation.navigate('SignUpScreen');
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

        <CustomButton text="Sign In" onPress={validateInput} />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPassword}
          type="TERTIARY"
        />

        <SocialMediaButtons />

        <CustomButton
          text="Don't have an account? Create One"
          onPress={onSingUpPress}
          type="TERTIARY"
        />
      </View>
      {displayFormErr == true ? (
        <FormError hideErrOverlay={setDisplayFormErr} err={errorMessage} />
      ) : null}
      {loading == true ?
        <FormSuccess />
        :
        null
      }
    </ScrollView>
  );
};

export default SignInScreen;

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
