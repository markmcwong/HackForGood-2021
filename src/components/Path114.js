import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path114(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 70 183" style={styles.path1}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M62.51 66.21 C63.51 64.73 64.41 63.16 65.23 61.53 L46.03 57.85 L66.80 58.02 C70.82 47.79 71.06 36.06 67.47 25.61 L39.61 42.50 L65.29 20.42 C58.73 7.17 46.39 -0.69 33.31 0.05 C20.23 0.79 8.60 10.00 3.16 23.93 C-2.28 37.86 -0.60 54.17 7.49 66.20 C5.93 68.52 4.59 71.02 3.49 73.68 L28.41 88.81 L1.85 78.38 C-1.94 91.48 0.18 105.93 7.49 116.80 C-3.79 133.57 -2.15 157.66 11.25 172.14 C24.66 186.62 45.34 186.62 58.75 172.14 C72.15 157.66 73.79 133.57 62.51 116.80 Z"
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
  path1: {
    height: 183,
    width: 70
  }
});

export default Path114;
