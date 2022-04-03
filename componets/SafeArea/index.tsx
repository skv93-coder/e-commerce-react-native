import React, { FC } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function SafeAreaViewCustom({ children }: Props) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ffffff",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
}
