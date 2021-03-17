import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path278(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3.05 1.41" style={styles.path129}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.52 1.41 C0.25 1.42 0.03 1.21 0.00 0.95 C-0.02 0.68 0.16 0.44 0.42 0.40 L2.44 0.01 C2.62 -0.03 2.80 0.04 2.92 0.18 C3.04 0.31 3.08 0.51 3.02 0.68 C2.96 0.85 2.82 0.98 2.64 1.02 L0.62 1.41 L0.52 1.41 Z"
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
  path129: {
    height: 1,
    width: 3
  }
});

export default Path278;
