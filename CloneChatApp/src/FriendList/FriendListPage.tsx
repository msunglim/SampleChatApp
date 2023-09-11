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

import userData from './../../data/userData.json';
function FrinedList(props: any): JSX.Element {
  let myPK = props.id;
  let frinedList = userData[myPK].friends;
  let container = frinedList.map((friendPK, index) => (
    <UserRow userPK={friendPK} key={index} />
  ));
  return (
    <ScrollView>
      <UserRow userPK={myPK} />
      <TrueDivier />
      <SmallSizeBlackText>Friends {frinedList.length}</SmallSizeBlackText>
      {container}
    </ScrollView>
  );
}
/*
props contians ..
userPK
*/
function FriendListPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  //   const userIdPk = props.route.params.userIdPK
  const userPK = 0;

  return (
    <PaddingViewWithNav>
      <ParentHeader title={'Friends'} />

      <FrinedList id={userPK} />
    </PaddingViewWithNav>
  );
}

export default FriendListPage;
