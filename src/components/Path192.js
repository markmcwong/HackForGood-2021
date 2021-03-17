import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path192(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.32 2.4" style={styles.path43}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 1.25 C0.01 1.56 0.14 1.86 0.36 2.07 C0.59 2.29 0.89 2.41 1.20 2.40 C1.52 2.40 1.83 2.26 2.04 2.02 C2.25 1.79 2.35 1.47 2.31 1.15 C2.30 0.84 2.17 0.54 1.95 0.32 C1.72 0.11 1.42 -0.01 1.10 0.00 C0.46 0.05 -0.03 0.60 0.00 1.25 Z"
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
  path43: {
    height: 2,
    width: 2
  }
});

export default Path192;
