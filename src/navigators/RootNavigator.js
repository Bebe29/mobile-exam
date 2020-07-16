import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthStack from "./AuthStack";
import MainTab from "./MainTabs";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator();
export default () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  useEffect(() => {
    AsyncStorage.getItem("userData")
      .then((storageItem) => {
        if (!storageItem) throw "Username not found";
        dispatch({
          type: "USER_LOGIN",
          payload: JSON.parse(storageItem),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView />
      <Stack.Navigator screenOptions={{ headerShown: false }} ini>
        {userSelector.username ? (
          <Stack.Screen
            options={{ animationEnabled: false }}
            component={MainTab}
            name="MainTab"
          />
        ) : (
          <Stack.Screen component={AuthStack} name="Auth" />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
