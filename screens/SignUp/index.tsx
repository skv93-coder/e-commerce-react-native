import React from "react";
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  findNodeHandle,
} from "react-native";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import { bigHeadingFont } from "../../constants/heading";
import GlobalStyles from "../../GlobalStyles";

const { width, height } = Dimensions.get("window");

export default function SignUp() {
  const ref = React.useRef({
    name: null,
    email: null,
    password: null,
    scrollRef: null,
  });

  const handleFocus = (idx: string) => {
    const { current }: any = ref;
    current[idx].measureLayout(
      findNodeHandle(ref.current.scrollRef),
      (x: Number, y: Number) => {
        current.scrollRef.scrollTo({ x: 0, y: y, animated: true });
      }
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
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
          Hello!
        </Text>
        <Text
          style={[
            GlobalStyles.textBlack,
            { fontSize: bigHeadingFont, marginBottom: 6, fontWeight: "600" },
          ]}
        >
          Signup To
        </Text>
        <Text
          style={[
            GlobalStyles.textBlack,
            { fontSize: bigHeadingFont, marginBottom: 6, fontWeight: "600" },
          ]}
        >
          Get Started
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
          ref={(ref_: any) => (ref.current.name = ref_)}
          placeholder="Name"
        />
      </View>
      <View
        style={{
          marginHorizontal: width * 0.1,
          backgroundColor: "white",
        }}
      >
        <Input
          ref={(ref_: any) => (ref.current.email = ref_)}
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
          ref={(ref_: any) => (ref.current.password = ref_)}
          placeholder="Password"
          autoCompleteType="password"
        />
      </View>
      <View
        style={{
          marginHorizontal: width * 0.1,
          marginTop: 28,
        }}
      >
        <Button btnTxt="Sign up" />
      </View>
      <View style={styles.btnUnderTxt}>
        <Text style={GlobalStyles.textBold}>Forgot Your Password?</Text>
        <Text
          style={[GlobalStyles.textBold, GlobalStyles.textDecorationUnderline]}
        >
          Signup
        </Text>
      </View>
    </ScrollView>
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
