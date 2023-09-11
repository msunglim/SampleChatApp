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
import {HorizontalAlignedView, MiddleSizeBlackText} from '../styles';

/*
props contians ..
title
*/
function ParentHeader(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <HorizontalAlignedView>
      <MiddleSizeBlackText>{props.title}</MiddleSizeBlackText>
    </HorizontalAlignedView>
  );
}

export default ParentHeader;
