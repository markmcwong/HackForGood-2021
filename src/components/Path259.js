import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path259(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 0.94 2.49" style={styles.path110}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.47 2.49 C0.35 2.49 0.23 2.45 0.14 2.36 C0.05 2.27 0.00 2.15 0.00 2.03 L0.00 0.47 C0.00 0.21 0.21 0.00 0.47 0.00 C0.60 0.00 0.72 0.05 0.81 0.14 C0.89 0.23 0.94 0.35 0.94 0.47 L0.94 2.03 C0.94 2.15 0.89 2.27 0.80 2.36 C0.72 2.44 0.60 2.49 0.47 2.49 Z"
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
  path110: {
    height: 2,
    width: 1
  }
});

export default Path259;
