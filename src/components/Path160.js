import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path160(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 67.26 40.8" style={styles.path11}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M23.88 40.59 L0.83 27.23 C0.34 26.91 0.03 26.38 0.00 25.79 L0.00 25.46 C0.03 24.88 0.34 24.34 0.83 24.02 L41.71 0.20 C42.23 -0.07 42.84 -0.07 43.37 0.20 L66.41 13.55 C66.92 13.87 67.24 14.42 67.26 15.02 L67.26 15.35 C67.24 15.94 66.93 16.47 66.44 16.79 L25.55 40.62 C25.02 40.88 24.40 40.87 23.88 40.59 Z"
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
  path11: {
    height: 41,
    width: 67
  }
});

export default Path160;
