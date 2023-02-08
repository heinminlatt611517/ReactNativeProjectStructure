/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import {
  requestUserPermission,
  NotificationListener,
} from './src/utils/pushnotification_helper';

export default function App() {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  });
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
