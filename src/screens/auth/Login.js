import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';

const Login = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.HOME)}
        activeOpacity={0.7}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
});
