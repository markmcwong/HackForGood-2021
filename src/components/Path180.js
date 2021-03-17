import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path180(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.64 4.18" style={styles.path31}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M3.69 4.16 C3.56 4.14 3.43 4.08 3.33 3.99 L0.27 1.36 C0.06 1.18 -0.04 0.90 0.01 0.63 C0.07 0.36 0.26 0.13 0.52 0.04 C0.78 -0.05 1.07 0.01 1.28 0.19 L4.34 2.81 C4.63 3.04 4.72 3.43 4.56 3.75 C4.40 4.07 4.04 4.25 3.69 4.16 Z"
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
  path31: {
    height: 4,
    width: 5
  }
});

export default Path180;
