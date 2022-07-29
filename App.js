import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/screens/HomeScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import LoginScreen from './src/screens/LoginScreen';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {isLoggedIn ?
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
          </Stack.Navigator>
          : // Si no está logeado 
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />

            <Stack.Screen
              options={{ presentation: 'modal', headerShown: false, headerMode: 'screen' }}
              name="SignUp"
              component={SignUpScreen}
            />
          </Stack.Navigator>
        }

      </NavigationContainer>
    </QueryClientProvider>
  );
};


export default App;
