import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import DropdownComponent from "./Dropdown";

function DeliveryDetails() {
  const deliveryOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  const withinOptions = [
    { label: "Within 1", value: "within1" },
    { label: "Within 2", value: "within2" },
  ];

  
  return (
    <View style={[styles.deliveryDetailsWrapper]}>
      {/* delivery */}
      <View style={styles.deliveryContainer}>
        <Text style={styles.headingText}>DELIVERY TO</Text>
        <DropdownComponent data={deliveryOptions}/>
      </View>

      <View style={styles.withinContainer}>
        <Text style={styles.headingText}>WITHIN</Text>
        <DropdownComponent  data={withinOptions} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryDetailsWrapper: {
    // borderWidth:1,
    marginTop: 29,
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap: 50,
  },
  headingText: {
    color: "gray",
    fontWeight: "800",
  },
  deliveryContainer: {
    // borderWidth:1,
    flex: 2,
  },
  withinContainer: {
    // borderWidth:1,
    flex: 1,
    justifyContent:'flex-end'
  },
});

export default DeliveryDetails;
