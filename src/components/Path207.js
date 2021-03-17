import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path207(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20.64 23.52" style={styles.path58}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M11.49 3.81 C11.54 4.53 11.68 5.23 11.90 5.91 C12.40 7.37 13.08 8.77 13.92 10.07 C14.33 10.75 14.79 11.40 15.29 12.02 C16.29 13.21 17.53 14.19 18.60 15.34 C19.72 16.42 20.44 17.85 20.63 19.40 C20.78 22.01 17.96 22.89 15.80 23.28 C13.45 23.69 11.05 23.57 8.76 22.93 C6.30 22.28 4.45 20.26 4.02 17.74 C3.90 17.02 3.95 16.28 3.86 15.55 C3.57 13.89 2.88 12.33 1.85 11.00 C1.25 10.24 0.74 9.41 0.32 8.53 C-0.36 6.91 0.18 5.11 0.62 3.50 C0.99 2.12 1.38 0.55 1.90 0.68 C1.87 0.96 1.91 1.25 2.02 1.51 C2.18 1.77 2.31 2.05 2.40 2.33 C2.50 2.70 2.63 3.06 2.79 3.41 C3.03 3.94 3.43 4.38 3.94 4.68 C3.94 3.70 4.01 2.71 4.04 1.73 C3.98 1.42 4.06 1.10 4.27 0.86 C4.47 0.62 4.78 0.49 5.09 0.50 C6.91 0.07 8.78 -0.09 10.64 0.04 C10.93 0.04 11.21 0.16 11.40 0.37 C11.51 0.57 11.55 0.81 11.52 1.03 C11.46 1.96 11.45 2.89 11.49 3.81 Z"
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
  path58: {
    height: 24,
    width: 21
  }
});

export default Path207;
