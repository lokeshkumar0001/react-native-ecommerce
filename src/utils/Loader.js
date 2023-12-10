import React from "react";
import { SafeAreaView,ActivityIndicator } from "react-native";

const Loader = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size={"large"} color={"blue"} />
    </SafeAreaView>
  );
};

export default Loader;
