import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path45(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 25 57" style={styles.path8}>
        <Path
          strokeWidth={0}
          fill="rgba(160,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M23.58 0.00 L25.00 22.21 L6.95 49.23 C6.95 55.52 3.77 57.00 3.77 57.00 C2.56 54.99 1.50 52.88 0.58 50.71 C-1.19 46.64 1.64 43.31 1.64 43.31 L14.03 15.92 L8.72 2.22 L23.58 0.00 Z"
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
  path8: {
    height: 57,
    width: 25
  }
});

export default Path45;
