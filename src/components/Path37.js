import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path37(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 52 45" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(160,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M52.00 6.13 L42.37 26.40 L13.59 40.32 C10.51 45.84 0.75 46.27 0.04 42.69 C-0.76 38.69 11.90 32.23 11.90 32.23 L35.97 14.91 L38.08 0.00 L52.00 6.13 Z"
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
  path: {
    height: 45,
    width: 52
  }
});

export default Path37;
