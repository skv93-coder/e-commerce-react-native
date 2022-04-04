import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  findNodeHandle,
  TouchableOpacity,
} from "react-native";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import SafeAreaViewCustom from "../../componets/SafeArea";
import { bigHeadingFont } from "../../constants/heading";
import GlobalStyles from "../../GlobalStyles";

const { height, width } = Dimensions.get("window");

export default function Login({ navigation }) {
  const scrollRef = React.useRef();
  const email = React.useRef();
  const handleFocus = (ev) => {
    email.current.measureLayout(findNodeHandle(scrollRef.current), (x, y) => {
      // console.log("x,y", x, y, ev);
      scrollRef.current.scrollTo({ x: 0, y: y, animated: true });
    });
  };
  return (
    <SafeAreaViewCustom>
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1, backgroundColor: "rgb(254 254 254)" }}
      >
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
          <Input
            onFocus={(ev) => handleFocus(ev, "email")}
            ref={email}
            placeholder="Email Address"
          />
        </View>
        <View
          style={{
            marginHorizontal: width * 0.1,
            backgroundColor: "white",
          }}
        >
          <Input
            onFocus={(ev) => handleFocus(ev, "password")}
            placeholder="Password"
          />
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text
              style={[
                GlobalStyles.textBold,
                GlobalStyles.textDecorationUnderline,
              ]}
            >
              Signup
            </Text>
          </TouchableOpacity>
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
