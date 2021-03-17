import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 33 54" style={styles.path2}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M33.00 54.00 L32.13 54.00 C32.12 53.80 32.11 53.61 32.09 53.41 C31.79 49.58 31.15 45.79 30.20 42.07 C28.00 33.59 24.24 25.59 19.13 18.52 C14.03 11.41 7.60 5.40 0.21 0.82 C0.10 0.75 0.02 0.64 0.01 0.51 C-0.02 0.35 0.05 0.18 0.18 0.08 C0.32 -0.02 0.50 -0.03 0.64 0.06 C0.66 0.07 0.68 0.08 0.70 0.09 C4.89 2.68 8.78 5.74 12.29 9.21 C18.58 15.42 23.65 22.78 27.23 30.91 C30.39 38.02 32.33 45.64 32.95 53.41 C32.97 53.61 32.99 53.81 33.00 54.00 Z"
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
  path2: {
    height: 54,
    width: 33
  }
});

export default Path1;
