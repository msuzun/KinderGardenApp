import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import SelectList from 'react-native-dropdown-select-list';
import SelectDropdown from 'react-native-select-dropdown';
import Feather from 'react-native-vector-icons/Feather';

const Food = () => {
  const [selected, setSelected] = React.useState('');
  const Selectdata = ['Sabah', 'İkindi'];
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const getApi = () => {
    fetch('http://192.168.1.36/UserList.php')
      .then(response => response.json())
      .then(responJson => setData(responJson), setIsLoading(false));
  };
  useEffect(() => {
    getApi();
  }, []);
  const InsertDataToServer = () => {
    const listSelected3 = data.filter(
      item => item.status == 'çok' || item.status == 'orta' || item.status=='az',
    );
    listSelected3.forEach(item => {
      fetch('http://192.168.1.36/FoodSave.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: item.id,
          name: item.name,
          lastname: item.lastname,
          school: item.school,
          status: item.status,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {})
        .catch(error => {});
    });
    UpdateDataToServer();
  };
  const UpdateDataToServer = () => {
    const listSelected3 = data.filter(
      item => item.status == 'çok' || item.status == 'orta' || item.status=='az',
    );
    listSelected3.forEach(item => {
      fetch('http://192.168.1.36/FoodUpdate.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: item.id,
          name: item.name,
          lastname: item.lastname,
          school: item.school,
          status: item.status,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {})
        .catch(error => {});
    });
  };
  const renderItem = ({item, index}) => {
    const onClickItem = deger => {
      const newArrData = data.map(e => {
        if (item.id === e.id) {
          if (deger === 'button1') {
            return {
              ...e,
              selected: true,
              deger: 'button1',
              status: 'çok',
            };
          } else if (deger === 'button2') {
            return {
              ...e,
              selected: true,
              deger: 'button2',
              status: 'orta',
            };
          } else if (deger === 'button3') {
            return {
              ...e,
              selected: true,
              deger: 'button3',
              status: 'az',
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
                item.selected && item.deger === 'button1'
                  ? '#68F3A0'
                  : '#d3d3d3',
              borderRadius: 20,
              marginStart: 15,
            }}
            onPress={() => onClickItem('button1')}>
            <Feather name="smile" size={30} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              left: 5,
              backgroundColor:
                item.selected && item.deger === 'button2'
                  ? 'yellow'
                  : '#d3d3d3',
              borderRadius: 20,
            }}
            onPress={() => onClickItem('button2')}>
            <Feather name="meh" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              left: 10,
              backgroundColor:
                item.selected && item.deger === 'button3' ? 'red' : '#d3d3d3',
              borderRadius: 20,
            }}
            onPress={() => onClickItem('button3')}>
            <Feather name="frown" size={30} />
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
        renderItem={renderItem}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={InsertDataToServer}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            height: 60,
            backgroundColor: 'yellow',
            borderRadius: 25,
            marginBottom: 15,
          }}>
          <Text style={{color: 'red', fontWeight: '900'}}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({});
