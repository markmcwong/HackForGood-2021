import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path134(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 10 34" style={styles.path21}>
        <Path
          strokeWidth={0}
          fill="rgba(69,75,105,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.35 0.00 C6.27 1.61 6.29 3.23 6.41 4.84 L6.73 11.24 C6.74 12.10 6.85 12.95 7.06 13.78 C7.31 14.65 7.79 15.41 8.04 16.29 C8.13 16.59 8.18 16.91 8.27 17.21 C8.37 17.59 8.52 17.93 8.66 18.28 C9.53 20.62 9.77 23.22 9.83 25.77 C9.89 28.32 9.78 30.89 10.00 33.43 C9.44 33.61 8.85 33.65 8.28 33.53 C8.07 33.46 7.86 33.42 7.64 33.42 C7.45 33.46 7.27 33.52 7.09 33.61 C5.54 34.27 3.82 34.09 2.40 33.11 C1.97 32.80 1.57 32.45 1.20 32.07 C0.88 31.78 0.60 31.43 0.38 31.04 C0.12 30.47 -0.01 29.83 0.01 29.18 C-0.07 26.58 0.65 24.05 1.14 21.52 C1.57 19.07 1.90 16.59 2.11 14.10 C2.47 10.45 2.37 6.70 3.08 3.12 C3.14 2.60 3.32 2.11 3.60 1.70 C3.84 1.42 4.12 1.21 4.43 1.06 C5.06 0.70 5.70 0.35 6.35 0.00 Z"
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
  path21: {
    height: 34,
    width: 10
  }
});

export default Path134;
