import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 110 55" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(255,180,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M99.07 54.43 C98.82 54.62 98.58 54.81 98.33 55.00 L37.06 55.00 C36.60 54.81 36.15 54.62 35.70 54.43 C29.23 51.63 23.21 47.90 17.83 43.36 C14.25 40.35 10.97 37.24 8.59 34.33 C5.26 30.26 2.20 25.83 0.78 20.78 C-0.65 15.74 -0.22 9.95 2.95 5.76 C3.94 4.48 5.14 3.38 6.52 2.52 C6.75 2.37 6.98 2.23 7.22 2.10 C11.02 -0.02 15.83 -0.54 20.11 0.56 C26.25 2.14 31.35 6.54 34.99 11.71 C38.63 16.87 40.99 22.80 43.32 28.66 C45.68 18.20 52.84 8.82 62.50 4.06 C72.16 -0.71 84.17 -0.65 93.62 4.51 C96.60 6.15 99.29 8.25 101.58 10.75 C101.81 10.99 102.03 11.24 102.25 11.49 C106.86 16.80 109.75 23.61 109.98 30.62 C110.29 39.66 106.08 48.74 99.07 54.43 Z"
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
  path: {
    height: 55,
    width: 110
  }
});

export default Path;
