import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path324(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 25 32.01" style={styles.path14}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.16 11.31 L0.70 28.55 L0.70 28.66 C0.73 29.67 1.21 30.61 1.99 31.24 C2.78 31.88 3.81 32.14 4.81 31.96 L7.16 31.54 L7.76 31.43 L7.77 31.43 L9.72 31.08 L20.14 29.21 L22.13 28.86 C23.13 28.68 24.00 28.07 24.52 27.21 C25.03 26.34 25.14 25.30 24.82 24.35 L19.20 7.85 C18.22 2.64 13.18 -0.80 7.93 0.16 C2.69 1.12 -0.79 6.10 0.16 11.31 Z"
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
  path14: {
    height: 32,
    width: 25
  }
});

export default Path324;
