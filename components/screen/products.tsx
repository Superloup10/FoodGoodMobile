import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import useFetch from "../../hooks/useFetch.tsx";
import { Product } from "../../domain/model/product.dto.tsx";
import { API_URL } from "@env";
import ProductView from "../ui/product.tsx";
import ProductDetail from "./product.tsx";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

type Props = {
  onSelectProduct: (product: Product) => void;
};

const ProductsScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      handleGoBack();
    }, [])
  );

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    navigation.setOptions({ title: product.name });
  };
  const handleGoBack = () => {
    setSelectedProduct(null);
    navigation.setOptions({ title: "Products" });
  };

  return selectedProduct ? (<ProductDetail product={selectedProduct} onGoBack={handleGoBack} />) : (<ProductsList onSelectProduct={handleSelectProduct} />);
};

const ProductsList = ({ onSelectProduct }: Props) => {
  const { data: products } = useFetch<Product[]>(`${API_URL}/api/v1/products`);
  return (
    <View style={styles.container}>
      {products && <FlatList data={products} numColumns={products.length / 15} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectProduct(item)}>
          <ProductView product={item} />
        </TouchableOpacity>
      )} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 10
  }
});

export default ProductsScreen;
