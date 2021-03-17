import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path303(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 68" style={styles.path20}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.00 L1.39 13.96 L1.41 14.25 L1.83 18.39 L5.21 52.48 L5.21 52.49 L5.87 59.10 C5.61 59.46 5.38 59.83 5.19 60.23 C3.98 62.69 4.06 65.62 5.42 68.00 C7.07 67.57 8.70 67.09 10.30 66.54 C13.63 65.41 16.87 64.05 20.00 62.45 C19.67 60.60 18.74 58.93 17.35 57.71 L13.95 15.66 L13.65 11.97 L12.68 0.00 Z"
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
  path20: {
    height: 68,
    width: 20
  }
});

export default Path303;
