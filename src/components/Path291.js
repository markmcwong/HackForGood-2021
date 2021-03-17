import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path291(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 26 32" style={styles.path8}>
        <Path
          strokeWidth={0}
          fill="rgba(204,204,204,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M25.50 32.00 C25.36 32.00 25.22 31.93 25.13 31.82 L0.12 0.88 C-0.06 0.66 -0.04 0.32 0.17 0.13 C0.38 -0.06 0.69 -0.04 0.87 0.18 L25.88 31.12 C26.01 31.27 26.04 31.50 25.96 31.69 C25.87 31.88 25.70 32.00 25.50 32.00 Z"
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
  path8: {
    height: 32,
    width: 26
  }
});

export default Path291;
