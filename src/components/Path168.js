import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path168(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 73.38 33.78" style={styles.path19}>
        <Path
          strokeWidth={0}
          fill="rgba(255,168,167,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M12.57 19.57 C12.57 19.57 28.48 28.75 31.49 30.35 C34.70 32.01 36.85 32.64 38.65 32.77 C38.65 32.77 56.02 33.63 59.67 33.71 C64.27 33.81 66.28 33.98 68.66 32.94 C69.98 32.34 69.97 32.31 73.38 29.83 C73.17 28.58 72.79 27.37 72.25 26.22 C71.80 25.35 68.42 21.01 67.48 20.86 C63.42 20.09 53.03 20.98 50.05 21.13 C46.61 21.32 41.95 21.41 38.51 21.43 C38.51 21.43 18.79 13.52 17.68 12.16 C16.57 10.80 16.15 8.05 14.92 6.17 C14.11 4.91 12.94 3.93 12.32 2.54 C12.17 2.19 11.88 1.77 11.56 1.90 C11.46 1.95 11.38 2.02 11.32 2.12 C10.82 2.92 10.75 3.90 11.11 4.77 C11.35 5.54 11.76 6.80 10.96 7.90 C10.02 7.25 9.36 5.32 9.05 3.67 C8.93 2.67 8.59 1.71 8.06 0.85 C7.11 -0.38 1.47 -0.24 0.65 1.03 C-0.17 2.29 -0.24 4.57 0.59 7.15 C3.11 15.09 12.57 19.57 12.57 19.57 Z"
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
  path19: {
    height: 34,
    width: 73
  }
});

export default Path168;
