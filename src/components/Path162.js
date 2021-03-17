import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path162(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 24.7 16.13" style={styles.path13}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M0.24 0.00 C0.09 0.25 0.01 0.53 0.00 0.81 L0.00 1.14 C0.03 1.72 0.34 2.26 0.83 2.57 L23.88 15.93 C24.13 16.07 24.42 16.14 24.70 16.13 L24.70 14.20 L0.24 0.00 Z"
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
    height: 16,
    width: 25
  }
});

export default Path162;
