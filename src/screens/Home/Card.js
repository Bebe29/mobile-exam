import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: (width - 20) / 2,
    shadowColor: "lightgrey",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 6,
  },
  content: {
    padding: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ({ navigation, data }) => {
  return (
    <View style={{ ...styles.container }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { detailData: data })}
      >
        <ImageScale
          source={{ uri: data.image }}
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
          width={(width - 20) / 2}
        />
        <View style={{ ...styles.content }}>
          <View style={{ ...styles.rating }}>
            <Icon
              type="AntDesign"
              name="star"
              style={{ fontSize: 10, color: "yellow" }}
            />
            <Text style={{ marginLeft: 5 }}>{data.rating}</Text>
          </View>
          <Text>{data.restaurantName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
