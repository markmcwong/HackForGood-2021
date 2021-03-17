import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 62 45" style={styles.path3}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M61.71 0.85 C61.70 0.85 61.69 0.85 61.69 0.85 C61.06 0.97 60.43 1.09 59.80 1.22 C54.67 2.29 49.64 3.84 44.79 5.85 C39.95 7.86 35.29 10.30 30.87 13.14 C26.45 15.98 22.28 19.21 18.41 22.79 C14.53 26.36 10.98 30.27 7.79 34.49 C5.41 37.64 3.24 40.96 1.31 44.42 C1.20 44.61 1.09 44.80 0.98 45.00 L0.00 45.00 C0.10 44.80 0.21 44.61 0.32 44.42 C2.66 40.18 5.35 36.15 8.35 32.37 C11.66 28.18 15.34 24.30 19.34 20.78 C23.31 17.27 27.57 14.12 32.07 11.36 C36.59 8.60 41.35 6.24 46.28 4.32 C51.07 2.46 56.01 1.04 61.04 0.09 C61.18 0.06 61.32 0.03 61.46 0.01 C62.00 -0.09 62.23 0.73 61.71 0.85 Z"
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
  path3: {
    height: 45,
    width: 62
  }
});

export default Path2;
