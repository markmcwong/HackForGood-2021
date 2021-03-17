import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path166(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 21.66 26.51" style={styles.path17}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M9.07 1.71 C10.83 3.54 11.18 6.31 12.57 8.43 C13.79 10.09 15.36 11.46 17.16 12.44 C17.71 12.75 18.24 13.11 18.73 13.50 C20.51 15.18 21.56 17.48 21.66 19.91 C21.66 21.86 21.31 24.18 19.71 25.64 C19.06 26.27 18.17 26.58 17.27 26.50 C16.37 26.41 15.55 25.93 15.04 25.19 C14.71 24.69 14.31 23.85 14.04 23.32 C13.59 22.52 13.02 21.80 12.35 21.17 C13.65 20.98 14.58 19.82 14.49 18.52 C14.30 16.76 10.10 11.89 7.98 9.18 C5.86 6.47 1.81 2.29 0.00 2.68 C1.62 1.65 2.37 0.18 4.45 0.02 C6.16 -0.12 7.85 0.50 9.07 1.71 Z"
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
  path17: {
    height: 27,
    width: 22
  }
});

export default Path166;
