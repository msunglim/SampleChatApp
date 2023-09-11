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
  KeyboardAvoidingView,
} from 'react-native';
import {
  CenterView,
  ExcuseMeVerticallyFivePercent,
  ExcuseMeVerticallyThreePercent,
  FlexCenterView,
  FullView,
  IconSizeImage,
  MiddleSizeBlackText,
  freeImageURL1,
  freeImageURL2,
} from '../styles';
import UserInput from '../common/UserInput';
import LongButton from '../common/LongButton';
import {IconButton} from 'react-native-paper';
import UserRow from '../common/UserRow';

/*
props contians ..

*/
function LoginPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  function loginProcess() {
    //search user id from the USER table and return matched userId primary key
    let userPK = 0;
    //check if id and pw matched
    if (true) {
      navigation.navigate('ParentPage', {userPK: userPK});
    }
  }

  return (
    <FullView>
      <KeyboardAvoidingView
        behavior="height"
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        enabled
        keyboardVerticalOffset={100}>
        <FlexCenterView>
          <MiddleSizeBlackText>L O G I N</MiddleSizeBlackText>
          <ExcuseMeVerticallyFivePercent />
          <UserInput text={id} placeholder="id" setText={setId} />
          <ExcuseMeVerticallyThreePercent />
          <UserInput text={pw} placeholder="password" setText={setPw} />
          <ExcuseMeVerticallyThreePercent />
          <LongButton
            text="Login"
            mode="contained"
            onPressEvent={loginProcess}
          />
        </FlexCenterView>
      </KeyboardAvoidingView>
    </FullView>
  );
}

export default LoginPage;
