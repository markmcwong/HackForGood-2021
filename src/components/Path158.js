import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path158(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 15.56 10.83" style={styles.path9}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M0.24 0.00 C0.10 0.25 0.01 0.53 0.00 0.82 L0.00 1.15 C0.03 1.74 0.34 2.27 0.83 2.59 L14.73 10.63 C14.99 10.76 15.27 10.83 15.56 10.83 L15.56 8.86 L0.24 0.00 Z"
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
    height: 11,
    width: 16
  }
});

export default Path158;
