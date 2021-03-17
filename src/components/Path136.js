import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path136(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7 4" style={styles.path23}>
        <Path
          strokeWidth={0}
          fill="rgba(161,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.56 3.03 C6.50 3.33 6.36 3.59 6.17 3.78 C5.96 3.93 5.62 3.80 5.61 3.49 C5.26 3.43 4.99 3.96 4.66 4.00 C4.33 4.03 4.02 3.60 3.69 3.69 C3.49 3.77 3.29 4.05 3.10 3.93 C3.02 3.87 2.97 3.76 2.89 3.72 C2.75 3.67 2.63 3.83 2.49 3.87 C2.21 3.95 2.00 3.49 1.99 3.12 C1.98 2.74 2.07 2.32 1.93 1.99 C1.91 1.93 1.88 1.89 1.84 1.86 C1.75 1.81 1.65 1.92 1.59 2.02 C1.36 2.42 1.29 2.98 1.06 3.39 C0.83 3.81 0.28 4.01 0.07 3.57 C-0.01 3.35 -0.02 3.09 0.03 2.85 C0.17 1.83 0.48 0.73 1.18 0.25 C1.80 -0.15 2.54 0.00 3.21 0.19 C4.15 0.45 5.09 0.73 6.03 1.01 C6.28 1.09 6.88 1.13 6.98 1.51 C7.09 1.88 6.66 2.71 6.56 3.03 Z"
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
  path23: {
    height: 4,
    width: 7
  }
});

export default Path136;
