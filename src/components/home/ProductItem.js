import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from "react-native";
import PlaceholderSvg from "../../svg/PlaceholderSvg";
import HeartSvg from "../../svg/HeartSvg";

const ProductItem = ({ item, navigation, addToCart }) => {
  const image = { uri: item.thumbnail };
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  return (
    <View style={styles.productWrapper}>
      {/* Image */}

      <TouchableOpacity
        style={{ flex: 4 }}
        onPress={() => navigation.navigate("details", { item: item })}
      >
        <Image source={image} style={styles.image}></Image>
      </TouchableOpacity>

      {/* details */}
      {item.id === 1 ? (
        <HeartSvg
          style={{ position: "absolute", left: 8, top: 8 }}
          fill={"red"}
          stroke={"red"}
        />
      ) : (
        <HeartSvg
          style={{ position: "absolute", left: 8, top: 8 }}
          fill="white"
          stroke={"white"}
        />
      )}

      <View style={{ flex: 1, margin: 10, position: "relative" }}>
        <View style={styles.productDetails}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            ${item.price}
          </Text>
          <Text style={{ fontSize: 12 }}>{item.title}</Text>
        </View>

        <TouchableOpacity
          style={styles.addToCart}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={{ fontSize: 20, color: "white" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productWrapper: {
    backgroundColor: "#F8F9FB",
    borderRadius: 10,
    position: "relative",
    margin: 8,
    flex: 1,
    minHeight: 250,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    objectFit: "cover",
  },
  productDetails: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  addToCart: {
    backgroundColor: "#2A4BA0",
    borderRadius: 20,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    right: 0,
  },
});

export default ProductItem;
