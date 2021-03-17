import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path293(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 15 16" style={styles.path10}>
        <Path
          strokeWidth={0}
          fill="rgba(204,204,204,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.49 16.00 C0.29 16.00 0.11 15.87 0.04 15.68 C-0.04 15.48 0.00 15.26 0.14 15.11 L14.16 0.15 C14.35 -0.05 14.66 -0.05 14.86 0.15 C15.05 0.36 15.05 0.69 14.86 0.89 L0.84 15.85 C0.75 15.95 0.62 16.00 0.49 16.00 Z"
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
  path10: {
    height: 16,
    width: 15
  }
});

export default Path293;
