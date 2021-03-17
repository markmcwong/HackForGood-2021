import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path307(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 32 30" style={styles.path24}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.12 14.04 L0.12 14.05 C0.24 14.47 0.44 14.86 0.71 15.21 L6.28 22.32 L8.93 25.72 L11.25 28.69 C11.86 29.46 12.78 29.94 13.77 29.99 C14.76 30.05 15.73 29.67 16.42 28.97 L24.86 20.32 L28.35 16.74 C32.47 13.57 33.21 7.70 30.01 3.62 C26.80 -0.45 20.86 -1.20 16.71 1.95 L14.54 3.15 L1.75 10.21 C0.38 10.97 -0.29 12.55 0.12 14.04 Z"
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
  path24: {
    height: 30,
    width: 32
  }
});

export default Path307;
