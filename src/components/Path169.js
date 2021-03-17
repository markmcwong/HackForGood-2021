import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path169(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.9 4.9" style={styles.path20}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.77 1.66 C5.09 2.60 4.81 3.64 4.07 4.29 C3.32 4.95 2.26 5.09 1.37 4.65 C0.48 4.21 -0.06 3.28 0.01 2.29 C0.07 1.30 0.73 0.45 1.67 0.13 C2.95 -0.30 4.33 0.38 4.77 1.66 Z"
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
  path20: {
    height: 5,
    width: 5
  }
});

export default Path169;
