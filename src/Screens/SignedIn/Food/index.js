import {StyleSheet, Text, View, FlatList, Image, Animated} from 'react-native';
import React, {useState,useEffect ,useRef} from 'react';
import SelectList from 'react-native-dropdown-select-list';
import SelectDropdown from 'react-native-select-dropdown';
import Feather from 'react-native-vector-icons/Feather';

const Food = () => {
  function PressSmile() {
    console.warn('Smile');
  }
  function PressSad() {
    console.warn('Sad');
  }
  function PressMeh() {
    console.warn('Meh');
  }
  const [selected, setSelected] = React.useState('');
  const Selectdata = ['Sabah', 'İkindi'];
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
    <View style={{flex: 1}}>
      <View
        style={{marginTop: 15, alignItems: 'center', justifyContent: 'center'}}>
        <SelectDropdown
          data={Selectdata}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText="Öğün Seç"
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
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
                marginStart: 5,
                flexDirection: 'row',
              }}>
              <Feather
                name="smile"
                size={30}
                style={{padding: 5}}
                onPress={PressSmile}
              />
              <Feather name="meh" size={30} onPress={PressMeh} style={{padding: 5}}/>
              <Feather name="frown" size={30} onPress={PressSad} style={{padding: 5}} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({});
