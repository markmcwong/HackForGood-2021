import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path220(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7.76 23.86" style={styles.path71}>
        <Path
          strokeWidth={0}
          fill="rgba(216,216,216,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.73 6.32 L4.04 0.01 C2.75 -0.07 1.49 0.45 0.64 1.42 C-0.77 3.03 0.31 7.77 2.42 12.37 C2.42 12.37 4.70 20.79 5.47 22.18 C5.99 23.01 6.81 23.61 7.76 23.86 L6.73 6.32 Z"
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
  path71: {
    height: 24,
    width: 8
  }
});

export default Path220;
