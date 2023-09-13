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
import UserRow from '../common/UserRow';
import {
  FlexCenterView,
  FullView,
  HorizontalAlignedView,
  LeftAlignedView,
  MiddleSizeBlackText,
  PaddingView,
  PaddingViewWithNav,
  RedBorderView,
  SmallSizeBlackText,
  TrueDivier,
} from '../styles';
import ParentHeader from '../common/ParentHeader';

// import userData from './../../data/userData.json';
function FrinedList(props: any): JSX.Element {
  if (props.userData.length === 0 ) {
    return <></>;
  }
  
  let myPK = props.id;
  let userData = props.userData
  // let userData = props.userData;
  let frinedList = userData[myPK].friends;
  let container = frinedList.map((friendPK: number, index: number) => (
    <UserRow userPK={friendPK} key={index} userData={userData} />
  ));
  return (
    <ScrollView>
      <UserRow userPK={myPK} userData={userData}/>
      <TrueDivier />
      <SmallSizeBlackText>Friends {frinedList.length}</SmallSizeBlackText>
      {container}
    </ScrollView>
  );
}
/*
props contians ..
userPK
userData
*/
function FriendListPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const userPK = props.userPK;

  const userData = props.userData;
  
  // const userPK = 0;

  return (
    <PaddingViewWithNav>
      <ParentHeader title={'Friends'} />

      <FrinedList id={userPK} userData={userData} />
    </PaddingViewWithNav>
  );
}

export default FriendListPage;
