import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Logo from './assets/person.jpg';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
const Attendance = () => {
  return (
    <SafeAreaView style={{justifyContent:'center',alignItems:'center'}}>
      <View style={{margin: 20, height: '20%', width:'20%',justifyContent:'center',alignItems:'center'}}>
        <Image
          source={Logo}
          style={{
            resizeMode: 'center',
            height: 50,
            width: 50,
          }}
        />
        <Text> Şevki Uzun</Text>
      </View>
      <View style={{width: '80%', width: '70%'}}>
        <Card style={{marginTop:25}}>
          <Card.Title title="Tarih" subtitle="16.08.2022" />
          <Card.Content>
            <Title>Yoklama</Title>
            <Paragraph>Var</Paragraph>
          </Card.Content>
        </Card>

        <Card style={{marginTop:25}}>
          <Card.Title title="Tarih" subtitle="17.08.2022" />
          <Card.Content>
            <Title>Yoklama</Title>
            <Paragraph>İzinli</Paragraph>
          </Card.Content>
        </Card>
        <Card style={{marginTop:25}}>
          <Card.Title title="Tarih" subtitle="18.08.2022" />
          <Card.Content>
            <Title>Yoklama</Title>
            <Paragraph>Var</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default Attendance;

const styles = StyleSheet.create({});
