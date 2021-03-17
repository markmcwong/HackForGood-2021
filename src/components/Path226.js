import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path226(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.62 2.96" style={styles.path77}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.62 0.39 L0.63 2.96 C-0.08 2.38 -0.21 1.34 0.34 0.61 C0.61 0.27 1.01 0.05 1.44 0.01 C1.87 -0.03 2.30 0.10 2.62 0.39 Z"
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
  path77: {
    height: 3,
    width: 3
  }
});

export default Path226;
