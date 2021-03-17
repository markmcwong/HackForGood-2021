import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path268(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 1.03 2.49" style={styles.path119}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.60 2.49 L0.60 2.49 C0.34 2.51 0.12 2.31 0.10 2.05 L0.00 0.49 C-0.01 0.24 0.18 0.03 0.44 0.00 C0.69 -0.01 0.92 0.18 0.93 0.44 L1.03 1.96 C1.05 2.09 1.01 2.22 0.93 2.32 C0.85 2.42 0.73 2.48 0.60 2.49 Z"
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
  path119: {
    height: 2,
    width: 1
  }
});

export default Path268;
