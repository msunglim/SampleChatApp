/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../Login/LoginPage';
import FriendListPage from '../FriendList/FriendListPage';
import ParentPage from '../common/ParentPage';
import ChatroomPage from '../Chatroom/ChatroomPage';
import CameraPage from '../Camera/CameraPage';
const RootStack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="LoginPage">
        <RootStack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        
        <RootStack.Screen
          name="ParentPage"
          component={ParentPage}
          options={{headerShown: false}}
        />
         <RootStack.Screen
          name="ChatroomPage"
          component={ChatroomPage}
          options={{headerShown: false}}
        />
         <RootStack.Screen
          name="CameraPage"
          component={CameraPage}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
