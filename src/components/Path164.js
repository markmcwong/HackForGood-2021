import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path164(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 23.22 24.14" style={styles.path15}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M19.82 0.19 C18.66 1.17 17.05 5.91 16.81 6.43 C15.87 8.73 14.80 10.97 13.60 13.14 C13.14 13.91 12.57 14.53 12.07 15.25 C11.68 15.82 11.12 16.26 10.46 16.48 C9.88 16.69 9.23 16.60 8.72 16.25 C8.35 15.92 8.13 15.47 8.09 14.98 C8.10 14.06 8.20 13.14 8.38 12.24 C7.55 13.48 6.52 14.57 5.32 15.47 C4.47 16.12 4.09 16.33 3.20 16.91 C2.47 17.36 1.78 17.87 1.13 18.44 C0.59 18.90 0.21 19.52 0.04 20.21 C-0.14 21.27 0.32 22.34 1.21 22.96 C2.10 23.54 3.12 23.88 4.17 23.97 C7.92 24.45 12.47 24.06 15.21 21.20 C16.09 20.28 16.76 19.18 17.17 17.97 C17.67 16.29 18.29 14.65 19.03 13.06 C19.84 11.59 20.81 10.22 21.93 8.98 C22.40 8.49 22.77 7.93 23.04 7.32 C23.34 6.36 23.27 5.33 22.85 4.41 C22.29 3.02 21.59 1.69 20.75 0.45 C20.66 0.28 20.54 0.15 20.38 0.05 C20.19 -0.05 20.01 0.01 19.82 0.19 Z"
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
    height: 24,
    width: 23
  }
});

export default Path164;
