import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Product } from "../../domain/model/product.dto.tsx";

interface Props {
  product: Product;
  onGoBack: () => void;
}

const ProductDetail = ({ product, onGoBack }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>{"\u2190"}</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.price}>{product.price}€</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "row"
  },
  backButton: {
    marginBottom: 10
  },
  backButtonText: {
    color: "blue",
    fontFamily: "JetbrainsMonoRegular",
    fontSize: 20
  },
  price: {
    fontFamily: "JetbrainsMonoRegular",
    fontSize: 20,
    color: "green"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 2
  }
});

export default ProductDetail;
