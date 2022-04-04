import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import ProductView from "./screens/ProductView";
import SignUpView from "./screens/SignUpView";
import WishList from "./screens/WishList";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "yellow",
  },
};
const client = new ApolloClient({
  uri: "http://192.168.43.189:400",
  cache: new InMemoryCache(),
});

export default function App() {
  const Tabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const WishListStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="WishList"
        component={WishList}
      />
      <Stack.Screen name="SignUpView" component={SignUpView} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
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
        component={WishListStack}
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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
