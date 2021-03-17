import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path240(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.44 2.36" style={styles.path91}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.70 2.36 L7.60 2.36 L0.60 1.39 C0.22 1.34 -0.05 0.99 0.01 0.60 C0.06 0.22 0.41 -0.05 0.79 0.01 L7.79 0.96 C8.17 0.99 8.46 1.32 8.44 1.71 C8.41 2.09 8.08 2.38 7.70 2.36 Z"
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
  path91: {
    height: 2,
    width: 8
  }
});

export default Path240;
