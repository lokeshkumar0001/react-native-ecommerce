import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CartItem = ({item,increaseCartItem,decreaseCartItem}) => {
  function handleincrease(id){
    increaseCartItem(id)
  }
  function handleDec(id){
    decreaseCartItem(id)
  }
  return (
    <View style={styles.cartItemWrapper}>
      <View style={{flexDirection:'row',gap:20}}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
        ></Image>
        <View style={{ gap: 2, justifyContent:"center", alignItems:'start' }}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>
            $<Text>{item.price}</Text>
          </Text>
        </View>
      </View>

      <View style={{flexDirection:'row',gap:15, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style={styles.bgCircle} onPress={() => handleDec(item.id)}>
          <Text style={styles.resizeButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.size}>{item.count}</Text>
        <TouchableOpacity style={styles.bgCircle} onPress={() => handleincrease(item.id)}>
          <Text style={styles.resizeButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding:5,
    borderBottomWidth:.6,
    borderBottomColor:'#F8F9FB'
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 6,
  },
  text:{
    fontSize:17,
  },
  bgCircle:{
    backgroundColor:'#F8F9FB',
    height:30,
    width:30,
    borderRadius:20,
    alignItems:'center',
    justifyContent: 'center'
  },
  size:{
    fontSize:16
  },
  resizeButton:{
    fontSize:18
  }
});

export default CartItem;
