/* eslint-disable prettier/prettier */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

/*
props contians ..
text
placeholder
setText
*/
function UserInput(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View>
      <TextInput
        style={{
            width: 250
        }}
        value={props.text}
        placeholder={props.placeholder}
        onChangeText={t => {
          props.setText(t);
        }}
      />
    </View>
  );
}

export default UserInput;
