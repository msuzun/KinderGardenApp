import React, {useState, useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  Animated,
} from 'react-native';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';


export default function Video() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const getApi = () => {
    fetch('http://192.168.1.36/UserList.php')
      .then(response => response.json())
      .then(responJson => setData(responJson), setIsLoading(false));
  };
  useEffect(() => {
    getApi();
  }, []);
  const OnClickItem = (item,index)=>{
    const newData =data.map((e,index)=>{
      if (item.id == e.id) {
        return{
          ...e,
          selected:true,
        }
      }
      return{
        ...e,
        selected:false
      }
    })
    setData(newData)
  }
  const renderItem = ({item, index}) => {
    
    return (
      <View
        style={{
          margin: 10,
          width: 60,
          height: 90,
        }}>
        <TouchableOpacity
          onPress={()=>OnClickItem(item,index)}
          style={{borderRadius: 50, borderWidth: 2, borderColor: item.selected ? 'green' : 'red'}}>
          <Image
            source={{uri: item.thumbnail}}
            style={{
              width: '100%',
              height: 70,
              borderRadius: 70,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: '700'}}>{item.name}</Text>
      </View>
    );
  };
  const openPicker = async () => {
    try {
      const response = await MultipleImagePicker.openPicker({
        selectedAssets: images,
        isExportThumbnail: true,
        maxVideo: 1,
        usedCameraButton: false,
        isCrop: true,
        isCropCircle: true,
      });
      console.log('response: ', response);
      setImages(response);
    } catch (e) {
      console.log(e.code, e.message);
    }
  };

  const onDelete = value => {
    const data = images.filter(
      item =>
        item?.localIdentifier &&
        item?.localIdentifier !== value?.localIdentifier,
    );
    setImages(data);
  };

  const renderItemGallery = ({item, index}) => {
    return (
      <View>
        <Image
          width={IMAGE_WIDTH}
          source={{
            uri:
              item?.type === 'video'
                ? item?.thumbnail ?? ''
                : item?.crop?.cropPath ?? item.path,
          }}
          style={style.media}
        />
        <TouchableOpacity
          onPress={() => onDelete(item)}
          activeOpacity={0.9}
          style={style.buttonDelete}>
          <Text style={style.titleDelete}>Sil</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={{backgroundColor: '#fff', height: '25%'}}>
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
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
      <View style={{height: '50%', backgroundColor: '#fff'}}>
        <FlatList
          style={[
            style.container,
            {
              paddingTop: 6,
            },
          ]}
          data={images}
          keyExtractor={(item, index) => (item?.filename ?? item?.path) + index}
          renderItem={renderItemGallery}
          numColumns={3}
        />
      </View>
      <View style={style.bottom}>
        <TouchableOpacity style={style.openPicker} onPress={openPicker}>
          <Text style={style.openText}>open</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const {width} = Dimensions.get('window');

const IMAGE_WIDTH = (width - 24) / 3;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 24,
  },
  media: {
    marginLeft: 6,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bottom: {
    padding: 24,
  },
  openText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    paddingVertical: 12,
  },
  openPicker: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  buttonDelete: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#ffffff92',
    borderRadius: 4,
  },
  titleDelete: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
});
