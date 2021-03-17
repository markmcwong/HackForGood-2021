import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 48 40" style={styles.path4}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M46.74 13.71 C48.31 10.79 48.57 6.98 46.61 4.29 C45.45 2.68 43.63 1.63 41.71 1.04 C39.80 0.45 37.79 0.27 35.79 0.13 C33.81 -0.01 31.80 -0.13 29.87 0.31 C27.94 0.75 26.06 1.83 25.12 3.54 C23.53 6.44 24.98 10.16 23.81 13.25 C22.74 16.08 19.69 17.74 16.69 18.40 C13.69 19.07 10.56 19.00 7.56 19.66 C4.56 20.33 1.51 21.97 0.42 24.79 C-0.37 26.84 0.02 29.19 1.06 31.12 C2.10 33.06 3.73 34.62 5.46 36.00 C8.03 38.05 11.05 39.81 14.36 39.99 C17.85 40.17 21.26 38.54 23.77 36.15 C26.29 33.76 28.00 30.67 29.36 27.51 C30.23 25.50 31.05 23.34 32.78 21.99 C34.06 20.99 35.68 20.56 37.26 20.14 L39.04 19.68 C42.31 18.84 45.07 16.71 46.69 13.80 C46.70 13.77 46.72 13.74 46.74 13.71 Z"
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
  path4: {
    height: 40,
    width: 48
  }
});

export default Path3;
