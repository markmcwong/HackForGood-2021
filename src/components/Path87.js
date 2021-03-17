import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path87(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 37 88" style={styles.path50}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M37.00 82.60 C37.00 82.60 23.57 84.79 22.76 85.93 C21.96 87.07 15.91 87.39 12.28 87.87 C8.66 88.36 2.14 87.30 1.66 86.98 C-1.16 85.08 0.21 62.80 1.42 60.04 C2.63 57.28 2.22 41.87 1.10 35.70 C-0.03 29.54 1.66 21.83 1.66 21.83 C1.66 21.83 3.35 16.40 3.03 15.26 C2.71 14.12 4.64 11.69 4.64 11.69 C4.64 11.69 7.62 6.74 9.15 6.00 C9.71 5.73 10.14 5.22 10.30 4.61 C10.59 3.71 10.55 2.58 10.60 1.63 C10.68 0.00 12.29 0.00 12.29 0.00 C16.88 0.73 27.66 7.54 27.66 7.54 C27.26 9.08 29.83 13.47 29.83 13.47 C29.88 13.54 29.92 13.61 29.96 13.69 C32.78 19.04 34.83 35.45 34.83 35.45 C34.83 35.45 34.97 43.29 34.94 49.06 C34.94 51.94 34.88 54.30 34.74 54.92 C34.51 56.03 34.97 61.16 35.44 66.04 C35.77 69.42 36.10 72.67 36.20 74.39 C36.46 78.62 37.00 82.60 37.00 82.60 Z"
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
  path50: {
    height: 88,
    width: 37
  }
});

export default Path87;
