import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path51(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 102" style={styles.path14}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M20.00 0.00 L16.20 39.96 C16.20 39.96 15.01 55.81 11.44 59.24 C11.44 59.24 11.44 64.26 10.24 65.84 L8.58 86.71 C8.58 86.71 10.96 94.37 10.72 95.69 C10.48 97.01 11.67 101.24 11.44 101.77 C11.20 102.29 0.00 101.77 0.00 101.77 L2.38 59.24 L9.77 0.08 L20.00 0.00 Z"
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
  path14: {
    height: 102,
    width: 20
  }
});

export default Path51;
