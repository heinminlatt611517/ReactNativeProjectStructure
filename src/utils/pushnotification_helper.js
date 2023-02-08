/* eslint-disable no-const-assign */
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RealmServices from '../persistence/RealmServices';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    GetFCMToken();
  }
};

const GetFCMToken = async () => {
  getStoreData('fcmToken').then(async value => {
    console.log(value, 'the old token');
    if (!value) {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log(fcmToken, 'the new generate token');
          storeData(fcmToken);
        }
      } catch (error) {
        console.log(error, 'error in FCM token');
      }
    }
  });
};

export const subscribeTopic = async topic => {
  messaging()
    .subscribeToTopic(topic)
    .then(() => console.log('Subscribed to topic:', topic))
    .catch(e => {
      console.log(e);
    });
};

export const NotificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // navigation.navigate(remoteMessage.data.type);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        // var cond = {
        //   id: new Date().getTime(),
        //   description: 'Background Notification',
        // };
        // RealmServices.save(cond);
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('notification on foreground state....', remoteMessage);
    console.log('Current Time....', new Date().getTime());
    var cond = {
      id: new Date().getTime(),
      description: 'Background',
    };
    RealmServices.save(cond);
  });
};

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('fcmToken', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getStoreData = async key => {
  var value;
  try {
    await AsyncStorage.getItem(key).then(val => {
      value = val;
    });
  } catch (e) {
    console.log('Error reading value');
  }
  return value;
};
