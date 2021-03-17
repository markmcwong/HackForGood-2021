import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path140(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 13 12.28" style={styles.path27}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M12.72 12.28 C12.77 12.10 12.82 11.91 12.86 11.72 C13.29 9.70 12.66 7.58 11.86 5.72 C11.06 3.85 10.08 2.05 9.75 0.00 C8.21 2.84 5.69 4.71 3.07 5.91 C2.01 6.39 0.43 7.27 0.31 5.34 C0.28 4.90 0.28 4.47 0.31 4.04 C0.06 5.04 -0.04 6.09 0.02 7.14 C0.14 9.07 1.71 8.19 2.77 7.71 C5.40 6.51 7.91 4.64 9.45 1.80 C9.78 3.85 10.77 5.65 11.57 7.50 C12.21 9.00 12.75 10.65 12.72 12.28 Z"
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
  path27: {
    height: 12,
    width: 13
  }
});

export default Path140;
