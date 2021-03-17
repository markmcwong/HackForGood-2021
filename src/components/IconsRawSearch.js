import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CombinedShape3 from "./CombinedShape3";

function IconsRawSearch(props) {
  return (
    <View style={[styles.container, props.style]}>
      <CombinedShape3 style={styles.combinedShape3}></CombinedShape3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  combinedShape3: {
    height: 18,
    width: 17,
    backgroundColor: "transparent",
    marginTop: 3,
    marginLeft: 3
  }
});

export default IconsRawSearch;
