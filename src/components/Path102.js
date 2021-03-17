import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path102(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 28 26" style={styles.path65}>
        <Path
          strokeWidth={0}
          fill="rgba(218,218,218,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.71 17.88 C7.96 18.24 8.84 19.74 10.15 19.68 C11.10 19.64 11.80 18.77 12.33 17.94 C13.19 16.60 13.92 15.19 14.52 13.71 C14.80 12.86 15.20 12.06 15.70 11.33 C16.25 10.64 17.11 10.13 17.95 10.30 C18.87 10.49 19.49 11.38 20.33 11.85 C21.82 12.72 23.68 12.09 25.28 11.44 C26.07 11.13 26.94 10.67 27.08 9.82 C27.17 9.23 26.84 8.62 26.92 8.02 C26.99 7.42 27.42 7.00 27.71 6.51 C28.00 6.01 28.16 5.30 27.76 4.90 C27.46 4.61 27.00 4.63 26.62 4.49 C25.67 4.10 25.43 2.78 24.59 2.19 C23.68 1.55 22.46 1.98 21.36 2.03 C19.78 2.10 18.30 1.35 16.83 0.74 C15.36 0.13 13.69 -0.33 12.24 0.30 C11.37 0.69 10.70 1.41 9.96 2.02 C8.52 3.20 6.80 3.95 4.98 4.20 C4.09 4.33 3.11 4.35 2.41 4.93 C1.52 5.66 1.39 7.01 1.56 8.18 C1.73 9.35 2.12 10.49 2.03 11.66 C1.89 13.52 0.55 15.05 0.11 16.85 C-0.09 17.44 -0.02 18.08 0.31 18.61 C0.57 18.88 0.87 19.11 1.20 19.28 C2.06 19.86 2.63 20.82 2.75 21.88 C2.81 22.41 2.75 22.95 2.83 23.48 C3.16 25.16 4.71 26.25 6.33 25.95 C6.48 24.56 6.32 23.16 5.87 21.85 C5.41 20.51 3.63 17.01 6.71 17.88 Z"
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
  path65: {
    height: 26,
    width: 28
  }
});

export default Path102;
