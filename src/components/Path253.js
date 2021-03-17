import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path253(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3.74 4.26" style={styles.path104}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.99 4.26 C2.80 4.25 2.62 4.16 2.50 4.01 L0.16 1.16 C-0.08 0.86 -0.05 0.42 0.25 0.16 C0.55 -0.09 0.99 -0.04 1.24 0.26 L3.58 3.09 C3.83 3.40 3.79 3.84 3.49 4.09 C3.35 4.22 3.17 4.28 2.99 4.26 Z"
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
  path104: {
    height: 4,
    width: 4
  }
});

export default Path253;
