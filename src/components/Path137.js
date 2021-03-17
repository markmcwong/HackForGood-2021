import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path137(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 21 34" style={styles.path24}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M9.62 6.02 C9.95 8.08 10.96 9.90 11.77 11.78 C12.58 13.66 13.23 15.79 12.79 17.83 C12.60 18.53 12.38 19.22 12.13 19.89 C11.81 21.08 11.58 22.31 11.45 23.56 C11.24 25.25 11.02 26.97 11.19 28.66 C11.37 30.36 11.99 32.07 13.17 33.10 L13.08 32.34 C13.57 32.64 14.04 33.02 14.47 33.45 C14.94 32.48 15.27 31.43 15.45 30.33 L17.69 32.35 C18.67 33.23 19.78 34.15 21.00 33.98 L20.01 31.33 C19.74 30.60 19.47 29.87 19.15 29.16 C18.93 28.74 18.75 28.30 18.61 27.84 C18.53 27.44 18.48 27.03 18.47 26.61 C18.07 19.86 16.99 13.18 15.24 6.72 C14.89 5.24 14.37 3.82 13.68 2.51 C13.35 1.89 12.91 1.36 12.39 0.95 C11.57 0.34 10.56 0.21 9.60 0.10 C8.92 -0.01 8.24 -0.03 7.56 0.05 C6.87 0.18 6.20 0.44 5.59 0.83 C3.64 1.99 2.05 3.83 1.04 6.09 C0.29 7.72 -0.06 9.56 0.01 11.40 C0.14 13.35 1.73 12.46 2.81 11.98 C5.48 10.77 8.05 8.88 9.62 6.02 Z"
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
  path24: {
    height: 34,
    width: 21
  }
});

export default Path137;
