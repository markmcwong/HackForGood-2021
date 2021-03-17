import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path215(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6.64 3.16" style={styles.path66}>
        <Path
          strokeWidth={0}
          fill="rgba(245,245,245,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.64 0.94 C6.11 0.34 5.35 -0.01 4.55 0.00 C2.99 0.09 1.51 0.68 0.30 1.68 C0.09 1.85 -0.02 2.12 0.00 2.40 C0.03 2.67 0.18 2.92 0.42 3.06 L0.42 3.06 C0.73 3.22 1.11 3.18 1.37 2.94 C2.71 1.48 4.66 0.73 6.64 0.94 Z"
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
  path66: {
    height: 3,
    width: 7
  }
});

export default Path215;
