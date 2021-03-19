import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import React from "react";
import {
  View,
} from "react-native";

export default function App() {
  return (
      <View
        style={{
          backgroundColor: "#ffc",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center", //main axis allingment
          // alignContent: "center", //this centers a multiline content as a whole 
          // flexWrap: "wrap",
          // on multiline align items behaves as alginent per each line 
          alignItems: "center", //along secondary axis
      }}>
        <View style={{
          backgroundColor: "dodgerblue",
          // flexGrow: 1,
          // flexBasis: 100,
          // width: 300,
          // flexShrink: 1,
          width: 100,
          height: 100,
          // alignSelf: "flex-start"
        }} />
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          position: "absolute",
          top: 30,
           left: 20
        }} />
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100
        }} />
        {/* <View style={{
          backgroundColor: "grey",
          width: 100,
          height: 100
        }} />
        <View style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100
        }} /> */}
      </View>
  );
}


