import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path243(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7.32 4.95" style={styles.path94}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.58 2.99 C-0.51 1.64 -0.02 0.32 1.68 0.04 C3.58 -0.17 5.45 0.55 6.74 1.97 C7.82 3.32 7.33 4.64 5.64 4.92 C3.75 5.13 1.87 4.41 0.58 2.99 Z"
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
  path94: {
    height: 5,
    width: 7
  }
});

export default Path243;
