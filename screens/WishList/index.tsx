import React from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import SafeAreaViewCustom from "../../componets/SafeArea";

const { height, width } = Dimensions.get("window");

export default function WishList() {
  return (
    <View style={{ backgroundColor: "white", height, width, flex: 1 }}>
      <FlatList
        style={{ height: height * 0.9, flex: 0.9 }}
        data={[1, 23, 4, 3, 3, 3, 5, 67, 89]}
        renderItem={(data) => (
          <View
            key={data.index}
            style={{
              paddingVertical: 8,
              paddingLeft: 8,
              flexDirection: "row",
              height: height * 0.12,
            }}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/girl-winter-city_1157-17487.jpg?w=1060",
              }}
              style={{
                width: width * 0.21,
                height: "100%",
                borderRadius: 8,
              }}
            />
            <View
              style={{
                width: width * 0.75,
                paddingLeft: width * 0.04,
                height: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Text
                  style={{ fontWeight: "500", fontSize: 14, color: "gray" }}
                >
                  Women's Jacket
                </Text>
                <Text
                  style={{ fontWeight: "500", fontSize: 14, color: "black" }}
                >
                  $300.00
                </Text>
              </View>
              <Entypo name="cross" size={24} color="black" />
            </View>
          </View>
        )}
      />
      <View style={{ flex: 0.1, padding: height * 0.01, alignItems: "center" }}>
        <View
          style={{
            width: width * 0.9,
            height: height * 0.065,
            borderRadius: 8,
            marginVertical: height * 0.012,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            <MaterialCommunityIcons
              name="cart-arrow-right"
              size={20}
              color="white"
            />{" "}
            Checkout{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}
