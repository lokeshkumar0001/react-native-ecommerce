import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import CartItem from "../../components/cart/CartItem.js";

import CartService from "../../services/cartItemService.js";
import Loader from "../../utils/Loader.js";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubTotal] = useState(0);
  const [delivery, setDelivery] = useState(2);

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * Number(cartItems[i].count);
    }

    setSubTotal(total);
  }

  useEffect(() => {
    async function getCart() {
      try {
        const data = await CartService.getCartItems();
        setCartItems(data);
        calculateTotal();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
    getCart();
  }, [calculateTotal]);

  const increaseCartItem = async (id) => {
    try {
      setLoading(true);
      const data = await CartService.increaseCartItem(id);
      setCartItems(data);
      calculateTotal();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const decreaseCartItem = async (id) => {
    try {
      setLoading(true);
      const data = await CartService.decreaseCartItem(id);
      setCartItems(data);
      calculateTotal();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  // console.log(cartItems);
  const renderItem = ({ item }) => (
    <CartItem
      item={item}
      increaseCartItem={increaseCartItem}
      decreaseCartItem={decreaseCartItem}
    />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* product display */}
      <View style={styles.cartProductWrapper}>
        {loading ? (
          <Loader />
        ) : (
          <FlatList data={cartItems} renderItem={renderItem} />
        )}
      </View>

      {/* checkout */}
      <View style={styles.checkoutWrapper}>
        <View style={styles.checkoutContentWrapper}>
          <View style={styles.pay_item_wrapper}>
            <View style={styles.pay_each_item}>
              <Text style={styles.pay_title}>Subtotal</Text>
              <Text style={styles.price}>${subtotal}</Text>
            </View>

            <View style={styles.pay_each_item}>
              <Text style={styles.pay_title}>Delivery</Text>
              <Text style={styles.price}>${delivery}</Text>
            </View>

            <View style={styles.pay_each_item}>
              <Text style={styles.pay_title}>Total</Text>
              <Text style={styles.price}>${subtotal + delivery}</Text>
            </View>
          </View>

          <View style={[styles.checkoutButton, { backgroundColor: "#2A4BA0" }]}>
            <Text style={[styles.buttonText, { color: "white" }]}>
              Proceed To checkout
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cartProductWrapper: {
    flex: 3,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  checkoutWrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  checkoutContentWrapper: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  pay_item_wrapper: {
    width: "80%",
    justifyContent: "space-between",
    gap: 10,
  },
  pay_each_item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pay_title: {
    fontSize: 15,
    color: "#616A7D",
  },
  price: {
    fontWeight: "500",
    fontSize: 15,
    color: "#1E222B",
  },
  checkoutButton: {
    paddingVertical: 19,
    paddingHorizontal: 31,
    borderWidth: 1,
    borderColor: "#2A4BA0",
    borderRadius: 20,
    width: "90%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
  },
});
export default Cart;
