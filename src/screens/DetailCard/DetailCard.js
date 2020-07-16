import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "native-base";
import ImageScale from "react-native-scalable-image";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    height: 60,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#FF6A3D",
  },
});

export default (props) => {
  const { detailData } = props.route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <SafeAreaView />
      <TouchableOpacity onPress={() => props.navigation.goBack("Home")}>
        <View style={{ ...styles.navbar }}>
          <Icon
            type="Ionicons"
            name="arrow-back"
            style={{ fontSize: 20, color: "white" }}
          />
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5 }}>
            {detailData.restaurantName}
          </Text>
        </View>
      </TouchableOpacity>
      <ImageScale source={{ uri: detailData.image }} width={width} />
      <View
        style={{ fontSize: 18, paddingHorizontal: 20, paddingVertical: 10 }}
      >
        <Text>Rating : {detailData.rating}</Text>
        <Text>Address : {detailData.address}</Text>
        <Text>Cuisines : {detailData.cuisine}</Text>
        <Text>
          Open : {detailData.openTime} to {detailData.closeTime}
        </Text>
        <Text>
          Cost for 2 : {detailData.currency} {detailData.costForTwo}
        </Text>
      </View>
    </View>
  );
};
