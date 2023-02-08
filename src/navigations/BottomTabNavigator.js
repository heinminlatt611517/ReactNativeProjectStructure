/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notification} from '../screens';
import {ROUTES, COLORS} from '../constants';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notification} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    height: 92,
  },
});
