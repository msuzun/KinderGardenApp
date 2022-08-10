import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Avatar, Title, Subheading, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
const ProfileScreen = ({navigation, route}) => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');

  const signOut = () => {
    auth().signOut();
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      SetName(user?.displayName ?? 'Boş');
      SetEmail(user?.email ?? '');
    });
  }, []);
  return (
    <View style={styles.mainView}>
      <Avatar.Text
        label={name
          .split(' ')
          .reduce((prev, current) => prev + current[0] + current[1], '')}
      />
      <Title>{name}</Title>
      <Subheading>{email}</Subheading>
      <TouchableOpacity onPress={signOut} style={styles.Button}>
        <Text style={styles.ButtonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: '90%',
    color: '#000',
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
