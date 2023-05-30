import React from "react";
import { StatusBar } from "expo-status-bar";
import WeatherScreen from "./src/screen/Home/index.js";

export default function App() {
  return (
    <>
      <WeatherScreen />
      <StatusBar style="light" />
    </>
  );
}
