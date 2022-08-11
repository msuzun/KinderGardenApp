import {StyleSheet, Text, View, FlatList, Image, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
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

  const renderItem = ({item, index}) => {
    const onClickItem = deger => {
      const newArrData = data.map(e => {
        // newArrData = [...newArrData]
        if (item.id === e.id) {
          if (deger === 'button1') {
            return {
              ...e,
              selected: true,
              deger: 'button1',
            };
          } else if (deger === 'button2') {
            return {
              ...e,
              selected: true,
              deger: 'button2',
            };
          }
        } else {
          return {
            ...e,
          };
        }
      });
      setData(newArrData);
    };
    const ButtonRender = () => {
      return (
        <>
          <TouchableOpacity
            style={{
              backgroundColor:
                item.selected && item.deger === 'button1' ? 'green' : '#d3d3d3',
              borderRadius: 20,
              marginStart: 20,
            }}
            onPress={() => onClickItem('button1')}>
            <Feather name="check" size={30} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              left:10,
              backgroundColor:
                item.selected && item.deger === 'button2' ? 'red' : '#d3d3d3',
              borderRadius: 20,
            }}
            onPress={() => onClickItem('button2')}>
            <Feather name="x" size={30} />
          </TouchableOpacity>
        </>
      );
    };
    return (
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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonRender />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 20}}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({});
