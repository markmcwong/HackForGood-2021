import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path239(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6.5 3.57" style={styles.path90}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.71 3.57 C0.38 3.58 0.08 3.35 0.01 3.01 C-0.05 2.68 0.13 2.35 0.45 2.22 L5.56 0.04 C5.91 -0.08 6.30 0.09 6.44 0.43 C6.59 0.77 6.44 1.17 6.11 1.34 L0.99 3.52 C0.90 3.55 0.81 3.57 0.71 3.57 Z"
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
  path90: {
    height: 4,
    width: 7
  }
});

export default Path239;
