/**
 * @format
 */
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {subscribeTopic} from './src/utils/pushnotification_helper';
import RealmServices from './src/persistence/RealmServices';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  //addBook('App killed State or exit', Math.floor(Math.random() * 500));

  var cond = {
    id: new Date().getTime(),
    description: 'Killed State',
  };
  RealmServices.save(cond);
});

//subscribe to topic
subscribeTopic('test');

const bgMessaging = async messages => {
  console.log('BgMessaging', messages);
  return Promise.resolve();
};

AppRegistry.registerHeadlessTask(
  'RNFirebaseBackgroundMessage',
  () => bgMessaging,
);

AppRegistry.registerComponent(appName, () => App);
