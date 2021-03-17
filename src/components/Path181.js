import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path181(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.53 2.32" style={styles.path32}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.63 1.55 C0.21 1.46 -0.07 1.06 0.01 0.63 C0.09 0.21 0.50 -0.07 0.93 0.01 L4.89 0.78 L4.89 0.78 C5.17 0.83 5.39 1.03 5.48 1.29 C5.57 1.55 5.52 1.84 5.34 2.05 C5.16 2.26 4.88 2.36 4.60 2.31 L0.63 1.55 Z"
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
  path32: {
    height: 2,
    width: 6
  }
});

export default Path181;
