import React, {useState, useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  Animated,
  Alert,
  ActivityIndicator
} from 'react-native';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const getApi = () => {
    fetch('http://192.168.1.40/akridaUser.php')
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
  const OpenGallery = async () => {
    await ImagePicker.openPicker({multiple: true}).then(res => {
      res.map((item,index)=>{
        console.log(item.path)
        data.append('submit','ok');
        data.append('file',{
          uri: item.path,
          type:"image/jpg",
          name: item.filename || `temp_image_${index}.jpg`,
        })
      })
    })
  }
  const upload = () =>{
    fetch('http://192.168.1.40/ImageDeneme.php',{
      method:"post",
      headers:{
          Accept: "application/x-www-form-urlencoded",
      },
      body:data
    }).then(res=>res.json())
    .then(res=>{
      console.log(res)
      alert("Success")
    })
    .catch(err => console.log("error uploading images : ",err))
  }
  // const openPicker = () => {
  //      const response =  MultipleImagePicker.openPicker({ selectedAssets: images,
  //       isExportThumbnail: true,
  //       maxVideo: 1,
  //       usedCameraButton: false,
  //       isCrop: true,
  //       isCropCircle: true,});
  //     console.log('response: ', response[0].realPath);
  //     setImages(response);
  //     UploadImage("file:///"+response.then((re)=>{re.}))
  // };

  // const onDelete = value => {
  //   const data = images.filter(
  //     item =>
  //       item?.localIdentifier &&
  //       item?.localIdentifier !== value?.localIdentifier,
  //   );
  //   setImages(data);
  // };

  // const renderItemGallery = ({item, index}) => {
  //   return (
  //     <View>
  //       <Image
  //         width={IMAGE_WIDTH}
  //         source={{
  //           uri:
  //             item?.type === 'video'
  //               ? item?.thumbnail ?? ''
  //               : item?.crop?.cropPath ?? item.path,
  //         }}
  //         style={style.media}
  //       />
  //       <TouchableOpacity
  //         onPress={() => onDelete(item)}
  //         activeOpacity={0.9}
  //         style={style.buttonDelete}>
  //         <Text style={style.titleDelete}>Sil</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  // const UploadImage = async (image_uri)=>{
  //   //  await MultipleImagePicker.openPicker({ selectedAssets: images,
  //   //   isExportThumbnail: true,
  //   //   maxVideo: 1,
  //   //   usedCameraButton: false,
  //   //   isCrop: true,
  //   //   isCropCircle: true,})
  //   setIsLoading(true)
  //   let base_url = "http://192.168.1.40/ImageDeneme.php";
  //   let uploadData = new FormData();
  //   uploadData.append('submit','ok');
  //   uploadData.append('file',{type:'image/jpg',uri:image_uri,name:'uploadimagetemp.jpg'});
  //   fetch(base_url,{
  //     method:"POST",
  //     body:uploadData,
  //     headers:{
  //       'Content-Type' : 'multipart/form-data'
  //     }
  //   })
  //   .then(response =>response.json())
  //   .then(response =>{
  //     if (response) {
  //       setIsLoading(false);
  //       console.log(response)
  //     }
  //     else{
  //       setIsLoading(false);
  //       Alert.alert('Error',response.message);
  //     }
      
  //   }).catch((err)=>{console.log(err)})

  // }

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
      {/* <View style={{height: '50%', backgroundColor: '#fff'}}>
      {isLoading && <ActivityIndicator/>

      }
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
      </View> */}
      <View style={style.bottom}>
        <TouchableOpacity style={style.openPicker} onPress={OpenGallery}>
          <Text style={style.openText}>aç</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.openPicker} onPress={upload}>
          <Text style={style.openText}>kaydet</Text>
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
