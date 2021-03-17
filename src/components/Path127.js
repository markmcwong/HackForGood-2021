import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path127(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 28 34" style={styles.path14}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M10.82 3.78 C9.95 5.22 8.67 6.28 7.81 7.74 C7.03 9.07 6.64 10.66 6.70 12.27 C6.73 13.09 6.88 13.94 6.70 14.74 C6.53 15.35 6.24 15.91 5.86 16.37 C4.44 18.32 2.59 19.77 0.51 20.55 C0.26 20.64 -0.05 20.84 0.01 21.14 C0.05 21.27 0.13 21.38 0.24 21.44 L4.47 25.00 C6.96 27.09 9.46 29.21 12.20 30.77 C17.11 33.56 22.60 34.58 28.00 33.69 C27.31 32.42 26.88 30.98 26.75 29.48 C26.58 27.69 26.86 25.87 26.83 24.07 C26.81 22.22 26.47 20.41 25.85 18.72 C25.49 17.73 25.02 16.80 24.74 15.78 C24.45 14.54 24.29 13.25 24.27 11.96 L24.06 7.68 C24.05 6.89 23.95 6.10 23.75 5.34 C23.57 4.76 23.31 4.21 22.98 3.73 C21.43 1.35 19.07 0.33 16.60 0.09 C15.52 -0.02 14.20 -0.13 13.21 0.43 C12.02 1.11 11.54 2.61 10.82 3.78 Z"
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
  path14: {
    height: 34,
    width: 28
  }
});

export default Path127;
