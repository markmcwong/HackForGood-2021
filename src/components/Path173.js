import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path173(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.82 5.72" style={styles.path24}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.93 5.64 C-0.08 5.23 -0.61 3.65 0.76 2.11 C2.36 0.49 4.64 -0.26 6.88 0.08 C8.90 0.49 9.43 2.07 8.06 3.61 C6.46 5.23 4.18 5.98 1.93 5.64 Z"
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
  path24: {
    height: 6,
    width: 9
  }
});

export default Path173;
