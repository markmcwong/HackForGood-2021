import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path123(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6 8" style={styles.path10}>
        <Path
          strokeWidth={0}
          fill="rgba(161,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.06 6.32 C0.02 6.41 0.00 6.50 0.00 6.59 C0.00 6.91 0.40 7.02 0.70 7.05 C2.15 7.19 3.58 7.51 4.96 8.00 C5.13 7.47 4.89 6.89 4.89 6.33 C4.89 5.55 5.31 4.86 5.58 4.14 C6.06 2.86 6.02 1.43 5.98 0.06 C4.82 0.14 2.07 -0.43 1.42 0.85 C1.06 1.57 1.08 2.65 0.92 3.44 C0.70 4.43 0.41 5.39 0.06 6.32 Z"
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
  path10: {
    height: 8,
    width: 6
  }
});

export default Path123;
