import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path133(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 12 50" style={styles.path20}>
        <Path
          strokeWidth={0}
          fill="rgba(69,75,105,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M12.00 8.16 C11.81 7.57 11.26 7.33 10.81 7.02 C9.86 6.38 9.21 5.27 8.71 4.12 C8.22 2.96 7.84 1.73 7.31 0.60 C7.23 0.40 7.10 0.22 6.95 0.09 C6.79 -0.04 6.57 -0.03 6.43 0.13 C6.36 0.23 6.32 0.36 6.31 0.49 C6.20 1.33 6.40 2.18 6.50 3.02 C6.85 5.90 6.12 8.83 4.51 11.00 C3.86 11.87 3.05 12.64 2.70 13.73 C2.48 14.59 2.42 15.50 2.51 16.39 L2.73 21.24 C2.93 26.18 2.46 31.12 1.36 35.88 C0.73 38.62 -0.33 41.38 0.10 44.17 C0.26 45.24 0.65 46.30 0.49 47.37 C0.44 47.58 0.44 47.79 0.49 48.00 C0.57 48.15 0.67 48.27 0.81 48.35 L2.90 50.00 L4.78 43.24 C4.96 42.67 5.10 42.08 5.20 41.48 C5.29 40.79 5.33 40.09 5.33 39.40 C5.45 33.32 6.10 27.28 7.27 21.36 C7.41 20.51 7.62 19.67 7.90 18.87 C8.44 17.39 9.35 16.16 10.26 14.96 C10.28 14.40 10.22 13.84 10.26 13.28 C10.26 12.30 10.38 11.33 10.60 10.38 C10.85 9.46 11.27 8.57 12.00 8.16 Z"
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
    height: 50,
    width: 12
  }
});

export default Path133;
