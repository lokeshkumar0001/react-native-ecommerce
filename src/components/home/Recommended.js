import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import ProductItem from "./ProductItem";
import { useGetProduct } from "../../hooks/useGetProduct";
import Loader from "../../utils/Loader";

// const items = [
//   { id: 1, price: 89, title: "Clownfish.H03" },
//   { id: 2, price: 89, title: "Clownfish.H03" },
//   { id: 3, price: 89, title: "Clownfish.H03" },
//   { id: 4, price: 89, title: "Clownfish.H03" },
//   { id: 5, price: 89, title: "Clownfish.H03" },
//   { id: 6, price: 89, title: "Clownfish.H03" },
//   // Add more items as needed
// ];

const Recommended = ({ navigation, addToCart }) => {
  const [isloading, data, error] = useGetProduct();

  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.headingText}>Recommended</Text>
      {isloading ? (
        <Loader />
      ) :error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          style={styles.productWrapper}
          data={data.products}
          renderItem={({ item }) => (
            <ProductItem key={item.id} item={item} navigation={navigation} addToCart={addToCart} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor:'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "400",
  },
  productWrapper: {
    marginTop: 12,
  },
});

export default Recommended;
