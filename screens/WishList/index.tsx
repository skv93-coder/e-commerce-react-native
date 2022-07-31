import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import SafeAreaViewCustom from "../../componets/SafeArea";
import React from "react";
import { useState } from "react";

const { height, width } = Dimensions.get("window");

export default function WishList() {
  const [toggle, setToggle] = useState(false);
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
              height: height * 0.3,
              borderColor: "#f0eded",
              borderTopWidth: 10,
            }}
          >
            <View style={{ height: "100%" }}>
              <View style={{ backgroundColor: "red", height: "40%" }}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-photo/girl-winter-city_1157-17487.jpg?w=1060",
                  }}
                  style={{
                    width: width * 0.21,
                    borderRadius: 8,
                    height: "100%",
                    // margin
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setToggle((prev) => !prev);
                }}
              >
                <View
                  style={{
                    borderColor: "#ccc",
                    borderWidth: 1,
                    marginTop: 8,
                    borderRadius: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 8,
                  }}
                >
                  {toggle ? (
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ padding: 8 }}>1</Text>
                      <Text>2</Text>
                      <Text>3</Text>
                    </View>
                  ) : (
                    <>
                      <Text>Qty: 1</Text>
                      <AntDesign name="caretdown" size={12} color="black" />
                    </>
                  )}
                </View>
              </TouchableOpacity>
            </View>

            {/* <View
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
                  // justifyContent: "space-between",
                  height: "100%",
                }}
              >
               
                <Text
                  style={{ fontWeight: "500", fontSize: 16, color: "black" }}
                >
                 MarQ By Flipkart 190L Direct 
                </Text>
               <View style={{paddingTop:50}}>
               <Text
                  style={{ fontWeight: "500", fontSize: 14, color: "black" }}
                >
                   $300.00
                </Text>
                </View>
              </View>
               </View> */}
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
