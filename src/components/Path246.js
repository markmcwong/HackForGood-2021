import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path246(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.01 5.42" style={styles.path97}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.63 3.27 C-0.56 1.80 -0.02 0.35 1.84 0.04 C3.91 -0.19 5.97 0.59 7.38 2.14 C8.57 3.62 8.04 5.07 6.17 5.38 C4.10 5.61 2.04 4.82 0.63 3.27 Z"
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
  path97: {
    height: 5,
    width: 8
  }
});

export default Path246;
