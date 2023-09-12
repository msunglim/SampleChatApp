/* eslint-disable prettier/prettier */
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import chatroomData from './../../data/chatroomData.json';
import chatData from './../../data/chatData.json';
import userData from './../../data/userData.json';
import UserRow from '../common/UserRow';
import {
  ExcuseMeHorizontallyFivePX,
  FlexCenterView,
  FlexView,
  FullView,
  HEIGHT,
  HorizontalAlignedView,
  IconImageContainer,
  IconSizeImage,
  MiddleSizeBlackText,
  PostSizeImage,
  RedBorderView,
  SmallSizeGreyText,
  WIDTH,
  freeImageURL1,
  freeImageURL2,
} from '../styles';
import { IconButton } from 'react-native-paper';
import BottomBar from './BottomBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Chat {
  pk: number;
  writer: number;
  date: string;
  content: string;
  image: string;
  emoji: string;
}

/*
props contians ..
userPK
chatroomPK


*/
function getChatList(messages: any): JSX.Element {
  if (messages) {
    let container = messages.map(
      (content: any, index: React.Key | null | undefined) => (
        <HorizontalAlignedView key={index}>
          {content.content.length > 0 && (
            <MiddleSizeBlackText>
              {userData[content.writer].name}:{content.content}
            </MiddleSizeBlackText>
          )}
          {content.content.length == 0 && (
            <HorizontalAlignedView>
              <MiddleSizeBlackText>
                {userData[content.writer].name}:
              </MiddleSizeBlackText>
              <PostSizeImage
                source={{ uri: content.image }}
              />
            </HorizontalAlignedView>
          )}
          <ExcuseMeHorizontallyFivePX />
          <SmallSizeGreyText>
            {new Date(content.date).getHours()} :
            {new Date(content.date).getMinutes()}
          </SmallSizeGreyText>
        </HorizontalAlignedView>
      ),
      0,
    );

    return <RedBorderView>{container}</RedBorderView>;
  } else {
    return <></>;
  }
}
function ChatroomPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const userPK = props.route.params.userPK;
  const chatroomPK = props.route.params.chatroomPK;

  const chatroom = chatroomData[chatroomPK];
  const participants = chatroom.participants;
  const [chatLog, setChatLog] = useState<number[]>(chatroom.chatLog);

  const [chats, setChats] = useState<Chat[]>([]);

  const scrollViewRef = useRef<ScrollView>(null);
  // This page is to get (lat, lon) location. https://www.npmjs.com/package/@react-native-community/geolocation
  // This is for reverse geocode meaning (lat,lon) to address	https://github.com/marlove/react-native-geocoding 
  // import Geolocation from '@react-native-community/geolocation';
  // import Geocoder from "react-native-geocoding";
  // you would need Google API key code because react-native-geocoding lib is using Google Geo API
  // To get API KEY, go to https://console.cloud.google.com/apis/dashboard?project=planar-beach-387620
  // Set to use Geocoding API and get the API key from Google cloud
  // Geocoder.init("YOUR_API_KEY_HERE");
  /*   const shareLocation = () => {
      console.log('share Location')
      Geolocation.getCurrentPosition(async info => {
          const address: string = await fetchAddress(info.coords.latitude, info.coords.longitude);
          if (address) {
              console.log("Current address:", address);
              // TODO: set this address to your Message to send.
          } else {
              console.error("Could not fetch the address.");
          }
      });
      closeModal()
   }; */

  /* const fetchAddress = async (latitude: any, longitude: any) => {
   console.log('lat', latitude)
   console.log('longitude', longitude)
   var address: string = "";
   await Geocoder.from(latitude, longitude)
       .then(json => {
           console.log('first', json.results[0].formatted_address);
           address = json.results[0].formatted_address
       })
       .catch(error => console.warn(error));
   return address;
};*/
  const [y, setY] = useState<number>(HEIGHT);
  function handleScroll(event: { nativeEvent: { contentOffset: { y: number } } }) {
    const scrollY: number = event.nativeEvent.contentOffset.y;
    if (scrollY >= 0 && scrollY < HEIGHT) {
      setY(scrollY);
    }
  }
  function keyboardEvent(type: number) {
    if (type == 0) {
      //키보드 온. 더 아래로 내려갓
      scrollViewRef.current?.scrollTo({ x: 0, y: y + 300, animated: true });
      setY(y + 300);
      // console.log('down TO ', y + 300);
    } else {
      //   console.log('no keybard', y);
    }
  }
  useEffect(() => {
    // Scroll to the bottom of the ScrollView when the component mounts or when new messages are added.
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();

      let copy = [...chats];
      for (let i = 0; i < chatLog.length; i++) {
        console.log(chatData[chatLog[i]]);
        copy.push(chatData[chatLog[i]]);
      }
      setChats(copy);
    }
  }, [chatLog]);
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  }, [chats]);
  const [scrollHeight, setScrollHeight] = useState<number>(HEIGHT * 0.97);
  return (
    <View
      style={{
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
      }}>
      <ScrollView
        ref={scrollViewRef}
        style={{
          height: scrollHeight,
        }}
        onScroll={e => {
          handleScroll(e);
        }}
        onLayout={e => {
          setY(e.nativeEvent.layout.height + HEIGHT);
          // console.log('hahaha', e.nativeEvent.layout.height);
        }}>
        {getChatList(chats)}
      </ScrollView>

      <BottomBar
        userPK={userPK}
        chatroomPK={chatroomPK}
        setScrollHeight={setScrollHeight}
        keyboardEvent={keyboardEvent}
        chatLog={chatLog}
        setChatLog={setChatLog}
        chats={chats} //임시직
        setChats={setChats} //임시직
      />
    </View>
  );
}

export default ChatroomPage;
