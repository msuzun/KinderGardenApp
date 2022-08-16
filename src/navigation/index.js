import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';

import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen';

import HomeScreen from '../Screens/SignedIn/Areas/Teacher/HomeScreen';
import CalendarScreen from '../Screens/SignedIn/Areas/Teacher/CalendarScreen';
import NotificationScreen from '../Screens/SignedIn/Areas/Teacher/NotificationScreen';
import ProfileScreen from '../Screens/SignedIn/Areas/Teacher/ProfileScreen';
import Gallery from '../Screens/SignedIn/Areas/Teacher/Gallery';
import Video from '../Screens/SignedIn/Areas/Teacher/Video';
import Activity from '../Screens/SignedIn/Areas/Parent/Activity';
import Food from '../Screens/SignedIn/Areas/Teacher/Food';
import Medicion from '../Screens/SignedIn/Areas/Teacher/Medicion';
import Attendance from '../Screens/SignedIn/Areas/Teacher/Attendance';
import Otobus from '../Screens/SignedIn/Areas/Parent/Otobus';
import HomeWork from '../Screens/SignedIn/Areas/Parent/Homework';
import Reminding from '../Screens/SignedIn/Areas/Parent/reminding';
import MessageScreen from '../Screens/SignedIn/Areas/Teacher/MessageScreen';

import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={HomeScreen}
        options={{drawerLabel: () => <Text>Anasayfa</Text>, title: () => null}}
      />
      <Drawer.Screen name="Mesajlar" component={MessageScreen} />
    </Drawer.Navigator>
  );
};

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="Gallery"
        component={Gallery}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
      <HomeStack.Screen
        name="Video"
        component={Video}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
      <HomeStack.Screen
        name="Activity"
        component={Activity}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
      <HomeStack.Screen
        name="Food"
        component={Food}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
      <HomeStack.Screen
        name="Medicion"
        component={Medicion}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
      <HomeStack.Screen
        name="Attendance"
        component={Attendance}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
      <HomeStack.Screen
        name="Otobus"
        component={Otobus}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
      <HomeStack.Screen
        name="HomeWork"
        component={HomeWork}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
      <HomeStack.Screen
        name="Reminding"
        component={Reminding}
        options={({route}) => ({
          headerShown: true,
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
    </HomeStack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = focused ? 'home' : 'planet-outline';
          } else if (route.name === 'CalendarScreen') {
            iconName = focused
              ? 'ellipsis-vertical-circle-outline'
              : 'clipboard-outline';
          } else if (route.name === 'NotificationScreen') {
            iconName = focused
              ? 'notifications-outline'
              : 'notifications-circle-outline';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'people-outline' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Main" component={HomeStackNavigation} />
      <Tab.Screen name="CalendarScreen" component={CalendarScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const index = () => {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    });
  }, []);
  if (signedIn == true) {
    return (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    );

    // return <TabNavigation />;
  } else {
    return <StackNavigation />;
  }
};

export default index;

const styles = StyleSheet.create({});
