import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path308(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 25 32" style={styles.path25}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.16 11.31 L0.70 28.54 L0.70 28.65 C0.73 29.66 1.21 30.60 1.99 31.23 C2.78 31.86 3.81 32.12 4.81 31.94 L7.16 31.52 L7.76 31.41 L7.77 31.41 L9.72 31.06 L20.14 29.20 L22.13 28.84 C23.13 28.66 24.00 28.06 24.52 27.20 C25.03 26.33 25.14 25.29 24.82 24.33 L19.20 7.84 C18.22 2.64 13.18 -0.80 7.93 0.16 C2.69 1.11 -0.79 6.10 0.16 11.31 Z"
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
  path25: {
    height: 32,
    width: 25
  }
});

export default Path308;
