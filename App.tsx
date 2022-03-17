import { Entypo, Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Avatar,
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Carousel from "react-native-snap-carousel";

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
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView
        style={{
          backgroundColor: "#ffffff",
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <ScrollView>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Carousel
              firstItem={1}
              data={[
                { title: "the" },
                { title: "the" },
                { title: "the" },
                { title: "the" },
              ]}
              renderItem={({ item, index }: any): any => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: 0.6 * height,
                      }}
                      source={{
                        uri: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439702/item/ingoods_64_439702.jpg?width=1600&impolicy=quality_75",
                      }}
                    />
                  </View>
                );
              }}
              sliderWidth={width}
              itemWidth={width * 0.8}
            />
          </View>
          <View
            style={{
              marginHorizontal: width * 0.1,
              marginTop: 20,
              marginBottom: height * 0.04,
            }}
          >
            <Text
              style={{
                color: "gray",
                fontWeight: "600",
                fontSize: 18,
                letterSpacing: 1,
              }}
            >
              OUTER
            </Text>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 20 }}>
                Jas Oversized
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  backgroundColor: "#f35a5a",
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                  borderRadius: 6,
                  color: "white",
                }}
              >
                -25%
              </Text>
              <Text>4.3 (342 reviews)</Text>
            </View>

            <View style={{ marginVertical: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                Information
              </Text>
            </View>
            <Text>
              Oversized suit made of woven fabric with notch caller, one button
              and one button front. and front pocket...{" "}
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Readmore</Text>
            </Text>
            <ScrollView horizontal>
              <View style={{ flexDirection: "row" }}>
                {[1, 23, 4, 5, 6, 7].map((data, i, arr) => (
                  <Image
                    key={data}
                    style={{
                      width: 0.1 * height,
                      height: 0.1 * height,
                      marginRight: i + 1 === arr.length ? 0 : 8,
                      marginLeft: i === 0 ? 0 : 8,
                      borderWidth: 2,
                      borderColor: "black",
                      borderRadius: 8,
                    }}
                    source={{
                      uri: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439702/item/ingoods_64_439702.jpg?width=1600&impolicy=quality_75",
                    }}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <View
          style={{
            width,
            height: height * 0.08,
            backgroundColor: "white",
            bottom: 0,
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 6,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 24 }}>$243.00</Text>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "black",
                paddingVertical: 8,
                paddingHorizontal: 18,
                borderRadius: 4,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
                + Add to Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
