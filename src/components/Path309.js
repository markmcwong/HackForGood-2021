import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path309(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 86 95" style={styles.path26}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M19.33 23.09 C14.57 26.38 8.32 29.77 3.45 26.26 C0.26 23.96 -0.75 19.70 0.55 15.96 C2.88 9.23 9.28 6.27 15.39 4.00 C23.35 1.05 32.01 -1.30 40.22 0.81 C48.43 2.93 55.68 10.96 54.20 19.38 C53.01 26.16 46.68 31.80 47.58 38.62 C48.48 45.49 56.13 49.11 62.88 50.33 C69.63 51.56 77.18 51.95 82.03 56.85 C88.22 63.10 86.67 74.27 80.85 80.86 C75.03 87.46 66.24 90.45 57.73 92.48 C46.45 95.17 34.25 96.59 23.54 92.12 C12.82 87.65 4.49 75.62 7.59 64.34 C8.90 59.57 11.99 55.54 14.97 51.62 C17.96 47.70 20.98 43.60 22.12 38.79 C23.07 34.78 22.36 30.13 19.73 27.12 C18.75 26.04 18.57 24.45 19.28 23.17 L19.33 23.09 Z"
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
  path26: {
    height: 95,
    width: 86
  }
});

export default Path309;
