import { View, Text, TouchableOpacity } from "react-native";

export default function MyTabBar({ state, descriptors, navigation }: any): any {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  console.log("state, descriptors, navigation", state, descriptors, navigation);
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  console.log("state", state);

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map(
        (route: { key: string; name: string; params: any }, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
}
