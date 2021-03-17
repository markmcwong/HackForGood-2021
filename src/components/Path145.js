import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path145(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7 3" style={styles.path32}>
        <Path
          strokeWidth={0}
          fill="rgba(69,75,105,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.36 2.64 C6.45 2.61 6.54 2.57 6.63 2.54 C6.97 2.23 7.09 1.74 6.93 1.30 C6.82 0.98 6.17 0.96 5.90 0.88 C4.87 0.63 3.85 0.39 2.83 0.17 C2.09 0.01 1.28 -0.13 0.62 0.22 C0.37 0.36 0.17 0.80 0.00 1.03 L0.26 1.26 C0.54 1.50 0.82 1.73 1.11 1.95 C1.17 1.88 1.25 1.85 1.34 1.88 C1.38 1.90 1.41 1.94 1.43 1.99 C1.47 2.05 1.49 2.13 1.50 2.20 C2.98 3.08 4.76 3.24 6.36 2.64 Z"
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
  path32: {
    height: 3,
    width: 7
  }
});

export default Path145;
