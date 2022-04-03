import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default React.forwardRef(
  ({ inputBoxStyle, icon, touched, error, label, ...props }, ref) => {
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
          />
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
});
