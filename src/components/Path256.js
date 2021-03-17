import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path256(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.81 2.7" style={styles.path107}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.06 2.69 C4.00 2.70 3.94 2.70 3.88 2.69 L0.45 1.37 C0.09 1.23 -0.09 0.82 0.04 0.46 C0.18 0.09 0.58 -0.09 0.94 0.04 L4.37 1.32 C4.69 1.45 4.86 1.80 4.79 2.14 C4.71 2.48 4.41 2.71 4.06 2.69 Z"
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
  path107: {
    height: 3,
    width: 5
  }
});

export default Path256;
