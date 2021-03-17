import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path311(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8 23.01" style={styles.path1}>
        <Path
          strokeWidth={0}
          fill="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.79 22.76 C0.28 19.26 -0.24 15.71 0.12 12.17 C0.43 9.02 1.45 5.95 3.52 3.43 C4.62 2.10 5.95 0.96 7.47 0.05 C7.86 -0.18 8.22 0.41 7.83 0.64 C5.21 2.21 3.19 4.52 2.05 7.24 C0.79 10.26 0.58 13.56 0.80 16.78 C0.93 18.72 1.21 20.65 1.49 22.58 C1.54 22.76 1.43 22.94 1.24 23.00 C1.05 23.05 0.85 22.94 0.79 22.76 Z"
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
    height: 23,
    width: 8
  }
});

export default Path311;
