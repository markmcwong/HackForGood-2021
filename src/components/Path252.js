import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path252(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.02 5.02" style={styles.path103}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.25 5.01 C0.94 4.98 0.68 4.75 0.62 4.43 L0.00 0.79 C-0.04 0.41 0.22 0.07 0.58 0.01 C0.95 -0.05 1.30 0.18 1.39 0.55 L2.01 4.18 C2.07 4.57 1.82 4.94 1.43 5.00 C1.37 5.02 1.31 5.02 1.25 5.01 Z"
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
  path103: {
    height: 5,
    width: 2
  }
});

export default Path252;
