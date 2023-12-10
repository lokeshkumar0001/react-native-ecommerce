import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import PlaceholderSvg from "../../svg/PlaceholderSvg";

const Discountbanner = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{title}</Text> */}
      <View>
        <PlaceholderSvg />
      </View>
      {/* discount details */}
      <View>
        <Text style={styles.discountText1}>Get</Text>

        <Text style={styles.discountText2}>50% OFF</Text>

        <Text style={styles.discountText3}>On first 03 order</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container]}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  item: {
    backgroundColor: "#F9B023",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    marginVertical: 27,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 44,
  },
  discountText1: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
  },
  discountText2: {
    fontSize: 26,
    fontWeight: "500",
    color: "#fff",
  },
  discountText3: {
    fontSize: 13,
    fontWeight: "300",
    color: "#fff",
  },
});

export default Discountbanner;
