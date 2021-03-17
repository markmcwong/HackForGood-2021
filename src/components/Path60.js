import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path60(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 30 8" style={styles.path23}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M29.94 2.75 C26.08 3.49 19.07 4.94 18.50 5.81 C17.71 7.01 11.79 7.35 8.24 7.87 C6.20 8.16 3.20 7.92 0.95 7.59 C0.35 5.09 0.00 3.06 0.00 3.06 C0.00 3.06 29.21 -1.45 29.92 0.48 C30.02 1.23 30.03 2.00 29.94 2.75 Z"
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
  path23: {
    height: 8,
    width: 30
  }
});

export default Path60;
