/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Notification} from '../screens';
import {ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomTabNavigator} />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notification}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
