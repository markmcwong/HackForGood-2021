import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path325(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 86 95.04" style={styles.path15}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M19.33 23.10 C14.57 26.40 8.32 29.78 3.45 26.27 C0.26 23.97 -0.75 19.71 0.55 15.96 C2.88 9.23 9.28 6.27 15.39 4.00 C23.35 1.05 32.01 -1.30 40.22 0.81 C48.43 2.93 55.68 10.96 54.20 19.39 C53.01 26.17 46.68 31.82 47.58 38.64 C48.48 45.51 56.13 49.13 62.88 50.36 C69.63 51.58 77.18 51.98 82.03 56.88 C88.22 63.13 86.67 74.30 80.85 80.90 C75.03 87.50 66.24 90.49 57.73 92.52 C46.45 95.22 34.25 96.63 23.54 92.16 C12.82 87.69 4.49 75.65 7.59 64.37 C8.90 59.60 11.99 55.57 14.97 51.65 C17.96 47.73 20.98 43.62 22.12 38.81 C23.07 34.80 22.36 30.14 19.73 27.14 C18.75 26.06 18.57 24.46 19.28 23.18 L19.33 23.10 Z"
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
  path15: {
    height: 95,
    width: 86
  }
});

export default Path325;
