import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Play(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.1 9.39" style={styles.play1}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.66 4.03 L1.30 0.09 C1.11 -0.02 0.88 0.00 0.70 0.00 C-0.00 0.00 0.00 0.54 0.00 0.67 L0.00 8.71 C0.00 8.83 -0.00 9.38 0.70 9.38 C0.88 9.38 1.11 9.40 1.30 9.29 L7.66 5.36 C8.18 5.05 8.09 4.69 8.09 4.69 C8.09 4.69 8.18 4.33 7.66 4.03 Z"
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
  play1: {
    height: 9,
    width: 8
  }
});

export default Play;
