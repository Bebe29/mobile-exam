import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/redux/reducers";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigators/RootNavigator";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
