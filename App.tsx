/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Meeting from './src/components/Meeting';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/components/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
     <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          component={Meeting}
          name="Meeting"
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
