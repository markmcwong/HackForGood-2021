import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path163(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 16.05 56" style={styles.path14}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M5.01 2.91 L16.00 54.56 C16.04 54.67 16.05 54.79 16.04 54.90 C16.05 54.95 16.05 55.00 16.04 55.05 C15.95 55.30 15.77 55.49 15.54 55.61 C15.03 55.88 14.46 56.02 13.88 56.00 C13.31 56.02 12.74 55.88 12.24 55.61 C12.04 55.51 11.88 55.36 11.77 55.18 L11.72 55.01 L11.72 54.94 L0.00 0.00 "
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
  path14: {
    height: 56,
    width: 16
  }
});

export default Path163;
