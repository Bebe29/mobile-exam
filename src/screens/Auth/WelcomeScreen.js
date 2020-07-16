import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginTop: height - height / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonLogin: {
    marginVertical: 10,
  },
});

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.welcomeText }}>Welcome</Text>
      <TouchableOpacity
        style={{ ...styles.buttonLogin }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Log In Now</Text>
      </TouchableOpacity>
    </View>
  );
};
