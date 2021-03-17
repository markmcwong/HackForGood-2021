import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path228(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.57 2.57" style={styles.path79}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.56 1.23 C2.59 1.56 2.48 1.89 2.26 2.14 C2.04 2.39 1.73 2.55 1.40 2.57 C0.88 2.62 0.38 2.34 0.14 1.88 C-0.10 1.41 -0.03 0.84 0.31 0.44 C0.66 0.05 1.21 -0.10 1.70 0.07 C2.20 0.24 2.54 0.70 2.56 1.23 Z"
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
  path79: {
    height: 3,
    width: 3
  }
});

export default Path228;
