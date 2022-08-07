import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function Cart() {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={{ backgroundColor: "white", height, width, flex: 1 }}>
      <FlatList
        style={{ height: height * 0.9, flex: 0.9 }}
        data={[1, 23, 4, 3, 3, 3, 5, 67, 89]}
        renderItem={(data) => (
          <View>
            <View
              key={data.index}
              style={{
                paddingVertical: 8,
                paddingLeft: 8,
                flexDirection: "row",
                height: height * 0.25,
                borderColor: "#f0eded",
                borderTopWidth: 8,
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
                      backgroundColor: "white",
                      paddingVertical: 8,
                    }}
                  >
                    {toggle ? (
                      <View
                        style={{
                          alignItems: "center",
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        <Text style={{ textAlign: "center" }}>1</Text>
                        <Text
                          style={{ textAlign: "center", paddingVertical: 4 }}
                        >
                          2
                        </Text>
                        <Text style={{ textAlign: "center" }}>3</Text>
                        <Text style={{ textAlign: "center", paddingTop: 4 }}>
                          more
                        </Text>
                      </View>
                    ) : (
                      <>
                        <Text style={{ color: "black" }}>Qty: 1</Text>
                        <AntDesign name="caretdown" size={12} color="black" />
                      </>
                    )}
                  </View>
                </TouchableOpacity>
              </View>

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
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 16,
                      color: "black",
                      width: "100%",
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    MarQ By Flipkart 190L Direct MarQ By Flipkart 190L Direct
                    MarQ By Flipkart 190L Direct
                  </Text>
                  <Text style={{ color: "#d8d8d8" }}>Moon sliver, CD10882</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        backgroundColor: "green",
                        width: "20%",
                        padding: 3,
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 3,
                        marginTop: 6,
                      }}
                    >
                      <Text style={{ color: "white" }}>
                        {" "}
                        4.1 <AntDesign name="star" size={12} color="white" />
                      </Text>
                    </View>
                    <Text style={{ color: "#d8d8d8", paddingLeft: 4 }}>
                      (8,475)
                    </Text>
                  </View>
                  <View style={{ paddingTop: 35 }}>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 16,
                        color: "black",
                      }}
                    >
                      <Text
                        style={{
                          textDecorationLine: "line-through",
                          color: "#d8d8d8",
                        }}
                      >
                        $200{" "}
                      </Text>{" "}
                      $300 <Text style={{ color: "green" }}>10% off</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#f0eded",
                  borderTopWidth: 2,
                  paddingVertical: height * 0.018,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons
                    name="arrow-down-bold-box"
                    size={15}
                    color="#c6c6c6"
                  />
                  <Text style={{ paddingLeft: 4 }}>Save for later</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#f0eded",
                  borderLeftWidth: 2,
                  borderTopWidth: 2,
                  paddingVertical: height * 0.018,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <FontAwesome5 name="trash" size={15} color="#c6c6c6" />
                  <Text style={{ paddingLeft: 4 }}>Remove</Text>
                </View>
              </View>
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
