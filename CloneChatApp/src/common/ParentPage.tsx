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
import { Chat, Chatroom, User } from '../interfaces';


/*
props contians ..
userPK
*/
function ParentPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [index, setIndex] = React.useState(0);
  const userPK = props.route.params.userPK;

  // const userPK = 0;
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

  const [chatData, setChatData] = useState<Chat[]>([]);
  const [userData, setUserData] = useState<User[]>([]);
  const [chatroomData, setChatroomData] = useState<Chatroom[]>([]);
  useEffect(() => {
    fetch('http://10.0.2.2:5000/chat_user_chatroomData')
      .then(response => response.json())
      .then(data => {
        console.log('fetch');

        let cd = data[0];
        let us = data[1];
        let crd = data[2];
        console.log("chat data",cd);
        
        setChatData(cd);
        setUserData(us);
        // console.log('fetch doone', us);

        setChatroomData(crd);
      })
      .catch(error => {
        // Handle any errors that occur
        console.error(error);
      });
  }, []);

  const FriendListRoute = () => (
    <FriendListPage
      userPK={userPK}
      userData={userData}
      chatData={chatData}
      chatroomData={chatroomData}
    />
  );

  const ChatroomListRoute = () => (
    <ChatroomListPage
      userPK={userPK}
      userData={userData}
      chatData={chatData}
      chatroomData={chatroomData}
    />
  );
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
