import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import SafeAreaViewCustom from "../../componets/SafeArea";
import { bigHeadingFont } from "../../constants/heading";
import GlobalStyles from "../../GlobalStyles";

const { height, width } = Dimensions.get("window");

export default function Login() {
  return (
    <SafeAreaViewCustom>
      <ScrollView style={{ flex: 1, backgroundColor: "rgb(254 254 254)" }}>
        <View
          style={{
            marginHorizontal: width * 0.1,
            marginTop: 30,
            width: width * 0.8,
          }}
        >
          <Text
            style={[
              GlobalStyles.textBlack,
              { fontSize: bigHeadingFont, marginBottom: 6, fontWeight: "600" },
            ]}
          >
            Hello Again!
          </Text>
          <Text
            style={[
              GlobalStyles.textBlack,
              { fontSize: bigHeadingFont, marginBottom: 6, fontWeight: "600" },
            ]}
          >
            Welcome
          </Text>
          <Text
            style={[
              GlobalStyles.textBlack,
              { fontSize: bigHeadingFont, marginBottom: 6, fontWeight: "600" },
            ]}
          >
            back
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: width * 0.1,
            backgroundColor: "white",
            marginTop: 22,
          }}
        >
          <Input placeholder="Email Address" />
        </View>
        <View
          style={{
            marginHorizontal: width * 0.1,
            backgroundColor: "white",
          }}
        >
          <Input placeholder="Password" />
        </View>
        <View
          style={{
            marginHorizontal: width * 0.1,
            marginTop: 28,
          }}
        >
          <Button btnTxt="Sign in" />
        </View>
        <View style={styles.btnUnderTxt}>
          <Text style={GlobalStyles.textBold}>Forgot Your Password?</Text>
          <Text
            style={[
              GlobalStyles.textBold,
              GlobalStyles.textDecorationUnderline,
            ]}
          >
            Signup
          </Text>
        </View>
      </ScrollView>
    </SafeAreaViewCustom>
  );
}

const styles = StyleSheet.create({
  btnUnderTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: width * 0.1,
    marginTop: 8,
  },
});
