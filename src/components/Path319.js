import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path319(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 68.03" style={styles.path9}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.00 L1.39 13.97 L1.41 14.26 L1.83 18.40 L5.21 52.50 L5.21 52.51 L5.87 59.13 C5.61 59.48 5.38 59.86 5.19 60.26 C3.98 62.72 4.06 65.65 5.42 68.03 C7.07 67.60 8.70 67.12 10.30 66.57 C13.63 65.44 16.87 64.07 20.00 62.47 C19.67 60.63 18.74 58.95 17.35 57.74 L13.95 15.67 L13.65 11.98 L12.68 0.00 Z"
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
  path9: {
    height: 68,
    width: 20
  }
});

export default Path319;
