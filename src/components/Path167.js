import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path167(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 75.21 113.06" style={styles.path18}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M36.53 7.27 C35.60 6.09 29.48 0.00 29.48 0.00 C23.28 5.61 5.74 6.22 0.00 2.74 C0.21 12.23 0.89 23.18 1.39 33.31 C1.85 42.58 2.53 49.72 2.53 49.72 C3.08 57.72 4.06 66.68 5.71 81.58 C7.14 94.55 10.41 112.32 10.41 112.32 C10.41 112.32 14.53 114.02 20.91 112.26 C20.91 112.26 22.48 98.28 23.00 92.17 C23.57 85.50 24.22 81.54 21.89 70.22 L22.88 39.83 C22.88 39.83 32.64 59.31 35.57 63.88 C38.49 68.45 41.85 73.41 44.05 74.60 C46.25 75.79 47.82 75.17 57.36 72.40 C66.89 69.63 75.12 66.87 75.12 66.87 C75.12 66.87 75.74 60.49 73.81 56.10 C73.81 56.10 67.26 56.10 63.61 56.22 C59.97 56.35 54.93 56.86 52.54 58.27 C52.54 58.27 48.85 41.53 46.52 33.00 C44.18 24.47 41.58 13.67 36.53 7.27 Z"
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
  path18: {
    height: 113,
    width: 75
  }
});

export default Path167;
