import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path323(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 32 30.01" style={styles.path13}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.12 14.05 L0.12 14.05 C0.24 14.48 0.44 14.87 0.71 15.22 L6.28 22.33 L8.93 25.73 L11.25 28.70 C11.86 29.48 12.78 29.95 13.77 30.01 C14.76 30.06 15.73 29.69 16.42 28.98 L24.86 20.33 L28.35 16.75 C32.47 13.57 33.21 7.70 30.01 3.62 C26.80 -0.45 20.86 -1.20 16.71 1.95 L14.54 3.15 L1.75 10.21 C0.38 10.97 -0.29 12.55 0.12 14.05 Z"
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
  path13: {
    height: 30,
    width: 32
  }
});

export default Path323;
