import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path304(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 47 63" style={styles.path21}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.14 53.58 C0.14 53.61 0.15 53.65 0.15 53.68 C0.27 55.19 1.32 56.45 2.74 56.77 L29.71 62.92 C29.94 62.97 30.18 63.00 30.42 63.00 C31.91 63.00 33.21 61.96 33.60 60.47 C33.66 60.24 33.73 60.01 33.79 59.78 L33.79 59.77 C34.70 56.55 36.33 52.16 38.65 46.64 C39.17 45.39 39.74 44.08 40.33 42.72 C40.44 42.47 40.56 42.21 40.67 41.96 C41.90 39.16 43.28 36.13 44.80 32.87 C45.54 31.28 46.10 29.60 46.47 27.87 C47.45 23.30 47.06 18.53 45.36 14.21 C45.02 13.32 44.62 12.47 44.17 11.64 C40.56 5.00 34.04 0.67 26.76 0.07 C26.19 0.02 25.63 0.00 25.06 0.00 C19.37 0.03 13.91 2.34 9.81 6.46 C7.39 8.91 5.55 11.91 4.45 15.23 C4.37 15.44 4.31 15.66 4.24 15.87 C3.23 19.23 2.41 22.65 1.80 26.12 C1.44 28.17 1.14 30.20 0.90 32.18 C0.06 39.28 -0.19 46.43 0.14 53.58 Z"
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
    height: 63,
    width: 47
  }
});

export default Path304;
