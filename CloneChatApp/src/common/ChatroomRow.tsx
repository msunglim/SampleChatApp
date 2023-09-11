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
import chatroomData from './../../data/chatroomData.json';
import userData from './../../data/userData.json';
import chatData from './../../data/chatData.json';
import {
  CenterView,
  ExcuseMeHorizontallyFivePX,
  ExcuseMeVerticallyFivePercent,
  HorizontalAlignedView,
  IconSize,
  LeftAlignedView,
  MiddleSizeBlackText,
  PaddingViewWithNav,
  RightAlignedView,
  SmallSizeGreyText,
  grey,
} from '../styles';
import {lastMessageDate} from './DateConverter';

/*
props contians ..
chatroomPK
*/
function ChatroomRow(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const chatroom = chatroomData[props.chatroomPK];
  const participants = chatroom.participants;
  const chats = chatroom.chatLog;
  const lastChat = chatData[chats[chats.length - 1]].content;
  const lastChatDate = lastMessageDate(chatData[chats[chats.length - 1]].date);
  function chatroomImage(participants: number[]): JSX.Element {
    let amount = participants.length - 1; //not including myself
    let size = amount < 2 ? IconSize : amount < 3 ? IconSize / 2 : IconSize / 3;
    let container = participants.map((userPK, index) => {
      if (index >= 1 && index <= 4) {
        return (
          <Image
            key={index}
            style={{
              width: size,
              height: size,
            }}
            source={{uri: userData[userPK].profile}}
          />
        );
      } else {
        return null;
      }
    });
    return (
      <CenterView
        style={{
          width: IconSize,
          height: IconSize,
          borderColor: grey,
          borderWidth: 1,
          borderRadius: 15,
          overflow: 'hidden',
          flexWrap: 'wrap',
        }}>
        {container}
      </CenterView>
    );
  }

  function chatroomTitle(participants: number[]): string {
    let title = '';

    for (let i = 1; i < participants.length; i++) {
      if (i + 1 < participants.length) {
        title += userData[participants[i]].name + ', ';
      } else {
        title += userData[participants[i]].name;
      }
    }
    return title;
  }
  const title = chatroomTitle(participants);

  function goToChatRoom() {
    navigation.navigate('ChatroomPage', {
      chatroomPK: props.chatroomPK,
      userPK: props.userPK,
    });
  }
  return (
    <TouchableOpacity
      onPress={() => {
        goToChatRoom();
      }}>
      <PaddingViewWithNav>
        <HorizontalAlignedView>
          {chatroomImage(participants)}
          <ExcuseMeHorizontallyFivePX />
          <View>
            <MiddleSizeBlackText>{title}</MiddleSizeBlackText>
            <ExcuseMeVerticallyFivePercent />
            <HorizontalAlignedView>
              <LeftAlignedView>
                <SmallSizeGreyText
                  style={{
                    textAlign: 'left',
                  }}>
                  {lastChat}
                </SmallSizeGreyText>
              </LeftAlignedView>
              <RightAlignedView>
                <SmallSizeGreyText
                  style={{
                    textAlign: 'center',
                  }}>
                  {lastChatDate}
                </SmallSizeGreyText>
              </RightAlignedView>
            </HorizontalAlignedView>
          </View>
        </HorizontalAlignedView>
      </PaddingViewWithNav>
    </TouchableOpacity>
  );
}

export default ChatroomRow;
