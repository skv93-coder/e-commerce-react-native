import React from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function ProductViewCard({ children, navigation }) {
  return (
    <View
      style={{
        width: width * 0.4,
        height: height * 0.3,
        marginVertical: 18,
        marginHorizontal: width * 0.05,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ShopView");
        }}
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-photo/girl-winter-city_1157-17487.jpg?w=1060",
          }}
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            backgroundColor: "white",
          }}
          resizeMode="cover"
          borderRadius={4}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 12,
              marginTop: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "#f35a5a",
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                -25%
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Yellow Blazer
          </Text>
          <Text
            style={{
              color: "#f35a5a",
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            $263
          </Text>
        </View>
        <Entypo name="heart-outlined" size={24} color="black" />
      </View>
      {children}
    </View>
  );
}
