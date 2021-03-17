import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path182(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.38 2.89" style={styles.path33}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.63 2.88 C0.36 2.83 0.14 2.63 0.05 2.37 C-0.02 2.18 -0.01 1.96 0.08 1.78 C0.17 1.59 0.33 1.45 0.52 1.38 L4.35 0.04 C4.61 -0.05 4.90 0.01 5.11 0.19 C5.32 0.37 5.42 0.65 5.37 0.92 C5.32 1.19 5.13 1.41 4.86 1.51 L1.03 2.85 C0.90 2.89 0.76 2.90 0.63 2.88 Z"
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
  path33: {
    height: 3,
    width: 5
  }
});

export default Path182;
