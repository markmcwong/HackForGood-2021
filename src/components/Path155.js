import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path155(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 15.53 10.82" style={styles.path6}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M0.24 0.00 C0.09 0.25 0.01 0.53 0.00 0.81 L0.00 1.15 C0.03 1.73 0.34 2.26 0.83 2.58 L14.70 10.62 C14.95 10.76 15.24 10.83 15.53 10.82 L15.53 8.85 L0.24 0.00 Z"
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
  path6: {
    height: 11,
    width: 16
  }
});

export default Path155;
