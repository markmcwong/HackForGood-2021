import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path30(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.15 -0.15 7.6 6.6" style={styles.path1}>
        <Path
          strokeWidth={0.3}
          fill="rgba(42,135,255,1)"
          stroke="rgba(42,135,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.16 6.00 C2.06 6.00 1.95 5.95 1.87 5.86 L0.12 3.86 C-0.04 3.68 -0.04 3.38 0.12 3.20 C0.28 3.01 0.54 3.01 0.70 3.20 L2.16 4.86 L6.30 0.14 C6.46 -0.05 6.72 -0.05 6.88 0.14 C7.04 0.32 7.04 0.62 6.88 0.80 L2.45 5.86 C2.37 5.95 2.27 6.00 2.16 6.00 Z"
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
    height: 6,
    width: 7
  }
});

export default Path30;
