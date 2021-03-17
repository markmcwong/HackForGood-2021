import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path245(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7.76 5.25" style={styles.path96}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.61 3.13 C-0.54 1.70 -0.02 0.30 1.78 0.04 C3.79 -0.18 5.78 0.58 7.14 2.08 C8.30 3.51 7.78 4.92 5.97 5.22 C3.96 5.43 1.97 4.65 0.61 3.13 Z"
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
  path96: {
    height: 5,
    width: 8
  }
});

export default Path245;
