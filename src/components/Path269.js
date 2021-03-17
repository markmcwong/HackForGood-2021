import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path269(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.5 1.03" style={styles.path120}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.02 0.93 L2.02 0.93 L0.50 1.03 C0.37 1.04 0.25 0.99 0.16 0.91 C0.07 0.83 0.01 0.72 0.00 0.59 C-0.01 0.34 0.18 0.12 0.44 0.09 L2.00 0.00 C2.12 -0.01 2.25 0.03 2.34 0.12 C2.43 0.20 2.49 0.31 2.50 0.43 C2.51 0.56 2.46 0.69 2.37 0.78 C2.28 0.88 2.15 0.93 2.02 0.93 Z"
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
  path120: {
    height: 1,
    width: 3
  }
});

export default Path269;
