import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path216(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 43.09 118.36" style={styles.path67}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.31 4.84 C1.70 23.06 1.05 63.23 1.05 63.23 C0.86 65.52 0.19 70.95 0.02 79.11 C-0.22 90.95 1.48 117.02 1.48 117.02 C1.48 117.02 6.40 119.67 11.56 117.52 C11.56 117.52 17.16 80.11 18.95 68.43 C20.53 58.17 23.64 38.86 23.64 38.86 L26.09 63.68 C25.91 68.69 26.19 73.72 26.94 78.68 C27.77 84.04 31.70 107.36 31.70 107.36 C35.44 108.31 39.37 108.23 43.07 107.12 C43.07 107.12 42.97 68.89 43.07 63.91 C43.18 58.24 42.63 0.00 42.63 0.00 L2.31 4.84 Z"
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
  path67: {
    height: 118,
    width: 43
  }
});

export default Path216;
