import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path194(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 9.41 7.2" style={styles.path45}>
        <Path
          strokeWidth={0}
          fill="rgba(242,143,143,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 5.36 C2.87 4.71 8.69 2.43 9.41 0.00 C9.15 1.23 8.51 2.35 7.59 3.22 C5.94 4.92 0.17 7.20 0.17 7.20 L0.00 5.36 Z"
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
  path45: {
    height: 7,
    width: 9
  }
});

export default Path194;
