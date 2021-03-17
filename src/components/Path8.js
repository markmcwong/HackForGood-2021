import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path8(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 45 56" style={styles.path9}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M15.88 56.00 C15.83 56.00 15.78 56.00 15.73 55.99 L1.22 54.45 C0.83 54.41 0.48 54.20 0.25 53.89 C0.02 53.57 -0.05 53.17 0.04 52.79 L12.89 4.33 C13.01 3.83 13.41 3.44 13.92 3.33 L25.84 0.03 C26.33 -0.07 26.83 0.09 27.16 0.46 C34.83 9.03 40.60 28.03 44.98 51.98 C45.04 52.34 44.96 52.72 44.74 53.02 C44.51 53.32 44.18 53.52 43.81 53.56 L31.92 55.07 C31.22 55.16 30.56 54.70 30.41 54.02 L24.63 28.45 C24.52 27.96 24.08 27.62 23.58 27.63 C23.08 27.63 22.65 27.98 22.55 28.47 L17.22 54.91 C17.09 55.54 16.53 56.00 15.88 56.00 Z"
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
  path9: {
    height: 56,
    width: 45
  }
});

export default Path8;
