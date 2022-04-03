import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
} from "react-native-reanimated";
import Svg, { Circle, Path, SvgXml } from "react-native-svg";
import Login from "../../assets/logo.svg";
import Button from "../../componets/Button";
import { bigHeadingFont } from "../../constants/heading";

const { width, height } = Dimensions.get("window");

export default function SignUp({ navigation }) {
  // const AnimatedPath = Animated.createAnimatedComponent(Path);
  // const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  // const data = useDerivedValue(() => {
  //   return {
  //     from: { x: 0, y: 08 },
  //     c1: { x: 0.25, y: 0.5 },
  //     c2: { x: 0.75, y: 0.5 },
  //     to: { x: 1, y: 1 },
  //   };
  // });

  // const path = useAnimatedProps(() => {
  //   const { from, to, c2, c1 } = data.value;
  //   return {
  //     d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 z `,
  //   };
  // });
  // const from = useAnimatedProps(() => {
  //   const { x, y } = data.value.from;
  //   return { cx: x, cy: y };
  // });
  // const to = useAnimatedProps(() => {
  //   const { x, y } = data.value.to;
  //   return { cx: x, cy: y };
  // });
  // const c2 = useAnimatedProps(() => {
  //   const { x, y } = data.value.c2;
  //   return { cx: x, cy: y };
  // });
  // const c1 = useAnimatedProps(() => {
  //   const { x, y } = data.value.c1;
  //   return { cx: x, cy: y };
  // });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View>
        <Login width={width} height={500} />
      </View>
      <View style={{ padding: 16, width }}>
        <View>
          <Text style={[style.heading]}>Get on</Text>
          <View style={style.subheading}>
            <Text style={[{ letterSpacing: 1 }]}>
              {" "}
              Shopping made easy log in and start enjoying
            </Text>
            <Text style={style.white}>{` `} every minute</Text>
          </View>
        </View>
        <View style={{ width: width * 0.9 }}>
          <Button
            btnTxt="Log in"
            buttonBoxStyle={{ marginVertical: 20 }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Button
            btnTxt="Sign up"
            buttonBoxStyle={{
              backgroundColor: "white",
              borderColor: "black",
              borderRadius: 4,
              borderWidth: 1,
            }}
            btnTxtStyle={{ color: "black" }}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  heading: {
    fontSize: bigHeadingFont,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: "black",
    width: width * 0.9,
    marginHorizontal: "2%",
    padding: "3%",
    borderColor: "white",
    borderRadius: 4,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  subheading: {
    marginBottom: 4,
  },
  center: {
    textAlign: "center",
  },
});
