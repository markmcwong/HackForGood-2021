import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function ShapesRoundedSquareSecondary(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle16}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle16: {
    height: 32,
    width: 32,
    backgroundColor: "rgba(255,89,152,1)"
  }
});

export default ShapesRoundedSquareSecondary;
