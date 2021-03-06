import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
function ViewImageScreens(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 30,
    height: 30,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 25,
    left: 30,
  },
  deleteIcon: {
    width: 30,
    height: 30,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 25,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreens;
