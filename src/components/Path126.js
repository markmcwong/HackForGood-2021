import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path126(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8 17" style={styles.path13}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.05 12.08 C-0.02 12.68 -0.02 13.29 0.05 13.89 C0.30 15.59 1.60 16.88 2.97 17.00 C4.37 17.06 5.70 16.23 6.52 14.80 C6.78 14.38 6.98 13.89 7.11 13.38 C7.22 12.89 7.28 12.38 7.31 11.87 L7.81 5.12 C7.89 4.18 8.19 2.81 7.81 1.92 C7.49 1.16 6.72 0.91 6.12 0.62 C5.13 0.11 4.05 -0.09 2.99 0.04 C1.13 0.23 1.15 2.62 0.86 4.52 C0.50 7.03 0.23 9.55 0.05 12.08 Z"
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
  path13: {
    height: 17,
    width: 8
  }
});

export default Path126;
