import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path12(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 10 35" style={styles.path13}>
        <Path
          strokeWidth={0}
          fill="rgba(255,180,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.20 35.00 C6.63 35.00 6.13 34.62 5.95 34.06 L0.35 21.75 C0.12 21.03 -0.00 20.28 0.00 19.52 L1.68 3.52 C1.68 1.66 3.08 0.12 4.87 0.01 C6.65 -0.11 8.22 1.25 8.43 3.09 L5.85 21.35 L9.97 32.56 C10.10 33.18 9.81 33.81 9.27 34.09 L7.79 34.86 C7.61 34.95 7.41 35.00 7.20 35.00 Z"
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
  path13: {
    height: 35,
    width: 10
  }
});

export default Path12;
