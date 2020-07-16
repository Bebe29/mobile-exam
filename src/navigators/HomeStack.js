import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import DetailCard from "../screens/DetailCard/DetailCard";
import Profile from "../screens/Profile/Profile";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={DetailCard} name="Detail" />
    </Stack.Navigator>
  );
};
