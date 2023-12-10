import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Rating from "../../components/productDetails/Ratings";
import Carousel from "../../components/productDetails/Carousel";
import ProductDetailButtons from "../../components/productDetails/ProductDetalButtons";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const ProductDetails = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>

      <View style={[styles.screenWrapper]}>
        <Text style={styles.titleText}>{item.title}</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}
        >
          <Rating rating={item.rating} />
          <Text style={{ color: "#A1A1AB" }}>100 Reviews</Text>
        </View>
      </View>

      <Carousel images={item.images} />

      <View style={[styles.screenWrapper, styles.productPriceWrapper]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#2A4BA0" }}>
            {" "}
            ${item.price}
          </Text>
          <Text style={{ color: "#2A4BA0" }}>/KG</Text>
        </View>

        <View style={styles.discountWrapper}>
          <Text style={{ color: "#FAFBFD", fontSize: 12 }}>
            $
            {(
              item.price -
              (item.price * item.discountPercentage) / 100
            ).toFixed(2)}{" "}
            OFF
          </Text>
        </View>
      </View>
      <ProductDetailButtons item={item} />
      {/* product details display */}
      <View style={styles.screenWrapper} >
          <Text style={{fontSize:16}}>Details</Text>   
          <Text style={{color:'#8891A5',marginTop:4,}}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  screenWrapper: {
    paddingHorizontal: 20,
  },
  
  titleText: {
    fontSize: 50,
  },
  productPriceWrapper: {
    marginTop: 26,
    flexDirection: "row",
    gap: 20,
  },
  discountWrapper: {
    backgroundColor: "#2A4BA0",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 70,
  },
});

export default ProductDetails;
