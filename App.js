import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar
} from "react-native";

export default function App() {
  const press = e => console.log("pressed")
  return (
    // the left side style obj overrides the properties on right
    <View style={[styles.container, colorOverride]}>
      {/* <TouchableHighlight onPress={()=> console.log("image Tapped")}>
        <Image
          source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }} />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View style={{width: 200, height: 50, backgroundColor:"teal", margin: 20}}></View>
      </TouchableNativeFeedback>
      <Text numberOfLines={2} onPress={press}>Hello Android hope u are powerfull as web!!!
      </Text> */}
      <Button
        title="click me"
        onPress={() =>
          Alert.alert("you are being alerted",
            "button pressed",
            [
              {
                text: "yes",
                onPress: () => console.log("yes pressed")
              },
              {
                text: "No",
                onPress: () =>  console.log("no pressed")}
            ])
          // alert prompt dosent work in android
          // Alert.prompt("my prompt",
          //   "button pressed",
          // text=> console.log(text))
        }
        color="teal"
      />
    </View>
  );
}

const colorOverride = {backgroundColor: "yellow"}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#cfecef",
    paddingTop: (Platform.OS==="android" && StatusBar.currentHeight) 
  },
});
