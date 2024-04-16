import { Category } from "../../domain/model/category.tsx";
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const images = {
  [Category.MEAT]: require("../../assets/images/meat.jpg"),
  [Category.GROCERY]: require("../../assets/images/grocery.jpg"),
  [Category.FRUIT]: require("../../assets/images/fruit.jpg"),
  [Category.VEGETABLE]: require("../../assets/images/vegetable.jpg"),
  [Category.DAIRY_PRODUCT]: require("../../assets/images/dairy_product.jpg")
};

const CategoriesView = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", height: "100%", gap: 10, padding: 5 }}>
      {Object.values(Category).map((value, index) => (
        <View key={index} style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Image style={styles.image} source={images[value]} />
          <Text style={{ flex: 1, justifyContent: "center", color: "#000" }}>
            {value.toLowerCase().replace("_", " ")}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    borderRadius: 9999
  }
});

export default CategoriesView;
