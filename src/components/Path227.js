import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path227(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.83 2.28" style={styles.path78}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.67 2.28 L0.00 0.83 C0.17 0.47 0.49 0.19 0.87 0.07 C1.25 -0.05 1.66 -0.01 2.01 0.18 C2.75 0.59 3.04 1.51 2.67 2.28 Z"
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
  path78: {
    height: 2,
    width: 3
  }
});

export default Path227;
