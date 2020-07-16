import React, { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import Card from "./Card";
import { Icon } from "native-base";

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    height: 60,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#FF6A3D",
  },
});

export default ({ navigation }) => {
  const userSelector = useSelector((state) => state.user);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        setDataList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCard = ({ item }) => {
    return <Card navigation={navigation} data={item} />;
  };

  return (
    <View>
      <SafeAreaView />
      <View style={{ ...styles.navbar }}>
        <Icon
          type="AntDesign"
          name="user"
          style={{ fontSize: 16, color: "white" }}
        />
        <Text style={{ fontSize: 16, color: "white" }}>
          Hello, {userSelector.username}
        </Text>
      </View>
      <FlatList
        numColumns={2}
        data={dataList}
        renderItem={renderCard}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};
