/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACK} from '../components/common/stackNames';
import ProfileScreen from '../pages/Profile';

function AppNavigator(): JSX.Element {
  const AppStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={STACK.PROFILE}>
        <AppStack.Screen
          name={STACK.PROFILE}
          options={{headerShown: false}}
          component={ProfileScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
