import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  ApolloLink,
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
import NotLoggedIn from "./screens/NotLoggedIn";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { useEffect, useState } from "react";
import { LOGIN_USER } from "./Api/User/mutation";
import WishList from "./screens/WishList";
import Cart from "./screens/Cart";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "yellow",
  },
};
let token: any;

const httpLink = new HttpLink({ uri: "http://192.168.13.189:400" });

export default function App() {
  const [token, setToken] = useState<boolean>(false);

  const authLink = new ApolloLink((operation, forward) => {
    if (token) {
      operation.setContext(({ headers }: any) => ({
        headers: { Authorization: token, ...headers },
      }));
    }
    return forward(operation).map((data: any) => {
      console.log("data", data);
      if (data?.data?.userCreate?.token || data?.data?.login?.token) {
        setToken(data?.data?.userCreate?.token || data?.data?.login?.token);
        AsyncStorage.setItem(
          "token",
          data?.data?.userCreate?.token || data?.data?.login?.token
        );
      }
      return data;
    });
  });
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        if (message.includes("Unauthorized")) {
          AsyncStorage.removeItem("token");
          setToken(false);
        }
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, authLink, httpLink]),
  });

  const Tabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const WishListStack = () => (
    <Stack.Navigator>
      {token ? (
        <>
          <Stack.Screen
            options={{
              title: "WishList",
              headerTitleAlign: "center",
              headerTitle: () => (
                <Text
                  style={{
                    backgroundColor: "white",
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  WishList
                </Text>
              ),
              headerLeft: () => (
                <AntDesign name="search1" size={24} color="black" />
              ),
              headerRight: () => (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
            }}
            name="WishList"
            component={WishList}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="WishList"
            component={NotLoggedIn}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
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
        component={Cart}
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

  useEffect(() => {
    AsyncStorage.getItem("token").then((res: any) => {
      setToken(res);
    });
    // AsyncStorage.removeItem("token");
  }, []);

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
