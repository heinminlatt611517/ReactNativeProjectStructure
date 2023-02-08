/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../screens';
import {ROUTES} from '../constants';
import {COLORS} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={({route}) => ({
          headerTintColor: COLORS.white,
          headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        })}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
