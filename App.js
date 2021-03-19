import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import React from "react";
import {
  Dimensions,  
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar
} from "react-native";

export default function App() {
  // gives width height scale fontScale of the device but is not reactive to device orientation change 
  // for which we use orientation hooks or dimension hooks
  // console.log(Dimensions.get("screen"))
  // gives the dimensions data wrt to orientation change
  // console.log(useDimensions())
  // gives only the orientation details
  // Object {
  //   "landscape": false,
  //   "portrait": true,
  // }  
  // const { landscape } = useDeviceOrientation()
  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "pink",
          width: "100%",
          // height: landscape ? "100%" : "35%",
          height: "35%",
        }}>
        
        </View>
      {/* <Text style={{marginTop: "10%",textAlign: "center"}}>{ (landscape ? "landScape" : "potrait")} </Text> */}
    </SafeAreaView>
  );
}

const colorOverride = {backgroundColor: "yellow"}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#cfecef",
    paddingTop: (Platform.OS==="android" && StatusBar.currentHeight ) 
  },
});
