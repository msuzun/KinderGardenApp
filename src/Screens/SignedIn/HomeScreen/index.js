import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../constants';

const HomeScreen = ({navigation}) => {
  const PressGallery = () => {
    // console.warn('Gallery');
    navigation.navigate('Gallery',{name:'Gallery'});
  };
  const PressVideo = () => {
    // console.warn('Video');
    navigation.navigate('Video',{name:'Video'});
  };
  const PressActivity = () => {
    // console.warn('Aktivity');
    navigation.navigate('Activity',{name:'Activity'});
  };
  const PressFoodList = () => {
    // console.warn('Food List');
    navigation.navigate('Food',{name:'Food'});
  };
  const PressMedicionList = () => {
    // console.warn('Medicion List');
    navigation.navigate('Medicion',{name:'Medicion'});
  };
  const PressAttendance = () => {
    // console.warn('Attendance List');
    navigation.navigate('Attendance',{name:'Attendance'});
  };
  const PressOtobus = () => {
    // console.warn('Otobus');
    navigation.navigate('Otobus',{name:'Otobus'});
  };
  const PressHomeWork = () => {
    // console.warn('HomeWork');
    navigation.navigate('HomeWork',{name:'HomeWork'});
  };
  const PressReminding = () => {
    // console.warn('Reminding');
    navigation.navigate('Reminding',{name:'Reminding'});
  };
  return (
    // <View style={styles.container}>
    //   <View style={styles.ModalView}>
    //     <View style={styles.row}>
    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressGallery}>
    //         <Image
    //           source={require('../../../assets/gallery.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>Galeri</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressVideo}>
    //         <Image
    //           source={require('../../../assets/video.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>Video</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressActivity}>
    //         <Image
    //           source={require('../../../assets/activity.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>Aktivite</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View style={styles.row}>
    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressFoodList}>
    //         <Image
    //           source={require('../../../assets/yemek.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>Yemek Listesi</Text>
    //       </TouchableOpacity>

    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressMedicionList}>
    //         <Image
    //           source={require('../../../assets/health.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>İlaç Listesi</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressAttendance}>
    //         <Image
    //           source={require('../../../assets/yoklama.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>Yoklama Listesi</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View style={styles.row}>
    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressOtobus}>
    //         <Image
    //           source={require('../../../assets/otobus.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>Otobüs</Text>
    //       </TouchableOpacity>

    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressHomeWork}>
    //         <Image
    //           source={require('../../../assets/homework.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>Ödev</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         activeOpacity={0.8}
    //         style={styles.widgets}
    //         onPress={PressReminding}>
    //         <Image
    //           source={require('../../../assets/hatirlatma.png')}
    //           style={styles.ImageView}
    //         />
    //         <Text style={styles.TextView}>Hatırlatma</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
    <View style={styles.container}>
      <View style={styles.modalView}>
        <ScrollView style={styles.modalItemScroll}>
          <View style={styles.modalItem}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressGallery}>
              <Image
                source={require('../../../assets/gallery.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>Galeri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressVideo}>
              <Image
                source={require('../../../assets/video.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>Video</Text>
                
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressActivity}>
              <Image
                source={require('../../../assets/activity.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>Aktivite</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalItem}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressMedicionList}>
              <Image
                source={require('../../../assets/health.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>İlaç Listesi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressFoodList}>
              <Image
                source={require('../../../assets/yemek.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>Yemek</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressAttendance}>
              <Image
                source={require('../../../assets/yoklama.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>Yoklama Listesi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalItem}>
          <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressOtobus}>
              <Image
                source={require('../../../assets/otobus.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>Otobus</Text>
            </TouchableOpacity>
          <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressHomeWork}>
              <Image
                source={require('../../../assets/homework.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>Ödev</Text>
            </TouchableOpacity>
          <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalItemTouchContent}
              onPress={PressReminding}>
              <Image
                source={require('../../../assets/hatirlatma.png')}
                style={styles.btnImage}></Image>
                <Text style={styles.TextView}>Hatırlatma</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // ModalView: {
  //   height:'90%',
  //   width:'90%',
  //   padding:0,
  //   justifyContent:'center',
  //   alignItems:'flex-end',

  // },
  // row: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   height: '100%',
  //   width: '90%',
  //   // marginTop: 15,
  //   // marginBottom: 15,
  // },
  // widgets: {
  //   backgroundColor: COLORS.white,
  //   width: '80%',
  //   margin: 10,
  //   height: '75%',
  //   borderRadius: 10,
  //   padding: 15,
  //   shadowColor: '#9e9898',
  //   elevation: 5,
  //   alignItems: 'center',
  // },
  // ImageView: {
  //   width: '50%',
  //   resizeMode: 'cover',
  //   flex: 1,
  // },
  // TextView: {
  //   marginTop: 20,
  //   textAlign: 'center',
  //   fontSize: 16,
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: '85%',
    width: '90%',
    padding: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  modalItem: {
    margin:5,
    height: '30%',
    width: '100%',
    flexDirection: 'row',
  },
  modalItemScroll: {
    width: '100%',
    height: '100%',
  },
  modalItemTouchContent: {
    height: '100%',
    flex: 1,
    backgroundColor:COLORS.white,
    margin:10,
    borderRadius:30,
    padding:10,
    shadowColor:'#9e9898',
    elevation:5,
  },
  btnImage: {
    width: 85,
    height: 85,
    alignSelf: 'center',
    marginTop: 10,
  },
  TextView:{
    textAlign:'center',
    fontSize:14,
  }
});
