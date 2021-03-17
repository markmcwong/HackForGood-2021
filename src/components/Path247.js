import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path247(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.18 5.54" style={styles.path98}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.65 3.34 C-0.57 1.80 -0.02 0.36 1.88 0.04 C4.00 -0.20 6.10 0.61 7.53 2.20 C8.76 3.70 8.21 5.18 6.30 5.49 C4.19 5.73 2.09 4.93 0.65 3.34 Z"
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
  path98: {
    height: 6,
    width: 8
  }
});

export default Path247;
