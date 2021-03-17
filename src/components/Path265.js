import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path265(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 0.94 2.53" style={styles.path116}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.47 2.53 C0.21 2.53 0.00 2.32 0.00 2.07 L0.00 0.47 C-0.00 0.35 0.05 0.23 0.13 0.14 C0.22 0.05 0.34 0.00 0.47 0.00 C0.73 0.00 0.94 0.21 0.94 0.47 L0.94 2.03 C0.95 2.16 0.90 2.29 0.81 2.38 C0.72 2.48 0.60 2.53 0.47 2.53 Z"
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
  path116: {
    height: 3,
    width: 1
  }
});

export default Path265;
