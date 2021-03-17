import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path285(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7 6" style={styles.path2}>
        <Path
          strokeWidth={0}
          fill="rgba(204,204,204,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.50 6.00 C6.38 6.00 6.26 5.96 6.17 5.88 L0.18 0.86 C0.04 0.75 -0.02 0.57 0.01 0.40 C0.04 0.23 0.17 0.08 0.34 0.03 C0.50 -0.03 0.69 0.00 0.83 0.12 L6.83 5.14 C6.98 5.28 7.04 5.49 6.97 5.68 C6.90 5.87 6.71 6.00 6.50 6.00 Z"
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
  path2: {
    height: 6,
    width: 7
  }
});

export default Path285;
