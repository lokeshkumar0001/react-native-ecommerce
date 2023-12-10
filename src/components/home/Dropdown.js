import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const DropdownComponent = ({data}) => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    height: 30,
    borderBottomColor: "gray",
  },

  placeholderStyle: {
    fontSize: 16,
    color:'#F8F9FB'
  },
  selectedTextStyle: {
    fontSize: 18,
    color:'#F8F9FB'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontWeight:'500'
  },
});
