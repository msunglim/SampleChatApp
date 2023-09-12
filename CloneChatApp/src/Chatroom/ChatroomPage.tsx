/* eslint-disable prettier/prettier */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView} from 'react-native';
// import chatroomData from './../../data/chatroomData.json';
// import chatData from './../../data/chatData.json';
// import userData from './../../data/userData.json';
import {
  ExcuseMeHorizontallyFivePX,
  HEIGHT,
  HorizontalAlignedView,
  MiddleSizeBlackText,
  PostSizeImage,
  RedBorderView,
  SmallSizeGreyText,
  WIDTH,
} from '../styles';
import {IconButton} from 'react-native-paper';
import BottomBar from './BottomBar';
import {Chat, Chatroom, User} from '../interfaces';

/*
props contians ..
userPK
chatroomPK


*/
function getChatList(messages: any, userData: User[]): JSX.Element {
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
              <PostSizeImage source={{uri: content.image}} />
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
  const [chatData, setChatData] = useState<Chat[]>(props.route.params.chatData);
  const [chatroomData, setChatroomData] = useState<Chatroom[]>(
    props.route.params.chatroomData,
  );
  const [userData, setUserData] = useState<User[]>(props.route.params.userData);

  const chatroom = chatroomData[chatroomPK];
  const participants = chatroom.participants;
  const [chatLog, setChatLog] = useState<number[]>(chatroom.chatLog);

  const [chats, setChats] = useState<Chat[]>([]);

  const scrollViewRef = useRef<ScrollView>(null);

  const [y, setY] = useState<number>(HEIGHT);
  function handleScroll(event: {nativeEvent: {contentOffset: {y: number}}}) {
    const scrollY: number = event.nativeEvent.contentOffset.y;
    if (scrollY >= 0 && scrollY < HEIGHT) {
      setY(scrollY);
    }
  }
  function keyboardEvent(type: number) {
    if (type == 0) {
      //키보드 온. 더 아래로 내려갓
      scrollViewRef.current?.scrollTo({x: 0, y: y + 300, animated: true});
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
        // console.log(chatData[chatLog[i]]);
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
        {getChatList(chats, userData)}
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
        chatData={chatData}
      />
    </View>
  );
}

export default ChatroomPage;
