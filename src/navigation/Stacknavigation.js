//import liraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Bottomtab from './Bottomtab';
import Profile from '../Profile';
import Forgotpassword from '../Forgotpassword';

const Stack = createNativeStackNavigator();
// create a component
const Stacknavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={Bottomtab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Forgot Password"
        component={Forgotpassword}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Stacknavigation;
