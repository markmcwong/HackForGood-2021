import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path9(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 23" style={styles.path10}>
        <Path
          strokeWidth={0}
          fill="rgba(255,180,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.50 22.05 L0.17 6.94 C-0.48 4.69 0.80 2.35 3.13 1.50 C6.61 0.24 9.93 -0.23 13.00 0.11 C15.72 0.41 19.08 15.39 18.86 15.71 L19.93 18.70 C20.05 19.04 20.01 19.42 19.82 19.74 C19.63 20.05 19.30 20.27 18.92 20.35 L6.12 22.97 C6.02 22.99 5.92 23.00 5.82 23.00 C5.20 23.00 4.66 22.61 4.50 22.05 Z"
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
  path10: {
    height: 23,
    width: 20
  }
});

export default Path9;
