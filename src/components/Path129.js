import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path129(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18 14" style={styles.path16}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M5.83 1.81 C5.56 2.58 5.00 3.17 4.30 3.42 C3.62 3.66 2.90 3.79 2.18 3.79 L0.63 3.87 C0.46 3.85 0.28 3.91 0.15 4.03 C0.07 4.14 0.02 4.28 0.01 4.42 C-0.08 5.36 0.40 6.23 0.88 7.00 C2.42 9.45 4.26 11.77 6.67 13.02 C10.44 14.97 14.89 13.95 17.69 10.50 C17.85 10.34 17.96 10.12 18.00 9.88 C17.99 9.52 17.81 9.20 17.53 9.02 C17.02 8.59 16.41 8.31 15.91 7.88 C15.03 7.13 14.41 6.07 14.14 4.86 C13.87 3.66 13.82 2.42 13.99 1.20 C12.07 0.58 9.97 1.07 8.04 0.46 C7.58 0.32 6.74 -0.21 6.26 0.09 C5.79 0.40 5.98 1.29 5.83 1.81 Z"
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
  path16: {
    height: 14,
    width: 18
  }
});

export default Path129;
