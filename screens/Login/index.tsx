import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  findNodeHandle,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";
import { LOGIN_USER } from "../../Api/User/mutation";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import InputError from "../../componets/InputError";
import SafeAreaViewCustom from "../../componets/SafeArea";
import { bigHeadingFont } from "../../constants/heading";
import GlobalStyles from "../../GlobalStyles";

const { width } = Dimensions.get("window");

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export default function Login({ navigation }) {
  const [loginUser, { loading, reset, data, error: apiError }] =
    useMutation(LOGIN_USER);

  const ref = React.useRef({ email: null, password: null, scrollRef: null });
  console.log("loginUser", data);
  const onSubmit = async (val) => {
    const res = await loginUser({
      variables: {
        user: val,
      },
    }).catch((err) => {
      console.log("err", err);
    });
    // console.log("val :>> ", res);
    await AsyncStorage.setItem("token", res?.data?.login?.token);
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit,
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

  // console.log("client :>> ", client.readQuery({ query: LOGIN_USER }));
  return (
    <SafeAreaViewCustom>
      <ScrollView
        ref={(ref_: any) => (ref.current.scrollRef = ref_)}
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
            onFocus={() => handleFocus("email")}
            ref={(ref_: any) => (ref.current.email = ref_)}
            placeholder="Email Address"
            onChangeText={handleChange("email")}
          />
          {errors.email && <InputError error={errors.email} />}
        </View>
        <View
          style={{
            marginHorizontal: width * 0.1,
            backgroundColor: "white",
          }}
        >
          <Input
            ref={(ref_: any) => (ref.current.password = ref_)}
            onFocus={() => handleFocus("password")}
            placeholder="Password"
            autoCompleteType="password"
            onChangeText={handleChange("password")}
          />
          {errors.password && <InputError error={errors.password} />}
        </View>
        <View
          style={{
            marginHorizontal: width * 0.1,
            marginTop: 28,
          }}
        >
          <Button
            btnTxt="Sign in"
            onPress={() => {
              handleSubmit();
            }}
          />
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
