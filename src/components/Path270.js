import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path270(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 1.04 2.44" style={styles.path121}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.60 2.44 L0.60 2.44 C0.47 2.45 0.35 2.41 0.26 2.33 C0.16 2.25 0.11 2.13 0.10 2.01 L0.00 0.45 C0.01 0.21 0.20 0.02 0.44 0.00 C0.68 -0.01 0.90 0.15 0.94 0.39 L1.03 1.91 C1.05 2.04 1.01 2.17 0.93 2.27 C0.85 2.37 0.73 2.43 0.60 2.44 Z"
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
  path121: {
    height: 2,
    width: 1
  }
});

export default Path270;
