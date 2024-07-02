// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import AboutMePage from '../pages/AboutMePage';
import SoftwareProjectsPage from '../pages/SoftwareProjectsPage';
import TestsysteemProjectPage from '../pages/TestsysteemProjectPage';
import FoodieAppProjectPage from '../pages/FoodieAppProjectPage';
import TegeletikettenProjectPage from '../pages/TegeletikettenProjectPage';
import KpnDashboardProjectPage from '../pages/KpnDashboardProjectPage';
import SteamApiProjectPage from '../pages/SteamApiProjectPage';
import TwitterzuilProjectPage from '../pages/TwitterzuilProjectPage';
import WordleProjectPage from '../pages/WordleProjectPage';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name="AboutMe" component={AboutMePage} options={{headerShown: false}}/>
      <Stack.Screen name="SoftwareProjects" component={SoftwareProjectsPage} options={{headerShown: false}}/>
      <Stack.Screen name="Testsysteem" component={TestsysteemProjectPage} options={{headerShown: false}}/>
      <Stack.Screen name="FoodieApp" component={FoodieAppProjectPage} options={{headerShown: false}}/>
      <Stack.Screen name="Tegeletiketten" component={TegeletikettenProjectPage} options={{headerShown: false}}/>
      <Stack.Screen name="KpnDashboard" component={KpnDashboardProjectPage} options={{headerShown: false}}/>
      <Stack.Screen name="SteamApi" component={SteamApiProjectPage} options={{headerShown: false}}/>
      <Stack.Screen name="Twitterzuil" component={TwitterzuilProjectPage} options={{headerShown: false}}/>
      <Stack.Screen name="Wordle" component={WordleProjectPage} options={{headerShown: false}}/>
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
