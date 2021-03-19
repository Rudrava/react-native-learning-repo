import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import React from "react";
import {
  View,
} from "react-native";
import ViewImageScreens from "./app/screens/ViewImageScreens";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <>
    <WelcomeScreen/>
    {/* <ViewImageScreens/> */}
    </>
    
  );
}


