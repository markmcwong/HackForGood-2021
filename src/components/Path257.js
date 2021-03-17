import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path257(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.99 2.04" style={styles.path108}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.63 2.04 C0.28 2.00 0.01 1.71 0.00 1.36 C-0.01 1.00 0.23 0.69 0.58 0.63 L4.18 0.01 C4.36 -0.02 4.55 0.02 4.70 0.13 C4.85 0.23 4.95 0.40 4.98 0.58 C5.01 0.77 4.97 0.96 4.87 1.11 C4.76 1.27 4.60 1.37 4.42 1.40 L0.81 2.03 C0.75 2.04 0.69 2.04 0.63 2.04 Z"
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
  path108: {
    height: 2,
    width: 5
  }
});

export default Path257;
