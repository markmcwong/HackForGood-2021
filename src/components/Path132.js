import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path132(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3 5" style={styles.path19}>
        <Path
          strokeWidth={0}
          fill="rgba(69,75,105,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.58 2.54 C2.84 3.01 2.98 3.54 3.00 4.09 C3.00 4.32 2.92 4.55 2.78 4.73 C2.56 4.96 2.24 5.05 1.94 4.98 C1.65 4.90 1.38 4.77 1.13 4.59 C0.80 4.40 0.53 4.11 0.35 3.76 C0.29 3.59 0.26 3.42 0.24 3.24 L0.04 1.93 C-0.01 1.67 -0.01 1.41 0.04 1.15 C0.21 0.61 0.94 -0.34 1.50 0.12 C2.06 0.59 2.31 1.92 2.58 2.54 Z"
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
  path19: {
    height: 5,
    width: 3
  }
});

export default Path132;
