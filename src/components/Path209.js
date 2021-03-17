import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path209(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 9.24 2.9" style={styles.path60}>
        <Path
          strokeWidth={0}
          fill="rgba(245,245,245,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M9.24 2.00 C8.01 1.28 5.64 1.38 4.46 1.51 C3.28 1.63 2.15 2.06 1.19 2.75 C0.89 2.98 0.47 2.95 0.20 2.68 L0.20 2.68 C0.06 2.52 -0.01 2.32 0.00 2.11 C0.01 1.90 0.11 1.71 0.27 1.58 C1.39 0.71 2.73 0.18 4.14 0.04 C7.05 -0.16 7.80 0.43 7.80 0.43 C8.49 0.71 9.02 1.28 9.24 2.00 Z"
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
  path60: {
    height: 3,
    width: 9
  }
});

export default Path209;
