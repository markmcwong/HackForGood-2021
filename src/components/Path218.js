import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path218(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 43.02 67.33" style={styles.path69}>
        <Path
          strokeWidth={0}
          fill="rgba(255,215,132,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M5.57 2.18 C2.00 2.82 1.75 4.59 0.99 8.13 C0.60 9.89 -0.26 13.68 0.08 16.85 L2.73 37.85 L1.82 61.99 C7.55 68.25 30.48 70.26 43.02 61.08 C43.02 61.08 42.88 21.42 42.30 15.05 C41.30 3.93 36.28 -0.02 28.90 0.00 L16.26 1.09 L5.57 2.18 Z"
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
  path69: {
    height: 67,
    width: 43
  }
});

export default Path218;
