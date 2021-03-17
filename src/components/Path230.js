import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path230(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 10.42 16.97" style={styles.path81}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M10.41 16.97 C9.81 14.14 9.48 8.87 9.00 7.78 C8.51 6.70 5.79 4.61 5.68 3.19 L5.46 0.02 C5.46 0.02 4.07 -0.20 3.65 0.87 C3.24 1.93 0.00 5.96 0.00 5.96 C0.00 5.96 0.15 10.26 1.21 12.65 C2.26 15.05 3.88 16.08 4.47 15.91 C4.92 15.78 6.05 12.52 6.60 11.26 C7.28 9.69 7.44 9.02 8.17 10.58 C8.75 11.86 10.41 16.97 10.41 16.97 Z"
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
  path81: {
    height: 17,
    width: 10
  }
});

export default Path230;
