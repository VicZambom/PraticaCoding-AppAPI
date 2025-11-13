import React from 'react';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Article } from './src/types/news';

// Definir os tipos de parâmetros para as rotas
export type RootStackParamList = {
  Home: undefined;
  Details: { article: Article };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen} 
          options={{ title: 'Principais Notícias' }}
        />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen} 
          options={{ title: 'Detalhes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}