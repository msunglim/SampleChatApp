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
import {
  FullView,
  PaddingView,
  PaddingViewWithNav,
  SmallSizeBlackText,
  TrueDivier,
} from '../styles';
import ParentHeader from '../common/ParentHeader';
// import userData from './../../data/userData.json';
// import chatroomData from './../../data/chatroomData.json';
// import chatData from './../../data/chatData.json';
import UserRow from '../common/UserRow';
import ChatroomRow from '../common/ChatroomRow';

function ChatroomList(props: any): JSX.Element {
  let myPK = props.userPK;
  let userData = props.userData;
  let chatData = props.chatData;
  let chatroomData = props.chatroomData;
  if (
    userData.length === 0 ||
    chatroomData.length === 0 ||
    chatData.length === 0
  ) {
    return <></>;
  }
  let chatroomList = userData[myPK].chatroom;
  let chats = [];
  for (let i: number = 0; i < chatroomList.length; i++) {
    let chatroom = chatroomData[chatroomList[i]];
    let lastChatDate =
      chatData[chatroom.chatLog[chatroom.chatLog.length - 1]].date;
    chats.push([lastChatDate, i]);
  }

  // 날짜 차이를 계산하여 데이터 배열을 정렬
  chats.sort((a, b) => {
    const currentDate = new Date();
    const dateA = new Date(a[0]);
    const dateB = new Date(b[0]);
    // 각 요소의 date 값을 현재 날짜와의 차이로 계산
    const diffA = Math.abs(dateA.getTime() - currentDate.getTime());
    const diffB = Math.abs(dateB.getTime() - currentDate.getTime());
    // 차이를 비교하여 정렬
    return diffA - diffB;
  });

  let sortedChatrommList = [];
  for (let i = 0; i < chats.length; i++) {
    let index = chats[i][1];
    if (typeof index === 'number') {
      sortedChatrommList.push(chatroomList[index]);
    }
  }

  let container = sortedChatrommList.map((chatroomPK, index) => (
    <ChatroomRow
      userPK={myPK}
      chatroomPK={chatroomPK}
      key={index}
      userData={userData}
      chatData={chatData}
      chatroomData={chatroomData}
    />
  ));
  // return <></>
  return <ScrollView>{container}</ScrollView>;
}
/*
props contians ..
userPK
userData
chatData
chatroomData
*/
function ChatroomListPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const userPK = props.userPK;
  
  const userData = props.userData;
  const chatData = props.chatData;
  const chatroomData = props.chatroomData;
  return (
    <PaddingViewWithNav>
      <ParentHeader title={'Chats'} />
      <ChatroomList
        userPK={userPK}
        userData={userData}
        chatData={chatData}
        chatroomData={chatroomData}
      />
    </PaddingViewWithNav>
  );
}

export default ChatroomListPage;
