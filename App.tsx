import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import MyTabBar from "./componets/MyTabs";
import ProductView from "./screens/ProductView";

const { height, width } = Dimensions.get("window");

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "yellow",
  },
};

export default function App() {
  const Tabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Shop}
        name="Shop"
      />
      <Stack.Screen component={ProductView} name="ShopView" />
    </Stack.Navigator>
  );
  const TabsStack = () => (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
          tabBarShowLabel: false,
        }}
        name="Home"
        component={HomeStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <AntDesign name="heart" size={24} color="black" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            ),
          tabBarShowLabel: false,
        }}
        name="Shop-1"
        component={Shop}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Entypo name="shopping-cart" size={24} color="black" />
            ) : (
              <AntDesign name="shoppingcart" size={24} color="black" />
            ),
          tabBarShowLabel: false,
        }}
        name="Shop-2"
        component={Shop}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={24} color="black" />
            ) : (
              <FontAwesome5 name="user" size={24} color="black" />
            ),
          tabBarShowLabel: false,
        }}
        name="Shop-4"
        component={Shop}
      />
    </Tabs.Navigator>
  );

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Start"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ShopStack"
            component={TabsStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
