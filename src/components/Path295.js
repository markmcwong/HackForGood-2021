import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path295(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8 23" style={styles.path12}>
        <Path
          strokeWidth={0}
          fill="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.79 22.75 C0.28 19.25 -0.24 15.70 0.12 12.16 C0.43 9.02 1.45 5.95 3.52 3.43 C4.62 2.10 5.95 0.95 7.47 0.05 C7.86 -0.18 8.22 0.41 7.83 0.64 C5.21 2.21 3.19 4.51 2.05 7.23 C0.79 10.26 0.58 13.55 0.80 16.77 C0.93 18.71 1.21 20.64 1.49 22.57 C1.54 22.75 1.43 22.93 1.24 22.99 C1.05 23.04 0.85 22.93 0.79 22.75 Z"
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
  path12: {
    height: 23,
    width: 8
  }
});

export default Path295;
