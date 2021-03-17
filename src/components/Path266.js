import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path266(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.5 0.93" style={styles.path117}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.03 0.93 L0.47 0.93 C0.34 0.93 0.22 0.89 0.13 0.80 C0.05 0.71 -0.00 0.59 0.00 0.46 C0.00 0.21 0.21 0.00 0.47 0.00 L2.03 0.00 C2.16 -0.00 2.28 0.05 2.37 0.13 C2.45 0.22 2.50 0.34 2.50 0.46 C2.50 0.72 2.29 0.93 2.03 0.93 Z"
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
  path117: {
    height: 1,
    width: 3
  }
});

export default Path266;
