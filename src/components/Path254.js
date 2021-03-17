import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path254(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.82 2.67" style={styles.path105}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.07 2.66 C4.01 2.67 3.94 2.67 3.88 2.66 L0.46 1.37 C0.28 1.31 0.14 1.18 0.06 1.01 C-0.01 0.84 -0.02 0.64 0.05 0.47 C0.11 0.29 0.24 0.15 0.41 0.07 C0.57 -0.01 0.77 -0.02 0.94 0.04 L4.38 1.29 C4.70 1.42 4.88 1.76 4.80 2.10 C4.73 2.44 4.42 2.68 4.08 2.66 Z"
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
  path105: {
    height: 3,
    width: 5
  }
});

export default Path254;
