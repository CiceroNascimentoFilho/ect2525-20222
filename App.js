import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './screens/Homescreen';
import ChatList from "./screens/ChatList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homescreen" component={Homescreen} opitions={{ headerShown: false}}/>
        <Stack.Screen name="ChatList" component={ChatList} opitions={{ title: 'Chat List'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}