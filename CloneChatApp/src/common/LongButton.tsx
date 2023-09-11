/* eslint-disable prettier/prettier */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

/*
props contians ..
icon
mode
onPressEvent
text
*/
function LongButton(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View>
      <Button
        style={{
          width: 250,
        }}
        icon={props.icon}
        mode={props.mode}
        uppercase
        onPress={() => {
          props.onPressEvent();
        }}>
        {props.text}
      </Button>
    </View>
  );
}

export default LongButton;
