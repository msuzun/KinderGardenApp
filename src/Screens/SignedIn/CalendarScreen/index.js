import {addDays, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';


const data = {
  '2022-08-11' : [
    {
      name: 'test 1' , status : 'Var'
    },
    {
      name: 'test 2' , status : 'Var'
    },
    {
      name: 'test 3' , status : 'yok'
    },
    {
      name: 'test 4' , status : 'yok'
    },
  ],
  '2022-08-12':[
    {
      name: 'test 5' , status : 'yok'
    },
    {
      name: 'test 6' , status : 'var'
    },
  ]
}

const CalendarScreen = () => {
  const [items, setItems] = useState(data)

  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.status}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda items={items} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default CalendarScreen;