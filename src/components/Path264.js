import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path264(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.47 0.93" style={styles.path115}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.00 0.93 L0.47 0.93 C0.21 0.93 0.00 0.72 0.00 0.46 C0.00 0.34 0.05 0.22 0.14 0.13 C0.23 0.05 0.35 -0.00 0.47 0.00 L2.00 0.00 C2.26 0.00 2.47 0.21 2.47 0.46 C2.47 0.59 2.42 0.71 2.33 0.80 C2.24 0.89 2.13 0.93 2.00 0.93 Z"
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
  path115: {
    height: 1,
    width: 2
  }
});

export default Path264;
