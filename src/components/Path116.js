import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path116(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 46 122" style={styles.path3}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.93 44.13 C4.28 43.14 3.68 42.09 3.15 41.01 L15.76 38.55 L2.12 38.67 C-0.53 31.84 -0.68 24.02 1.68 17.05 L19.98 28.33 L3.10 13.60 C7.42 4.77 15.52 -0.46 24.11 0.03 C32.70 0.53 40.34 6.67 43.91 15.95 C47.48 25.23 46.39 36.10 41.08 44.13 C42.10 45.67 42.98 47.34 43.70 49.10 L27.33 59.19 L44.78 52.25 C47.28 60.98 45.88 70.62 41.08 77.87 C48.48 89.05 47.40 105.11 38.60 114.76 C29.79 124.41 16.21 124.41 7.40 114.76 C-1.41 105.11 -2.49 89.05 4.92 77.87 C-1.64 67.97 -1.64 54.03 4.92 44.13 L4.93 44.13 Z"
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
  path3: {
    height: 122,
    width: 46
  }
});

export default Path116;
