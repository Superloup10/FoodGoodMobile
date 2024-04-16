import { Image, StyleSheet, View } from "react-native";
import React from "react";
import CategoriesView from "../ui/categories.tsx";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CategoriesView />
      <Image style={styles.image} source={require("../../assets/images/caddie.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 390,
    height: 484
  }
});

export default HomeScreen;
