import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import FormScreen from "../screens/FormScreen";

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
    <Stack.Screen name="Form" component={FormScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
