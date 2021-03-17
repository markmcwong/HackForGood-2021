import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path267(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.53 1.03" style={styles.path118}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.08 0.93 L2.08 0.93 L0.55 1.03 C0.37 1.06 0.19 0.98 0.09 0.84 C-0.02 0.69 -0.03 0.49 0.06 0.33 C0.15 0.18 0.32 0.08 0.50 0.09 L2.03 0.00 C2.29 -0.02 2.51 0.18 2.53 0.43 C2.54 0.69 2.34 0.91 2.08 0.93 Z"
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
  path118: {
    height: 1,
    width: 3
  }
});

export default Path267;
