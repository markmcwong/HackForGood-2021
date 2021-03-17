import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function UiBarsStatusBarsOverridesBlackTime(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.style2}>9:41</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  style2: {
    height: 18,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    letterSpacing: -0.3,
    marginTop: 2
  }
});

export default UiBarsStatusBarsOverridesBlackTime;
