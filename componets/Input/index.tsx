import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default React.forwardRef(
  ({ inputBoxStyle, icon, touched, error, label, ...props }: any, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(true);
    return (
      <View style={[styles.inputBoxStyle, inputBoxStyle]}>
        {label && (
          <Text
            style={{
              fontSize: 13,
              // fontFamily: theme.font.fontSemiBold,
              marginBottom: 4,
            }}
          >
            {label}
          </Text>
        )}
        <View
          style={{
            paddingHorizontal: 24,
            backgroundColor: "white",
            shadowColor: "#605252",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.62,
            elevation: 8,
            marginVertical: 12,
            borderRadius: 8,
          }}
        >
          <TextInput
            ref={ref}
            {...props}
            height={48}
            underlineColorAndroid="transparent"
            style={[styles.input]}
            placeholderTextColor="#718096"
            secureTextEntry={
              props.autoCompleteType === "password" && passwordVisible
            }
          />
          {props.autoCompleteType === "password" && (
            <TouchableOpacity
              style={styles.passwordIcon}
              onPress={(ev) => {
                ev.stopPropagation();
                ev.preventDefault();
                setPasswordVisible((prev) => !prev);
              }}
            >
              <View>
                <Text style={styles["password__icon--sze"]}>
                  <Feather
                    name={passwordVisible ? "eye-off" : "eye"}
                    size={18}
                    color="black"
                  />
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  inputBoxStyle: {
    width: "100%",
    backgroundColor: "white",
    height: 73,
  },
  input: {
    width: "100%",
    height: "100%",
  },
  passwordIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  "password__icon--sze": {
    width: 20 * 1.1,
    height: 20 * 1.1,
  },
});
