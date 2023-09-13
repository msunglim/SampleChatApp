/* eslint-disable prettier/prettier */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {HEIGHT, HorizontalAlignedView} from '../styles';
import {IconButton} from 'react-native-paper';
import {formatDateToCustomString} from '../common/DateConverter';
import {SERVER} from '../server';

/*
props contians ..
userPK
chats
setChats

*/
function BottomBar(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [inputText, setInputText] = useState<string>('');
  const userPK = props.userPK;
  const chatroomPK = props.chatroomPK;
  const addPhoto = (uri: string) => {
    let copy = [...props.chats];
    let new_chat = {
      pk: props.chatData.length,
      writer: userPK,
      date: formatDateToCustomString(new Date()),
      content: '',
      image: uri,
      emoji: '',
    };
    copy.push(new_chat);
    props.setChats(copy);

    fetch(SERVER+'addChat?chatroomPK=' + chatroomPK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(new_chat),
    })
      .then(response => response.json())
      .then(data => {
        console.log('updated');

        // console.log('서버 응답:', data);
      })
      .catch(error => {
        console.log('updated failed');
        // console.error('오류 발생:', error);
      });
  };
  const handleSubmit = () => {
    if (inputText.length == 0) {
      return;
    }
    //이게 지금은, chats에다가 add하지만.
    //db가 들어간다면, 일단 chatData에 하나 추가해.
    //추가하는 내용은 chatdata의 규격에 맞게한다.
    //그리고 chat pk를 얻고, 그것을 chatroom[chatroomPK]에 추가함
    //그리고 그것을 chatLogs 라는 state variable에 추가시켜서
    //useEffect로 cahtLogs가 없데이트될때마다 chats를 업데이트해주면된다.
    let copy = [...props.chats];
    let new_chat = {
      pk: props.chatData.length,
      writer: userPK,
      date: formatDateToCustomString(new Date()),
      content: inputText,
      image: '',
      emoji: '',
    };
    copy.push(new_chat);
    props.setChats(copy);
    setInputText('');

    fetch(SERVER + 'addChat?chatroomPK=' + chatroomPK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(new_chat),
    })
      .then(response => response.json())
      .then(data => {
        console.log('서버 응답:', data);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      });
  };
  return (
    <HorizontalAlignedView
      style={
        {
          // position: 'absolute',
          // bottom: 0,
          // flex: 1,
          // justifyContent: 'flex-end',
        }
      }>
      <IconButton
        icon={'camera'}
        onPress={() => {
          navigation.navigate('CameraPage', {
            userPK: userPK,
            chatroomPK: chatroomPK,
            addPhoto: addPhoto,
          });
        }}
      />
      <TextInput
        onSubmitEditing={() => {
          handleSubmit();
        }}
        value={inputText}
        blurOnSubmit={false}
        onChangeText={t => {
          setInputText(t);
        }}
        onFocus={() => {
          props.setScrollHeight(HEIGHT * 0.97 - 300);
          props.keyboardEvent(0);
        }}
        onBlur={() => {
          props.setScrollHeight(HEIGHT * 0.97);
          props.keyboardEvent(1);
        }}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: '75%',
        }}
      />
      <IconButton icon={'emoticon-happy-outline'} />
    </HorizontalAlignedView>
  );
}

export default BottomBar;
