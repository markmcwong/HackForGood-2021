import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function OvalCopy2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.67 5.7" style={styles.ovalCopy1}>
        <Path
          strokeWidth={0}
          fill="rgba(245,166,35,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.84 5.70 C4.40 5.70 5.67 4.42 5.67 2.85 C5.67 1.27 4.40 0.00 2.84 0.00 C1.27 0.00 0.00 1.27 0.00 2.85 C0.00 4.42 1.27 5.70 2.84 5.70 Z"
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
  ovalCopy1: {
    height: 6,
    width: 6
  }
});

export default OvalCopy2;
