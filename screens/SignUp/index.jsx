import React from "react";
import { View, Dimensions } from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
} from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function SignUp() {
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const data = useDerivedValue(() => {
    return {
      from: { x: 0, y: 0 },
      c1: { x: 0.25, y: 0.5 },
      c2: { x: 0.75, y: 0.5 },
      to: { x: 1, y: 1 },
    };
  });

  const path = useAnimatedProps(() => {
    const { from, to, c2, c1 } = data.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 z `,
    };
  });
  const from = useAnimatedProps(() => {
    const { x, y } = data.value.from;
    return { cx: x, cy: y };
  });
  const to = useAnimatedProps(() => {
    const { x, y } = data.value.to;
    return { cx: x, cy: y };
  });
  const c2 = useAnimatedProps(() => {
    const { x, y } = data.value.c2;
    return { cx: x, cy: y };
  });
  const c1 = useAnimatedProps(() => {
    const { x, y } = data.value.c1;
    return { cx: x, cy: y };
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg width={width} height={height} viewBox="0 0 1 1">
        <AnimatedPath fill="blue" animatedProps={path} />
        <AnimatedCircle r={0.05} fill="blue" animatedProps={from} />
        <AnimatedCircle r={0.05} fill="red" animatedProps={c1} />
        <AnimatedCircle r={0.05} fill="red" animatedProps={c2} />
        <AnimatedCircle r={0.05} fill="blue" animatedProps={to} />
      </Svg>
    </View>
  );
}
