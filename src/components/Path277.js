import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path277(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.57 2.37" style={styles.path128}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.51 2.37 C0.30 2.37 0.11 2.24 0.04 2.05 C-0.04 1.85 0.01 1.63 0.16 1.49 C0.69 0.99 1.22 0.53 1.74 0.11 C1.96 -0.06 2.28 -0.03 2.46 0.19 C2.64 0.41 2.60 0.73 2.38 0.91 C1.88 1.31 1.37 1.75 0.85 2.23 C0.76 2.32 0.64 2.37 0.51 2.37 Z"
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
  path128: {
    height: 2,
    width: 3
  }
});

export default Path277;
