import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path188(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 45.66 54.96" style={styles.path39}>
        <Path
          strokeWidth={0}
          fill="rgba(255,211,121,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.66 15.92 C2.63 11.25 5.04 6.78 7.89 2.59 L22.87 0.45 C24.45 0.24 26.80 0.02 27.66 0.00 C28.44 -0.01 29.21 0.10 29.96 0.32 C32.82 1.25 33.56 3.79 34.20 6.85 C34.91 10.20 36.75 13.32 36.83 19.05 L36.06 25.83 L36.00 26.96 C36.00 27.16 36.00 27.35 36.00 27.55 C35.77 30.35 36.71 33.12 38.60 35.21 C43.12 40.57 43.87 41.33 45.66 43.83 C42.05 50.60 18.03 59.74 8.75 52.01 C8.75 52.01 8.21 39.66 7.99 36.51 C7.15 32.26 6.23 29.37 6.01 28.35 C0.61 26.89 -1.09 20.12 0.66 15.92 Z"
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
  path39: {
    height: 55,
    width: 46
  }
});

export default Path188;
