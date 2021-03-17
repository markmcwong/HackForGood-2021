import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path223(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.46 3.42" style={styles.path74}>
        <Path
          strokeWidth={0}
          fill="rgba(216,216,216,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.26 3.42 L0.00 1.41 C0.24 0.84 0.70 0.39 1.27 0.16 C1.85 -0.07 2.49 -0.05 3.05 0.20 C4.25 0.78 4.78 2.20 4.26 3.42 Z"
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
  path74: {
    height: 3,
    width: 4
  }
});

export default Path223;
