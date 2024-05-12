import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureDirection: "horizontal",
      title: "",
    }}
  >
    <Stack.Screen name="Main" component={MainScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
