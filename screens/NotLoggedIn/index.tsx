import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, Text } from "react-native";
import SafeAreaViewCustom from "../../componets/SafeArea";
import { AntDesign } from "@expo/vector-icons";
import AccessDenied from "../../assets/AccessDenied.svg";
import Button from "../../componets/Button";

const { height, width } = Dimensions.get("window");

export default function WishList({ navigation }) {
  return (
    <SafeAreaViewCustom>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            marginHorizontal: width * 0.1,
            marginTop: 48,
          }}
        >
          <AccessDenied width={width * 0.8} height={height * 0.5} />
          <View style={{ marginTop: 50 }}>
            <Text style={styles.subTitles}>You are not logged in </Text>
            <Text style={{ textAlign: "center" }}>
              Log in to save you wishlist
            </Text>
          </View>
          <View style={{ marginTop: 80 }}>
            <Button
              btnTxt="Let's Log in"
              icon={<AntDesign name="arrowright" size={22} color="white" />}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewCustom>
  );
}

const styles = StyleSheet.create({
  subTitles: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 24,
  },
});
