import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path258(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.17 3.71" style={styles.path109}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.64 3.70 C0.36 3.67 0.12 3.48 0.03 3.20 C-0.05 2.93 0.03 2.63 0.25 2.45 L3.06 0.12 C3.36 -0.08 3.77 -0.03 4.00 0.26 C4.24 0.54 4.22 0.96 3.96 1.22 L1.15 3.57 C1.00 3.68 0.82 3.73 0.64 3.70 Z"
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
  path109: {
    height: 4,
    width: 4
  }
});

export default Path258;
