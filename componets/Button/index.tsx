import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from "react-native";

interface Props {
  onPress?: (ev: GestureResponderEvent) => void;
  buttonBoxStyle?: ViewStyle;
  btnTxtStyle?: TextStyle;
  btnTxt: String;
  icon?: React.ReactElement;
}

export default function Button({
  onPress,
  buttonBoxStyle = {},
  btnTxtStyle = {},
  btnTxt,
  icon,
}: Props) {
  return (
    <TouchableOpacity
      onPress={(ev) => {
        if (onPress) onPress(ev);
      }}
      style={[styles.btn, buttonBoxStyle]}
    >
      <View style={styles.center}>
        <Text style={[styles.btnText, btnTxtStyle]}>{btnTxt}</Text>
        {icon && <View style={styles.icon}>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "black",
    width: "100%",
    marginHorizontal: "2%",
    padding: "3%",
    borderColor: "white",
    borderRadius: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
    marginTop: 3,
    marginLeft: 8,
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
