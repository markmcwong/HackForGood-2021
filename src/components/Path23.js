import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path23(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.15 -0.15 7.69 5.92" style={styles.path3}>
        <Path
          strokeWidth={0.3}
          fill="rgba(42,135,255,1)"
          stroke="rgba(42,135,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.19 5.32 C2.08 5.32 1.98 5.28 1.90 5.20 L0.12 3.42 C-0.04 3.26 -0.04 3.00 0.12 2.83 C0.29 2.67 0.55 2.67 0.71 2.83 L2.19 4.31 L6.38 0.12 C6.54 -0.04 6.81 -0.04 6.97 0.12 C7.13 0.29 7.13 0.55 6.97 0.71 L2.48 5.20 C2.40 5.28 2.30 5.32 2.19 5.32 Z"
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
  path3: {
    height: 5,
    width: 7
  }
});

export default Path23;
