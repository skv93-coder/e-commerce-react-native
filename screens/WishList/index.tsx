import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import ProductViewCard from "../../componets/  ProductViewCard";

const { height, width } = Dimensions.get("window");

export default function WishList({ navigation }) {
  return (
    <View style={{ backgroundColor: "white", height, width, flex: 1 }}>
      <FlatList
        style={{ height: height * 0.9, flex: 0.9 }}
        data={[1, 23, 4, 3, 3, 3, 5, 67, 89]}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ProductViewCard navigation={navigation}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderColor: "#f0eded",
                borderWidth: 2,
                borderRadius: 2,
              }}
            >
              <Text>Add to Cart</Text>
            </View>
          </ProductViewCard>
        )}
      />
    </View>
  );
}
