/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {COLORS} from '../../constants';

const Notification = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Notification</Text>
    </SafeAreaView>
  );
};

export default Notification;
