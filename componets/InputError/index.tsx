import React from "react";
import { Text } from "react-native";
import GlobalStyles from "../../GlobalStyles";

export default function InputError({ error }) {
  return (
    <Text style={GlobalStyles.errorInput}>
      {error[0].toUpperCase()}
      {error.slice(1)}
    </Text>
  );
}
