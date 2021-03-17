import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path53(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 37 19" style={styles.path16}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M3.57 1.23 C3.57 1.23 -2.11 16.23 0.86 18.04 C3.82 19.85 34.90 18.55 34.90 18.55 C34.90 18.55 40.08 15.19 34.16 12.86 C34.16 12.86 29.23 12.60 26.02 10.54 C22.81 8.47 19.11 4.59 19.11 4.59 C19.11 4.59 18.87 -1.10 16.89 0.19 C15.70 1.02 14.89 2.33 14.67 3.81 L3.57 1.23 Z"
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
  path16: {
    height: 19,
    width: 37
  }
});

export default Path53;
