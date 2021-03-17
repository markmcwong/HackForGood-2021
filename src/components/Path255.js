import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path255(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3.72 4.24" style={styles.path106}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.96 4.24 C2.77 4.23 2.60 4.13 2.48 3.99 L0.15 1.15 C-0.08 0.84 -0.04 0.41 0.25 0.17 C0.54 -0.08 0.97 -0.05 1.23 0.23 L3.56 3.08 C3.74 3.30 3.77 3.61 3.64 3.86 C3.51 4.11 3.24 4.26 2.96 4.24 Z"
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
  path106: {
    height: 4,
    width: 4
  }
});

export default Path255;
