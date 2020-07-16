import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import Axios from "axios";
import API_URL from "../../constants/API";
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch } from "react-redux";
import { Icon } from "native-base";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loginText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF6A3D",
  },
  inputLogin: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
    width: width - 100,
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
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const loginBtnHandler = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        username,
      })
    )
      .then(() => {
        dispatch({
          type: "USER_LOGIN",
          payload: { username },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="height"
        style={{ justifyContent: "center", flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={{ ...styles.loginText }}>TomatoApp</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="food"
            style={{ fontSize: 90, color: "#FF6A3D" }}
          />
          <TextInput
            autoCapitalize="none"
            style={{ ...styles.inputLogin }}
            placeholderTextColor="black"
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TouchableOpacity
            style={{ ...styles.buttonLogin }}
            onPress={loginBtnHandler}
          >
            <Text style={{ color: "white" }}>Enter</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
