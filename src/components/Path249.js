import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path249(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 21.6 25.91" style={styles.path100}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M14.67 0.70 C12.01 -0.32 9.05 -0.22 6.46 0.96 C3.86 2.15 1.84 4.33 0.85 7.03 C-2.16 15.09 3.90 18.94 2.71 22.19 C2.54 22.84 2.72 23.53 3.19 24.01 C4.44 25.38 6.25 26.08 8.09 25.88 C8.75 25.83 9.33 25.43 9.62 24.83 L9.62 24.83 C10.82 21.58 17.90 22.75 20.90 14.68 C21.91 11.99 21.82 9.01 20.65 6.39 C19.49 3.76 17.33 1.72 14.67 0.70 Z"
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
  path100: {
    height: 26,
    width: 22
  }
});

export default Path249;
