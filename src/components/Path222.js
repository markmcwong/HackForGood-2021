import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path222(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 28.84 26.07" style={styles.path73}>
        <Path
          strokeWidth={0}
          fill="rgba(216,216,216,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M3.28 26.07 C2.93 26.07 1.51 23.99 0.62 23.26 C-0.62 22.24 0.38 12.40 0.38 12.40 C-0.34 10.71 0.00 8.74 1.26 7.40 C2.79 5.53 5.48 5.19 10.05 4.21 C12.34 3.73 14.99 3.45 17.22 2.88 C19.54 2.40 21.76 1.56 23.82 0.40 C24.19 0.13 24.63 -0.01 25.08 0.00 C25.44 0.07 25.75 0.31 25.92 0.64 C26.08 0.96 26.17 1.33 26.16 1.69 C26.17 2.08 26.13 2.46 26.03 2.83 C25.97 3.06 25.55 3.73 25.66 3.92 C25.91 4.37 27.65 3.49 27.99 3.37 C28.08 3.34 28.18 3.34 28.26 3.37 C28.33 3.40 28.38 3.46 28.41 3.53 C28.98 4.72 28.98 6.10 28.41 7.29 C27.68 8.85 26.56 10.19 25.16 11.18 C23.69 12.19 22.01 12.85 20.24 13.12 C17.05 13.65 13.82 13.85 10.59 13.71 C9.78 13.71 8.98 13.62 8.18 13.55 C7.62 13.41 7.04 13.41 6.48 13.55 C5.87 13.85 5.72 14.74 5.57 15.32 C5.37 16.21 5.26 17.11 5.13 18.01 C4.66 20.94 4.43 25.98 3.28 26.07 Z"
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
  path73: {
    height: 26,
    width: 29
  }
});

export default Path222;
