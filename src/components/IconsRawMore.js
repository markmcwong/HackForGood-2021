import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CombinedShape4 from "./CombinedShape4";

function IconsRawMore(props) {
  return (
    <View style={[styles.container, props.style]}>
      <CombinedShape4 style={styles.combinedShape4}></CombinedShape4>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  combinedShape4: {
    height: 18,
    width: 4,
    backgroundColor: "transparent",
    marginTop: 3,
    marginLeft: 10
  }
});

export default IconsRawMore;
