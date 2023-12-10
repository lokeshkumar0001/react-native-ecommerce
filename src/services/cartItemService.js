// CartService.js

import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "cartItems";

const CartService = {
  addToCart: async (item) => {
    try {
      const cartItemFromLocal = await AsyncStorage.getItem(CART_KEY);
      let cartItem = cartItemFromLocal ? JSON.parse(cartItemFromLocal) : [];
      function checkExist(id) {
        for (let i = 0; i < cartItem.length; i++) {
          if (cartItem[i].id === id) {
            return cartItem[i];
          }
        }
        return null;
      }
      const existingItem = checkExist(item.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        cartItem.push({ ...item, count: 1 });
      }
      await AsyncStorage.setItem(CART_KEY, JSON.stringify(cartItem));
      alert('item added to cart')
      return cartItem;
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
      throw error;
    }
  },

  getCartItems: async () => {
    try {
      // Retrieve current cart items from AsyncStorage
      const cartItems = await AsyncStorage.getItem(CART_KEY);
      return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
      console.error("Error getting cart items:", error.message);
      throw error;
    }
  },

  increaseCartItem: async (id) => {
    try {
      const cartItemFromLocal = await AsyncStorage.getItem(CART_KEY);
      let cartItem = cartItemFromLocal ? JSON.parse(cartItemFromLocal) : [];
      checkExist(id);
      function checkExist(id) {
        for (let i = 0; i < cartItem.length; i++) {
          if (cartItem[i].id === id) {
            cartItem[i].count += 1;
            break;
          }
        }
      }

      await AsyncStorage.setItem(CART_KEY, JSON.stringify(cartItem));
      return cartItem;
    } catch (error) {
      console.error("Error increaseing cart items:", error.message);
      throw error;
    }
  },
  decreaseCartItem: async (id) => {
    try {
      const cartItemFromLocal = await AsyncStorage.getItem(CART_KEY);
      let cartItem = cartItemFromLocal ? JSON.parse(cartItemFromLocal) : [];
      checkExist(id);
      function checkExist(id) {
        for (let i = 0; i < cartItem.length; i++) {
          if (cartItem[i].id === id) {
            cartItem[i].count -= 1;
            if (cartItem[i].count<=0) {
              cartItem = cartItem.filter((item)=> item.id !== id)
            }
            break;
          }
        }
      }

      await AsyncStorage.setItem(CART_KEY, JSON.stringify(cartItem));
      return cartItem;
    } catch (error) {
      console.error("Error increaseing cart items:", error.message);
      throw error;
    }
  },
};

export default CartService;
