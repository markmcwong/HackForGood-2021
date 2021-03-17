import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path210(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.34 2.64" style={styles.path61}>
        <Path
          strokeWidth={0}
          fill="rgba(245,245,245,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.03 0.11 C5.26 -0.11 6.51 -0.00 7.69 0.42 C8.21 0.71 8.54 1.52 8.21 1.72 C7.19 1.31 6.07 1.16 4.97 1.28 C3.88 1.38 2.81 1.68 1.82 2.15 C1.57 2.25 1.28 2.41 1.02 2.55 C0.85 2.65 0.66 2.67 0.48 2.61 C0.29 2.56 0.15 2.43 0.06 2.25 L0.06 2.25 C-0.08 1.95 0.03 1.59 0.32 1.42 C1.45 0.72 2.71 0.28 4.03 0.11 Z"
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
  path61: {
    height: 3,
    width: 8
  }
});

export default Path210;
