import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path113(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 375 272" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M0.00 272.00 L362.41 272.00 C362.41 272.00 394.18 223.65 356.78 173.94 C342.91 155.51 341.85 132.72 346.01 111.33 C357.25 53.54 312.28 2.39 263.48 17.40 C262.55 17.69 261.62 17.98 260.67 18.29 C187.13 41.87 126.91 18.17 103.74 6.44 C94.51 1.74 84.49 -0.43 74.44 0.07 C48.43 1.44 9.02 13.21 45.63 78.09 C97.24 169.55 0.00 272.00 0.00 272.00 Z"
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
  path: {
    height: 272,
    width: 375
  }
});

export default Path113;
