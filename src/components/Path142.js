import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path142(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 12 11" style={styles.path29}>
        <Path
          strokeWidth={0}
          fill="rgba(161,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M3.48 3.18 C4.01 2.40 4.64 1.71 5.36 1.16 C5.47 1.07 5.61 1.03 5.75 1.04 C5.86 1.07 5.95 1.16 6.06 1.18 C6.19 1.19 6.31 1.16 6.42 1.08 L7.98 0.24 C8.20 0.10 8.46 0.01 8.72 0.00 C8.99 -0.00 9.22 0.22 9.26 0.53 C9.26 0.85 8.97 1.07 8.72 1.23 C7.95 1.73 7.22 2.30 6.54 2.94 C6.20 3.28 5.82 3.83 6.08 4.27 C6.31 4.52 6.62 4.64 6.94 4.59 C7.50 4.62 8.06 4.57 8.62 4.44 C9.06 4.32 9.48 4.10 9.93 3.98 C10.34 3.89 10.75 3.84 11.17 3.84 C11.42 3.80 11.67 3.86 11.87 4.01 C12.06 4.19 12.04 4.61 11.80 4.67 C12.14 5.17 11.84 5.91 11.40 6.29 C10.96 6.67 10.40 6.82 9.94 7.14 C10.47 6.93 11.11 6.72 11.59 7.07 C11.66 7.12 11.71 7.20 11.74 7.29 C11.77 7.46 11.60 7.60 11.45 7.66 C9.25 8.82 6.63 8.42 4.32 9.28 C3.35 9.64 2.45 10.23 1.68 11.00 C2.04 10.62 -0.18 7.97 0.01 7.22 C0.17 6.60 1.28 5.81 1.69 5.33 C2.31 4.65 2.91 3.93 3.48 3.18 Z"
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
  path29: {
    height: 11,
    width: 12
  }
});

export default Path142;
