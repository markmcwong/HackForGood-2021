import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path219(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 22.39 22.47" style={styles.path70}>
        <Path
          strokeWidth={0}
          fill="rgba(216,216,216,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.02 11.83 C0.34 18.03 5.62 22.78 11.79 22.45 C17.96 22.12 22.70 16.83 22.37 10.64 C22.04 4.44 16.77 -0.31 10.60 0.02 C7.63 0.17 4.85 1.51 2.87 3.72 C0.88 5.94 -0.14 8.86 0.02 11.83 Z"
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
  path70: {
    height: 22,
    width: 22
  }
});

export default Path219;
