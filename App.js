import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LogoutScreen from './Components/LogoutScreen'
import LoginScreen from './Components/LoginScreen'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Logout" component={LogoutScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
