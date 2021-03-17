import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path238(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 16.15 18.65" style={styles.path89}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.72 7.90 C0.97 7.84 1.22 7.81 1.48 7.82 C2.37 7.82 3.49 7.87 7.68 11.61 C11.88 15.36 11.22 17.81 11.22 17.81 L10.92 18.58 C10.92 18.58 11.87 19.01 12.63 17.72 C13.95 15.15 15.12 12.50 16.14 9.80 C16.34 8.91 14.30 3.67 9.80 1.52 C5.30 -0.63 2.44 -0.05 1.82 0.56 C1.21 1.18 0.00 6.74 0.00 6.74 L0.72 7.90 Z"
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
  path89: {
    height: 19,
    width: 16
  }
});

export default Path238;
