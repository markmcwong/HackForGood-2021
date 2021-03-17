import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path198(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 48.68 61.85" style={styles.path49}>
        <Path
          strokeWidth={0}
          fill="rgba(255,168,167,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M45.58 43.12 C45.58 43.12 38.57 26.86 37.16 23.79 C35.42 20.14 34.18 18.92 32.72 17.81 C32.72 17.81 18.72 6.21 15.68 4.18 C11.85 1.63 9.82 0.45 7.25 0.08 C5.81 -0.12 5.14 0.08 0.92 0.37 C-2.04 7.85 2.40 19.57 10.25 19.41 L10.44 16.25 L27.58 27.66 C27.58 27.66 38.11 44.37 38.31 46.11 C38.51 47.84 38.01 50.34 38.02 52.58 C38.02 54.11 38.49 55.53 38.27 57.04 C38.21 57.41 38.22 57.93 38.59 58.00 C38.70 58.01 38.81 57.99 38.90 57.94 C39.75 57.54 40.35 56.75 40.50 55.82 C40.73 55.06 40.64 54.47 40.86 53.68 C41.28 55.03 41.54 56.44 41.62 57.86 C41.73 58.77 41.92 59.82 42.00 60.63 C42.15 62.16 44.42 62.08 45.71 61.32 C46.97 60.60 47.88 59.39 48.24 57.99 C50.07 52.64 45.58 43.12 45.58 43.12 Z"
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
  path49: {
    height: 62,
    width: 49
  }
});

export default Path198;
