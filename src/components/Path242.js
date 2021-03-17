import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path242(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.5 4.55" style={styles.path93}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.35 3.08 C3.92 4.25 2.62 4.85 1.46 4.40 C0.30 3.96 -0.29 2.65 0.14 1.48 C0.58 0.30 1.88 -0.30 3.04 0.15 C3.60 0.36 4.05 0.79 4.30 1.34 C4.54 1.89 4.56 2.51 4.35 3.08 Z"
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
  path93: {
    height: 5,
    width: 5
  }
});

export default Path242;
