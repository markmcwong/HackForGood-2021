import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path233(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.25 12.19" style={styles.path84}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.00 L4.68 0.00 C4.68 0.00 5.25 5.61 5.25 8.64 C5.25 10.82 5.05 12.20 4.65 12.19 C3.83 12.19 1.06 10.30 0.79 8.14 C0.56 6.36 0.00 0.00 0.00 0.00 Z"
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
  path84: {
    height: 12,
    width: 5
  }
});

export default Path233;
