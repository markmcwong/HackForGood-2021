import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path178(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.31 5.51" style={styles.path29}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.63 5.50 C0.43 5.47 0.25 5.35 0.13 5.18 C0.02 5.01 -0.03 4.80 0.01 4.60 L0.78 0.63 C0.82 0.43 0.93 0.25 1.10 0.13 C1.27 0.02 1.48 -0.03 1.68 0.01 L1.68 0.01 C1.88 0.05 2.06 0.17 2.18 0.34 C2.29 0.50 2.34 0.71 2.30 0.91 L1.53 4.88 C1.49 5.09 1.38 5.26 1.21 5.38 C1.04 5.50 0.83 5.54 0.63 5.50 Z"
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
  path29: {
    height: 6,
    width: 2
  }
});

export default Path178;
