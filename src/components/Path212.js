import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path212(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 30.98 18.4" style={styles.path63}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M11.61 0.78 L12.84 0.33 C13.06 0.22 13.31 0.19 13.55 0.25 C13.85 0.37 13.97 0.73 14.05 1.02 C14.16 1.73 14.33 2.42 14.57 3.09 C14.92 3.64 15.37 4.12 15.90 4.50 C17.09 5.45 18.37 6.27 19.72 6.96 C21.25 7.80 22.77 8.45 24.40 9.18 C26.04 9.90 28.22 10.36 29.49 11.23 C31.36 12.49 31.59 15.66 29.49 16.91 C27.65 18.00 22.82 19.16 17.77 17.73 C15.01 16.96 11.94 13.98 8.33 13.70 C6.04 13.52 1.67 12.87 0.19 11.12 C-0.36 10.35 0.38 7.87 0.96 5.76 C1.61 3.46 1.86 -0.20 2.63 0.01 C2.68 0.77 3.35 1.23 3.75 1.88 C4.07 2.47 4.35 3.09 4.57 3.72 C4.81 4.36 5.23 4.91 5.78 5.31 C6.35 5.70 7.12 5.66 7.64 5.20 C8.32 4.50 7.92 3.27 8.40 2.43 C8.81 1.90 9.38 1.52 10.03 1.36 L11.61 0.78 Z"
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
  path63: {
    height: 18,
    width: 31
  }
});

export default Path212;
