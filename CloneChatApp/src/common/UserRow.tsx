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
  ExcuseMeHorizontallyFivePX,
  ExcuseMeHorizontallyFivePercent,
  ExcuseMeHorizontallyThreePercent,
  HorizontalAlignedView,
  IconImageContainer,
  IconSizeImage,
  LeftAlignedView,
  MiddleSizeBlackText,
  RedBorderView,
  RightAlignedView,
  TrueDivier,
  freeImageURL1,
} from '../styles';
import userData from './../../data/userData.json';
import {Divider} from 'react-native-paper';
/*
props contians ..
pk
*/
function UserRow(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const user = userData[props.userPK];
  const profile = user.profile;
  const name = user.name;
  return (
    <HorizontalAlignedView
      style={{
        padding: '1%',
      }}>
      <ExcuseMeHorizontallyThreePercent />
      <IconImageContainer>
        <IconSizeImage source={{uri: profile}} />
      </IconImageContainer>
      <ExcuseMeHorizontallyThreePercent />
      <MiddleSizeBlackText>{name}</MiddleSizeBlackText>
    </HorizontalAlignedView>
  );
}

export default UserRow;
