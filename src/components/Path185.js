import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path185(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.18 4.59" style={styles.path36}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.61 4.56 C0.48 4.54 0.35 4.48 0.25 4.40 C-0.06 4.12 -0.08 3.64 0.19 3.33 L2.82 0.27 C3.00 0.06 3.28 -0.04 3.55 0.01 C3.82 0.07 4.05 0.26 4.14 0.52 C4.23 0.78 4.17 1.07 3.99 1.28 L1.37 4.34 C1.17 4.55 0.88 4.64 0.61 4.56 Z"
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
  path36: {
    height: 5,
    width: 4
  }
});

export default Path185;
