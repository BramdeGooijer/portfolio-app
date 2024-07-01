// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/homePage/HomePage';
import AboutMePage from '../pages/homePage/AboutMePage';
import SoftwareProjectsPage from '../pages/homePage/SoftwareProjectsPage';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name="AboutMe" component={AboutMePage} options={{headerShown: false}}/>
      <Stack.Screen name="SoftwareProjects" component={SoftwareProjectsPage} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
