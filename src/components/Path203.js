import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path203(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 14.89 18.85" style={styles.path54}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M14.32 7.65 C14.06 7.61 13.81 7.61 13.55 7.65 C12.67 7.78 11.61 7.98 7.82 12.13 C4.19 16.10 5.26 17.85 5.26 17.85 L5.66 18.62 C5.66 18.62 4.94 19.39 4.05 18.15 C2.58 16.10 1.25 13.97 0.06 11.75 C-0.24 10.89 0.47 5.73 4.56 2.35 C8.38 -0.81 11.70 -0.05 12.38 0.49 C13.06 1.02 14.89 6.46 14.89 6.46 L14.32 7.65 Z"
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
  path54: {
    height: 19,
    width: 15
  }
});

export default Path203;
