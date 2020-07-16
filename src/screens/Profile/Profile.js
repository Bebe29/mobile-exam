import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  username: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
  buttonLogin: {
    width: width - 200,
    backgroundColor: "#FF6A3D",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ({ navigation }) => {
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    AsyncStorage.removeItem("userData")
      .then((result) => {
        dispatch({
          type: "USER_LOGOUT",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.username }}>{userSelector.username}</Text>
      <TouchableOpacity
        style={{ ...styles.buttonLogin }}
        onPress={logOutHandler}
      >
        <Text style={{ color: "white" }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
