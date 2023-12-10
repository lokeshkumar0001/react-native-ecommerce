import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import HeartSvg from "../../svg/HeartSvg";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatList = useRef();

  const screenWidth = Dimensions.get("window").width;


  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{marginTop:16}}>
        <Image
          source={{ uri: item }}
          style={{ height: 250, width: screenWidth }}
        />
      </View>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderIndicator = () => {
    return images.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            style={{
              backgroundColor: "#F9B023",
              height: 5,
              width: 20,
              borderRadius: 5,
              marginHorizontal: 5,
            }}
          ></View>
        );
      } else {
        return (
          <View
            style={{
              backgroundColor: "#A1A1AB",
              height: 3,
              width: 20,
              borderRadius: 5,
              marginHorizontal: 5,
            }}
          ></View>
        );
      }
    });
  };
  return (
    <View style={styles.carouselWrapper}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indicatorWrapper}>{renderIndicator()}</View>
      <View style={styles.add_to_wishlist}><HeartSvg fill='white' /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselWrapper: {
    position: "relative",
  },
  indicatorWrapper: {
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    left:20,
  },
  add_to_wishlist:{
    padding:20,
    position: "absolute",
    backgroundColor:'white',
    borderRadius: 20,
    right: 20,
    top:20
  }
});

export default Carousel;
