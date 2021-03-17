import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path250(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.27 3.61" style={styles.path101}>
        <Path
          strokeWidth={0}
          fill="rgba(148,139,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.41 2.18 C-0.35 1.19 -0.03 0.23 1.18 0.03 C2.56 -0.12 3.93 0.40 4.86 1.43 C5.63 2.42 5.30 3.37 4.06 3.58 C2.69 3.73 1.34 3.20 0.41 2.18 Z"
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
  path101: {
    height: 4,
    width: 5
  }
});

export default Path250;
