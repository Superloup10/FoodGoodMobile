import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "../../domain/model/product.dto.tsx";

const ProductView = ({ product }: { product: Product }) => {
  return (
    <View style={styles.product}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.text}>{product.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  text: {
    color: "#fff",
    fontFamily: "JetbrainsMonoRegular",
    fontSize: 16
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 2
  }
});

export default ProductView;
