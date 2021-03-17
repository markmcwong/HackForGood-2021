import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path195(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3.03 2.09" style={styles.path46}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 1.11 L2.96 2.09 C3.22 1.25 2.77 0.36 1.94 0.07 C1.54 -0.05 1.11 -0.01 0.75 0.18 C0.38 0.38 0.11 0.71 0.00 1.11 Z"
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
  path46: {
    height: 2,
    width: 3
  }
});

export default Path195;
