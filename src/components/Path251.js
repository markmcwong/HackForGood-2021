import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path251(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.67 4.88" style={styles.path102}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.64 4.88 C0.58 4.88 0.52 4.87 0.46 4.84 C0.09 4.71 -0.09 4.30 0.04 3.93 L1.31 0.46 C1.38 0.29 1.51 0.14 1.68 0.06 C1.85 -0.01 2.04 -0.02 2.22 0.05 C2.58 0.18 2.76 0.59 2.63 0.96 L1.36 4.42 C1.25 4.72 0.95 4.91 0.64 4.88 Z"
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
  path102: {
    height: 5,
    width: 3
  }
});

export default Path251;
