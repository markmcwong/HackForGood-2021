import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path190(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 29.89 36.16" style={styles.path41}>
        <Path
          strokeWidth={0}
          fill="rgba(255,168,167,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.50 14.03 C1.94 23.02 4.28 25.29 6.63 25.73 C8.22 26.03 10.97 25.59 13.68 24.88 L14.18 30.32 C14.18 30.32 12.15 32.97 12.25 34.39 C12.41 36.91 17.00 36.57 20.79 34.46 C22.49 33.41 23.94 32.00 25.04 30.33 C25.34 29.79 25.49 29.18 25.48 28.57 L24.38 16.61 C24.38 16.61 26.08 18.24 28.21 15.74 C30.33 13.25 30.50 10.21 28.40 8.64 C26.95 7.56 24.92 7.61 23.69 9.88 C23.04 11.51 23.07 13.09 22.16 12.53 C19.87 11.19 20.81 7.93 19.22 6.31 C17.47 4.49 14.69 3.71 12.28 3.25 C8.64 2.61 4.92 3.06 2.32 0.00 C1.51 0.11 -1.08 4.11 0.50 14.03 Z"
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
  path41: {
    height: 36,
    width: 30
  }
});

export default Path190;
