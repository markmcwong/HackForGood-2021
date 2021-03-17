import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval11(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.52 -0.52 10.19 10.19" style={styles.oval2}>
        <Path
          strokeWidth={1.03030303030303}
          fill="rgba(27,193,46,1)"
          stroke="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.58 8.64 C6.82 8.64 8.64 6.82 8.64 4.58 C8.64 2.33 6.82 0.52 4.58 0.52 C2.33 0.52 0.52 2.33 0.52 4.58 C0.52 6.82 2.33 8.64 4.58 8.64 Z"
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
  oval2: {
    height: 8,
    width: 8
  }
});

export default Oval11;
