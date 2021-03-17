import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path171(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.29 5.39" style={styles.path22}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.82 5.31 C-0.07 4.92 -0.57 3.44 0.72 1.99 C2.22 0.47 4.36 -0.24 6.47 0.07 C8.37 0.46 8.86 1.96 7.58 3.40 C6.07 4.92 3.93 5.63 1.82 5.31 Z"
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
  path22: {
    height: 5,
    width: 8
  }
});

export default Path171;
