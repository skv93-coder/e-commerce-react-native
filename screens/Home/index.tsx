import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function Home() {
  return (
    <LinearGradient colors={["#2d2d2d", "#101010"]} style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            width,
            paddingTop: 48,
            paddingLeft: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="shopping-bag" size={24} color="white" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "white", fontSize: 20 }}>Shopy.</Text>
          </View>
        </View>
        <View
          style={{
            width,
            paddingTop: 20,
            paddingLeft: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 60 }}>Please your</Text>
        </View>
        <View
          style={{
            width,
            paddingTop: 5,
            paddingLeft: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 60 }}>eyes on the</Text>
        </View>
        <View
          style={{
            width,
            paddingTop: 5,
            paddingLeft: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 60 }}>Trending</Text>
        </View>
        <View
          style={{
            width,
            paddingTop: 5,
            paddingLeft: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 60 }}>items at</Text>
        </View>
        <View
          style={{
            width,
            paddingTop: 5,
            paddingLeft: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 60 }}>Shopy.</Text>
        </View>
        <View
          style={{
            width: width * 0.7,
            paddingTop: 40,
            paddingLeft: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#5c5c5c",
              fontSize: 18,
              lineHeight: 30,
            }}
          >
            Use the voucher provided to buy a shirt, because there are lots pf
            free vouchers here!
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              width,
              paddingTop: 40,
              paddingLeft: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 32,
                paddingVertical: 10,
                borderRadius: 4,
              }}
            >
              <Text style={{ color: "black", fontSize: 18, fontWeight: "800" }}>
                Explore!
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}
