import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path122(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6 9" style={styles.path9}>
        <Path
          strokeWidth={0}
          fill="rgba(161,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.56 5.87 C0.46 6.63 0.27 7.38 0.00 8.09 C1.11 8.55 2.27 8.86 3.44 8.99 C3.52 9.01 3.59 9.00 3.66 8.96 C3.75 8.88 3.74 8.72 3.72 8.59 C3.70 7.86 3.82 7.13 4.08 6.46 C4.73 4.40 5.37 2.34 6.00 0.28 C4.88 -0.30 2.56 0.05 1.61 1.02 C0.74 1.91 0.78 4.62 0.56 5.87 Z"
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
  path9: {
    height: 9,
    width: 6
  }
});

export default Path122;
