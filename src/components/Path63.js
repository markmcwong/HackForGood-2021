import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path63(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3 8" style={styles.path26}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M3.00 0.00 C3.00 0.00 -1.22 6.57 0.35 7.87 C1.92 9.18 3.00 0.00 3.00 0.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0
  },
  path26: {
    height: 8,
    width: 3
  }
});

export default Path63;
