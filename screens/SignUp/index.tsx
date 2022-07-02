import React, { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  findNodeHandle,
  TouchableOpacity,
} from "react-native";
import Button from "../../componets/Button";
import Input from "../../componets/Input";
import { bigHeadingFont } from "../../constants/heading";
import GlobalStyles from "../../GlobalStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputError from "../../componets/InputError";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from "../../Api/User/mutation";

const { width } = Dimensions.get("window");

const signUpSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().min(2).required(),
  password: Yup.string().min(6).required(),
});

export default function SignUp({ navigation }) {
  const [createUser, { loading, reset, data, error }] =
    useMutation(CREATE_USER);

  const ref = React.useRef({
    name: null,
    email: null,
    password: null,
    scrollRef: null,
  });

  const onSubmit = (val) => {
    console.log("val :>> ", val);
    createUser({
      variables: {
        user: val,
      },
    });
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { email: "", name: "", password: "" },
    validationSchema: signUpSchema,
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
          onChangeText={handleChange("name")}
        />
        {errors.name && <InputError error={errors.name} />}
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
        <Button btnTxt="Sign up" onPress={() => handleSubmit()} />
      </View>
      <View style={styles.btnUnderTxt}>
        <Text style={GlobalStyles.textBold}>Forgot Your Password?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={[
              GlobalStyles.textBold,
              GlobalStyles.textDecorationUnderline,
            ]}
          >
            Sign in
          </Text>
        </TouchableOpacity>
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
