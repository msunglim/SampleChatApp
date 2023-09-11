/* eslint-disable prettier/prettier */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import FriendListPage from '../FriendList/FriendListPage';
import ChatroomListPage from '../ChatroomList/ChatroomListPage';

/*
props contians ..
userPK
*/
function ParentPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [index, setIndex] = React.useState(0);
  // const userPK = props.userPK
  const userPK = 0;
  const [routes] = React.useState([
    {
      key: 'friend',
      title: 'friend',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
    {
      key: 'chat',
      title: 'chat',
      focusedIcon: 'chat',
      unfocusedIcon: 'chat-outline',
    },
  ]);
  const FriendListRoute = () => <FriendListPage userPK={userPK} />;

  const ChatroomListRoute = () => <ChatroomListPage userPK={userPK} />;
  const renderScene = BottomNavigation.SceneMap({
    friend: FriendListRoute,
    chat: ChatroomListRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default ParentPage;
