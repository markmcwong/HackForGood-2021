import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path34(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.15 -0.15 7.15 5.92" style={styles.path5}>
        <Path
          strokeWidth={0.3}
          fill="rgba(42,135,255,1)"
          stroke="rgba(42,135,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.02 5.32 C1.92 5.32 1.82 5.28 1.75 5.20 L0.11 3.42 C-0.04 3.26 -0.04 3.00 0.11 2.83 C0.26 2.67 0.51 2.67 0.66 2.83 L2.02 4.31 L5.89 0.12 C6.04 -0.04 6.28 -0.04 6.43 0.12 C6.58 0.29 6.58 0.55 6.43 0.71 L2.29 5.20 C2.22 5.28 2.12 5.32 2.02 5.32 Z"
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
  path5: {
    height: 5,
    width: 7
  }
});

export default Path34;
