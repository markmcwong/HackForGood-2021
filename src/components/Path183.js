import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path183(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.53 2.32" style={styles.path34}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.64 1.54 C0.21 1.47 -0.07 1.06 0.01 0.64 C0.09 0.21 0.50 -0.07 0.92 0.01 L4.90 0.78 L4.90 0.78 C5.32 0.86 5.60 1.27 5.52 1.69 C5.44 2.11 5.03 2.39 4.60 2.31 L0.64 1.54 Z"
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
  path34: {
    height: 2,
    width: 6
  }
});

export default Path183;
