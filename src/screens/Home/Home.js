import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DeliveryDetails from "../../components/home/Deliverydetails";
import Discountbanner from "../../components/home/Discountbanner";
import Recommended from "../../components/home/Recommended";
import CartService from "../../services/cartItemService";
// import { getHeaderRight } from '@react-navigation/elements';

function Home({ navigation }) {
  
  const addToCart = async (item) => {
    try {
      const updatedCartItems = await CartService.addToCart(item);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.topContainer, styles.screenWrapper]}>
        {/* adding search serach input */}
        <View style={styles.searchSection}>
          <Feather
            style={styles.searchIcon}
            name="search"
            size={18}
            color="white"
          />

          <TextInput
            style={styles.input}
            placeholder="Search Products or store"
            placeholderTextColor="#8891A5"
          />
        </View>

        {/* delivery details */}
        <DeliveryDetails />
      </View>

      {/* Banners */}
      <Discountbanner />

      {/* Recommended */}
      <Recommended navigation={navigation} addToCart={addToCart} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    paddingBottom: 12,
    backgroundColor: "#2A4BA0",
  },

  screenWrapper: {
    paddingHorizontal: 20,
  },

  userName: {
    fontSize: 22,
    color: "white",
  },

  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 29,
    borderRadius: 50,
    paddingLeft: 28,
    paddingRight: 5,
    backgroundColor: "#153075",
  },

  searchIcon: {
    marginRight: 1,
  },
  input: {
    paddingLeft: 58,
    flex: 1,
    padding: 15,
    paddingLeft: 10,
    fontSize: 14,
    color: "white",
  },
});

export default Home;
