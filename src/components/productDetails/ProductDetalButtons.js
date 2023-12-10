import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CartService from "../../services/cartItemService";

const ProductDetailButtons = ({ item }) => {
  const addToCart = async (item) => {
    try {
      const updatedCartItems = await CartService.addToCart(item);
      console.log(updatedCartItems);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={[styles.screenWrapper, styles.buttonsWrapper]}>
      {/* first button */}
      <TouchableOpacity style={styles.buttons} onPress={() => addToCart(item)}>
        <Text style={[styles.buttonText, { color: "#2A4BA0" }]}>
          Add To Cart
        </Text>
      </TouchableOpacity>
      {/* second button */}
      <TouchableOpacity
        style={[styles.buttons, { backgroundColor: "#2A4BA0" }]}
      >
        <Text style={[styles.buttonText, { color: "white" }]}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  buttonsWrapper: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    paddingVertical: 19,
    paddingHorizontal: 31,
    borderWidth: 1,
    borderColor: "#2A4BA0",
    borderRadius: 20,
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
  },
});

export default ProductDetailButtons;
