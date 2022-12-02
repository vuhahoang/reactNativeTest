import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screen/Home"
import ProfileScreen from "./src/screen/ProfileScreen"
import  Animated  from "./src/screen/Animated";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Animated" component={Animated} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MyStack;