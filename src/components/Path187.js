import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path187(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.27 3.19" style={styles.path38}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.27 3.19 L4.27 1.27 C3.69 0.16 2.34 -0.31 1.20 0.21 C0.67 0.48 0.28 0.94 0.10 1.50 C-0.08 2.07 -0.02 2.68 0.27 3.19 Z"
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
  path38: {
    height: 3,
    width: 4
  }
});

export default Path187;
