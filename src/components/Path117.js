import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path117(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 46 61" style={styles.path4}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M46.00 0.39 C46.01 6.47 44.27 12.38 41.08 17.15 C48.48 28.27 47.40 44.22 38.59 53.81 C29.79 63.40 16.21 63.40 7.40 53.81 C-1.41 44.22 -2.49 28.27 4.91 17.15 C1.85 12.55 46.00 -2.62 46.00 0.39 Z"
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
    height: 61,
    width: 46
  }
});

export default Path117;
