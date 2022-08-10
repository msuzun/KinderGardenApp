import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialMediaButton = () => {
  const onSignInFacebook = () => {
    console.warn('Facebook');
  };
  const onSignInGoogle = () => {
    console.warn('Instagram');
  };
  const onSignInGithub = () => {
    console.warn('Website');
  };
  return (
    <>
      <CustomButton
        text="Facebook hesabımız"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Instagram hesabımız"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Website"
        onPress={onSignInGithub}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialMediaButton;

const styles = StyleSheet.create({});
