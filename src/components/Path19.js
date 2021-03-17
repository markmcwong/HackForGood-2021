import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path19(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 44 14" style={styles.path20}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M43.68 0.56 C37.68 -0.31 31.59 -0.17 25.63 1.00 C19.69 2.15 13.95 4.27 8.63 7.30 C5.64 9.01 2.80 11.00 0.15 13.25 C-0.29 13.61 0.33 14.26 0.76 13.89 C5.41 9.96 10.63 6.85 16.21 4.68 C21.75 2.51 27.57 1.25 33.46 0.96 C36.80 0.80 40.15 0.96 43.45 1.45 C43.68 1.50 43.91 1.36 43.98 1.13 C44.05 0.88 43.91 0.63 43.68 0.56 Z"
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
  path20: {
    height: 14,
    width: 44
  }
});

export default Path19;
