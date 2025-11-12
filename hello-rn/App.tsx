import React from 'react';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator({
  screens: {
    HomeScreen,
    DetailsScreen
  },
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return <Navigation />;
}