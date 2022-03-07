import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Avatar,
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Entypo, FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";
import { useState } from "react";

const { height, width } = Dimensions.get("window");

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "yellow",
  },
};

export default function App() {
  const [tab, setTab] = useState("Recommended");
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView
        style={{
          backgroundColor: "#ffffff",
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <ScrollView stickyHeaderIndices={[2]}>
          <View
            style={{
              width,
              paddingTop: 20,
              paddingHorizontal: 0.07 * width,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: width * 0.65,
                paddingVertical: 10,
                backgroundColor: "#f3f3f3",
                borderRadius: 8,
                flexDirection: "row",
                paddingLeft: 12,
                alignItems: "center",
              }}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput
                style={{ paddingLeft: 12, fontSize: 16 }}
                placeholder="Search clothes..."
              />
            </View>
            <View
              style={{
                width: width * 0.15,
                backgroundColor: "#f3f3f3",
                paddingVertical: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                paddingHorizontal: 10,
              }}
            >
              <FontAwesome5 name="bell" size={24} color="black" />
            </View>
          </View>
          <View
            style={{
              width: width * 0.85,
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
              marginHorizontal: 0.07 * width,
              height: height * 0.19,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
            }}
          >
            <ImageBackground
              source={{
                uri: "https://img.freepik.com/free-photo/men-shoes_1303-5889.jpg?w=1060",
              }}
              style={{
                borderRadius: 18,
                flex: 1,
                height: "100%",
                width: "100%",
                backgroundColor: "white",
              }}
              resizeMode="cover"
              blurRadius={5}
              borderRadius={8}
            >
              <View
                style={{
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  paddingLeft: 16,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "white",
                    }}
                  >
                    Special
                  </Text>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Sale
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ marginTop: 35 }}>
            <ScrollView style={{ flexDirection: "row" }} horizontal>
              <View style={{ flexDirection: "row", backgroundColor: "white" }}>
                {["Recommended", "Outer", "Shirt", "Sweater"].map((data) => (
                  <TouchableOpacity
                    key={data}
                    onPress={() => {
                      console.log("200", 200);
                      setTab(data);
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: tab === data ? "black" : "white",
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        borderRadius: 6,
                        marginHorizontal: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                        marginBottom: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          color: tab === data ? "white" : "black",
                        }}
                      >
                        {data}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
          {/* <ScrollView> */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
              <View
                key={data}
                style={{
                  width: width * 0.4,
                  height: height * 0.3,
                  marginVertical: 18,
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
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
