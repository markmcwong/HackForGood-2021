import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path172(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.55 5.55" style={styles.path23}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.87 5.48 C-0.08 5.07 -0.59 3.54 0.74 2.05 C2.29 0.48 4.49 -0.25 6.67 0.08 C8.63 0.48 9.13 2.02 7.81 3.50 C6.26 5.07 4.05 5.80 1.87 5.48 Z"
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
  path23: {
    height: 6,
    width: 9
  }
});

export default Path172;
