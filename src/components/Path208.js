import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path208(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.9 2.78" style={styles.path59}>
        <Path
          strokeWidth={0}
          fill="rgba(245,245,245,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M8.86 2.06 C7.89 1.30 5.73 1.30 4.55 1.46 C3.35 1.56 2.19 1.97 1.19 2.64 C0.88 2.86 0.47 2.83 0.20 2.56 L0.20 2.56 C0.06 2.41 -0.01 2.20 0.00 2.00 C0.01 1.79 0.11 1.59 0.27 1.46 C1.38 0.64 2.71 0.15 4.08 0.05 C6.99 -0.16 7.85 0.34 7.85 0.34 C7.85 0.34 9.14 1.20 8.86 2.06 Z"
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
  path59: {
    height: 3,
    width: 9
  }
});

export default Path208;
