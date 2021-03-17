import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path56(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 13 9" style={styles.path19}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.66 6.03 C2.85 4.17 4.41 2.73 6.33 2.63 C8.24 2.53 9.95 3.81 10.34 5.64 C10.68 5.86 10.99 6.10 11.29 6.37 C11.60 6.66 12.07 6.72 12.45 6.53 C12.83 6.33 13.05 5.93 12.99 5.52 C12.99 5.50 12.99 5.47 12.99 5.45 C12.63 2.99 10.82 0.96 8.37 0.26 C5.91 -0.44 3.26 0.32 1.59 2.20 C-0.09 4.08 -0.47 6.74 0.60 9.00 C0.98 7.84 1.69 6.81 2.66 6.03 Z"
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
    height: 9,
    width: 13
  }
});

export default Path56;
