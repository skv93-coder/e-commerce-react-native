import React from "react";
import { FlatList, Text, View } from "react-native";
import SafeAreaViewCustom from "../../componets/SafeArea";

export default function WishList() {
  return (
    <SafeAreaViewCustom>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>WishList</Text>
      </View>
    </SafeAreaViewCustom>
  );
}
