/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, FlatList} from 'react-native';
import {COLORS} from '../../constants';
import realm, {getAllBooks} from '../../persistence/db';
import RealmServices from '../../persistence/RealmServices';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>{JSON.stringify(RealmServices.findAll())}</Text>
    </SafeAreaView>
  );
};

export default Home;
