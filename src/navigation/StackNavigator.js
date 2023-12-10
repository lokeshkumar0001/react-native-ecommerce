import React, { useEffect, useState } from "react";
import HomeTabScreen from "./TabNavigators/HomeTabs";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "../screens/Home/ProductDetails";
import Cart from "../screens/Home/Cart";
import CartService from "../services/cartItemService";

const Stack = createStackNavigator();

function TabNavigator() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    async function getCart() {
      try {
        const data = await CartService.getCartItems();
        setCartItems(data);
  
      } catch (error) {
        
        console.log(error.message);
      }
    }
    getCart();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeTabScreen}
        options={({ navigation }) => ({
          title: "Hey, Rishav",
          headerStyle: {
            backgroundColor: "#2A4BA0",
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate("cart")}
              >
                <View style={styles.bagContainer}>
                  <Image
                    style={styles.bagImage}
                    source={require("../../assets/bag.png")}
                  ></Image>
                  <View style={styles.bag_notification}>
                    <Text>{cartItems.length}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="details"
        component={ProductDetails}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.bagImage}
                  source={require("../../assets/backButton.png")}
                ></Image>
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate("cart")}
              >
                <View style={styles.bagContainer}>
                  <Image
                    style={styles.bagImage}
                    source={require("../../assets/bagBlack.jpg")}
                  ></Image>
                  <View style={styles.bag_notification}>
                    <Text>{cartItems.length}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
          title: null,
        })}
      />

      <Stack.Screen name="cart" component={Cart} options={({ navigation }) => ({
          headerShadowVisible: false,
          title:`Shoping Cart(${cartItems.length})`,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.bagImage}
                  source={require("../../assets/backButton.png")}
                ></Image>
              </TouchableOpacity>
            );
          },
          
        })} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  bagContainer: {
    position: "relative",
  },

  bag_notification: {
    padding: 1,
    backgroundColor: "#F9B023",
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -10,
    right: -10,
  },
});

export default TabNavigator;
