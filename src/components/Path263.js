import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path263(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 0.94 2.49" style={styles.path114}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.47 2.49 C0.21 2.49 0.00 2.29 0.00 2.03 L0.00 0.46 C0.00 0.21 0.21 0.00 0.47 0.00 C0.72 0.00 0.93 0.21 0.94 0.46 L0.94 2.03 C0.94 2.15 0.89 2.27 0.80 2.36 C0.71 2.45 0.59 2.49 0.47 2.49 Z"
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
  path114: {
    height: 2,
    width: 1
  }
});

export default Path263;
