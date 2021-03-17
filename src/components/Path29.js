import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path29(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.9 -0.9 16.85 25.5" style={styles.path}>
        <Path
          strokeWidth={1.8}
          fill="rgba(18,18,19,1)"
          stroke="rgba(18,18,19,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M13.60 22.80 C13.47 22.80 13.33 22.76 13.22 22.67 L1.06 12.18 C0.96 12.10 0.90 11.98 0.90 11.85 C0.90 11.72 0.96 11.60 1.06 11.52 L13.22 1.04 C13.43 0.85 13.78 0.85 13.99 1.04 C14.20 1.22 14.20 1.52 13.99 1.71 L2.21 11.85 L13.99 22.00 C14.20 22.18 14.20 22.48 13.99 22.67 C13.88 22.76 13.74 22.80 13.60 22.80 Z"
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
  path: {
    height: 22,
    width: 13
  }
});

export default Path29;
