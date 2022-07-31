import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/HomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen';
import { useLogin } from './context/LoginProvider';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const { isLoggedIn } = useLogin();

    return (
        <NavigationContainer>
            {isLoggedIn ? // Si está logueado muestro el Home
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Home"
                        component={HomeScreen}
                    />
                </Stack.Navigator>
                : // Si no está logeado muestro Login
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Login"
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        options={{
                            presentation: 'modal',
                            headerShown: false,
                            headerMode: 'screen'
                        }}
                        name="SignUp"
                        component={SignUpScreen}
                    />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}


export default MainNavigator