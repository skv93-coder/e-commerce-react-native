import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useMutation,
  HttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import ProductView from "./screens/ProductView";
import WishList from "./screens/WishList";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { useEffect } from "react";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { LOGIN_USER } from "./Api/User/mutation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "yellow",
  },
};
let token: any;

const httpLink = new HttpLink({ uri: "http://192.168.43.189:400" });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default function App() {
  const withToken = setContext(async () => {
    if (token) {
      return { token };
    }
    token = await AsyncStorage.getItem("token");
    return { token };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
  });

  const Tabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  // console.log("client", client.cache);

  const WishListStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="WishList"
        component={WishList}
      />
      {/* <Stack.Screen name="SignUpView" component={SignUpView} /> */}
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
  const authChecker = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log("token", token);
    if (token) {
    }
  };

  useEffect(() => {
    authChecker();
  }, [AsyncStorageLib]);

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
