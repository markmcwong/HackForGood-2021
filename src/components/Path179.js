import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path179(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.89 5.38" style={styles.path30}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.97 5.37 C1.70 5.32 1.47 5.13 1.39 4.86 L0.04 1.04 C-0.05 0.78 0.01 0.48 0.19 0.27 C0.36 0.06 0.64 -0.04 0.92 0.01 C1.19 0.06 1.41 0.25 1.51 0.52 L2.85 4.34 C2.92 4.54 2.91 4.75 2.82 4.94 C2.73 5.12 2.57 5.27 2.37 5.33 C2.24 5.38 2.10 5.39 1.97 5.37 Z"
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
  path30: {
    height: 5,
    width: 3
  }
});

export default Path179;
