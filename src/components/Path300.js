import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path300(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 39 20" style={styles.path17}>
        <Path
          strokeWidth={0}
          fill="rgba(230,230,230,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M39.00 14.12 C36.50 17.93 32.19 20.16 27.64 19.99 C21.88 19.72 17.09 15.70 12.77 11.89 L0.00 0.61 L8.45 0.21 C14.53 -0.08 20.76 -0.35 26.55 1.52 C32.34 3.39 37.68 7.91 38.74 13.90 "
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
  path17: {
    height: 20,
    width: 39
  }
});

export default Path300;
