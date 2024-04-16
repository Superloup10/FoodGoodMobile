import "react-native-gesture-handler";
import React from "react";
import ProductsScreen from "./components/screen/products.tsx";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/screen/home.tsx";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet } from "react-native";

export type DrawerParamList = {
  Home: undefined;
  Products: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function LogoTitle() {
  return (
    <Image style={{ width: 50, height: 50 }} source={require("./assets/images/logo.png")} />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ drawerLabelStyle: styles.text, headerTitleStyle: styles.text }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: "Home", headerTitle: () => <LogoTitle /> }} />
        <Drawer.Screen name="Products" component={ProductsScreen} options={{ drawerLabel: "Products" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "JetbrainsMonoBold",
    fontWeight: "bold"
  }
});

export default App;
