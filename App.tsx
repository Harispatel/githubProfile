/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from '@ant-design/react-native';

function App(): JSX.Element {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}

export default App;
