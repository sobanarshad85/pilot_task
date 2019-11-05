import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import SignInScreen from './signin';
import SplashScreen from './splash';
import SignUpScreen from './signup';
import HomeScreen from './home';
import MapsScreen from './maps';

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  MapsScreen: {
    screen: MapsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Locations',
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{ marginRight: 15,color:'white',fontWeight:'bold',fontSize:16 }}>OK</Text>
          </TouchableOpacity>
        )
      }
    }
  }
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#395fed',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const LoginStack = createStackNavigator({
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null
    }
  }
})

const RootNavigator = createSwitchNavigator({
  SplashScreen: { screen: SplashScreen },
  LoginStack: { screen: LoginStack },
  AppStack: { screen: AppStack }
},
  {
    initialRouteName: 'SplashScreen'
  })

export default createAppContainer(RootNavigator)