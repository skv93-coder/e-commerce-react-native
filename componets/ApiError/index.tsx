import React from "react";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function ApiError() {
  return (
    <View
      style={{
        marginHorizontal: width * 0.1,
        marginTop: 30,
        width: width * 0.8,
        borderRadius: 48,
        backgroundColor: "#fef5e7",
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: "red", fontSize: 18 }}>Name is required</Text>
      <TouchableOpacity>
        <Entypo name="circle-with-cross" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}
