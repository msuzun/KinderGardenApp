import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Attendance = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [trueData, setTrueData] = useState([]);
  const [trueData2, setTrueData2] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const getApi = () => {
    fetch('http://192.168.1.36/UserList.php')
      .then(response => response.json())
      .then(responJson => setData(responJson), setIsLoading(false));
  };
  useEffect(() => {
    getApi();
  }, []);
  // const onShowItemSelected = () => {
  //   const listSelected1 = data.filter(
  //     item => item.selected == true && item.deger == 'button1',
  //   );
  //   let contentAlert1 = '';
  //   listSelected1.forEach(item => {
  //     contentAlert1 = contentAlert1 + `${item.id} . ` + item.name + '\n';
  //   });
  //   const listSelected2 = data.filter(
  //     item => item.selected == true && item.deger == 'button2',
  //   );
  //   let contentAlert2 = '';
  //   listSelected2.forEach(item => {
  //     contentAlert2 = contentAlert2 + `${item.id} . ` + item.name + '\n';
  //   });
  //   setTrueData(contentAlert1);
  //   setTrueData2(contentAlert2);
  // };
  const InsertDataToServer = () => {
    const listSelected3 = data.filter(item => item.status == "1" || item.status == "0");
    listSelected3.forEach(item => {
      fetch('http://192.168.1.36/AttendanceSave.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id:item.id,
          name: item.name,
          lastname: item.lastname,
          school: item.school,
          status: item.status,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {})
        .catch(error=>{});
    });
    UpdateDataToServer();
  };
  const UpdateDataToServer = () => {
    const listSelected3 = data.filter(item => item.status == "1" || item.status == "0");
    listSelected3.forEach(item => {
      fetch('http://192.168.1.36/AttendanceUpdate.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id:item.id,
          name: item.name,
          lastname: item.lastname,
          school: item.school,
          status: item.status,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {})
        .catch(error=>{});
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
              status: "1",
            };
          } else if (deger === 'button2') {
            return {
              ...e,
              selected: true,
              deger: 'button2',
              status: "0",
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
              left: 10,
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {/* <TouchableOpacity
          onPress={onShowItemSelected}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            height: 60,
            backgroundColor: 'yellow',
            borderRadius: 25,
            marginBottom: 15,
          }}>
          <Text style={{color: 'red', fontWeight: '900'}}>Göster</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
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
