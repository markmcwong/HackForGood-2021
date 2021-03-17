import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path241(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.97 4.47" style={styles.path92}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M5.28 4.47 C5.14 4.46 5.00 4.42 4.89 4.34 L0.31 1.28 C-0.01 1.06 -0.10 0.63 0.12 0.31 C0.22 0.15 0.38 0.05 0.56 0.01 C0.75 -0.02 0.93 0.02 1.09 0.12 L5.66 3.19 C5.82 3.29 5.92 3.45 5.96 3.64 C5.99 3.82 5.95 4.01 5.85 4.17 C5.72 4.36 5.50 4.47 5.28 4.47 Z"
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
  path92: {
    height: 4,
    width: 6
  }
});

export default Path241;
