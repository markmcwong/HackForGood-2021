import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path42(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 53 100" style={styles.path5}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M39.40 0.83 C40.80 2.69 40.10 9.01 40.10 9.01 C40.10 9.01 42.54 29.45 41.49 31.31 C40.45 33.17 42.19 34.66 43.24 37.26 C44.28 39.86 45.33 46.18 45.33 46.18 C51.26 51.39 50.91 75.18 50.91 75.18 L53.00 96.38 C52.30 98.61 42.54 98.98 41.14 98.61 C39.75 98.23 35.57 64.77 35.57 64.77 L26.15 45.81 C26.15 45.81 26.85 96.38 26.85 98.61 C26.85 100.84 17.43 99.72 15.34 99.72 C13.25 99.72 13.25 62.54 13.25 62.54 L11.16 52.88 L0.00 8.63 L0.00 3.43 L1.74 0.83 Z"
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
  path5: {
    height: 100,
    width: 53
  }
});

export default Path42;
