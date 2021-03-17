import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path196(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.93 2.32" style={styles.path47}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.23 2.32 L2.93 0.79 C2.48 0.04 1.51 -0.22 0.74 0.20 C0.39 0.41 0.14 0.76 0.04 1.15 C-0.05 1.55 0.01 1.97 0.23 2.32 Z"
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
  path47: {
    height: 2,
    width: 3
  }
});

export default Path196;
