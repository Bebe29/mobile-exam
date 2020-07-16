import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import { Icon } from "native-base";
import Profile from "../screens/Profile/Profile";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#FF6A3D",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="Entypo" name="home" style={{ color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              type="MaterialCommunityIcons"
              name="silverware"
              style={{ color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
