import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {
  HomeStackScreen,
  ProfileStackScreen,
  SearchStackScreen,
  ReviewStackScreen
} from './src/navigation/Stacks';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={HomeStackScreen}/>
        <Tab.Screen name='Profile' component={ProfileStackScreen}/>
        <Tab.Screen name='Search' component={SearchStackScreen}/>
        <Tab.Screen name='Review' component={ReviewStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
