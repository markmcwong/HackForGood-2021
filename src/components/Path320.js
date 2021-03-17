import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path320(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 47 63.03" style={styles.path10}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.14 53.60 C0.14 53.64 0.15 53.67 0.15 53.71 C0.27 55.22 1.32 56.47 2.74 56.80 L29.71 62.95 C29.94 63.00 30.18 63.03 30.42 63.03 C31.91 63.03 33.21 61.99 33.60 60.49 C33.66 60.27 33.73 60.04 33.79 59.80 L33.79 59.80 C34.70 56.57 36.33 52.18 38.65 46.66 C39.17 45.41 39.74 44.11 40.33 42.74 C40.44 42.49 40.56 42.23 40.67 41.97 C41.90 39.18 43.28 36.15 44.80 32.89 C45.54 31.29 46.10 29.61 46.47 27.88 C47.45 23.32 47.06 18.54 45.36 14.21 C45.02 13.33 44.62 12.47 44.17 11.64 C40.56 5.01 34.04 0.67 26.76 0.07 C26.19 0.02 25.63 0.00 25.06 0.00 C19.37 0.03 13.91 2.34 9.81 6.46 C7.39 8.91 5.55 11.92 4.45 15.24 C4.37 15.45 4.31 15.66 4.24 15.88 C3.23 19.24 2.41 22.66 1.80 26.13 C1.44 28.19 1.14 30.22 0.90 32.19 C0.06 39.29 -0.19 46.46 0.14 53.60 Z"
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
    height: 63,
    width: 47
  }
});

export default Path320;
