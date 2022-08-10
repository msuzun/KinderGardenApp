import {StyleSheet, Text, View, FlatList, Image, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
const Attendance = () => {
  function PressYes() {
    console.warn('Yes');
  }
  function PressNo() {
    console.warn('No');
  }
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const getApi = () => {
    fetch('http://192.168.1.36:3000/user')
      .then(response => response.json())
      .then(responJson => setData(responJson), setIsLoading(false));
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          width:'90%',
          flexDirection: 'row',
          padding: 20,
          margin: 20,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: 22,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.3,
          shadowRadius: 20,
          elevation: 3,
        }}>
        <View>
          <Text style={{margin:10,fontSize: 22, fontWeight: '700'}}>Tümünü Seç</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 77,
            flexDirection: 'row',
          }}>
          <Feather
            name="check"
            size={30}
            style={{padding: 10}}
            onPress={PressYes}
          />
          <Feather name="x" size={30} onPress={PressNo} />
        </View>
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 20}}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              marginBottom: 20,
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 22,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 20,
              elevation: 3,
            }}>
            <Image
              source={{uri: item.thumbnail}}
              style={{width: 70, height: 70, borderRadius: 70, marginRight: 10}}
            />
            <View>
              <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
              <Text style={{fontSize: 22, fontWeight: '700'}}>{item.lastname}</Text>
              <Text style={{fontSize: 18, opacity: 0.7, color: 'blue'}}>
                {item.school}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginStart: 30,
                flexDirection: 'row',
              }}>
              <Feather
                name="check"
                size={30}
                style={{padding: 10}}
                onPress={PressYes}
              />
              <Feather name="x" size={30} onPress={PressNo} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({});
