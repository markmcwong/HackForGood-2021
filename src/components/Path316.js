import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path316(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 39 20.01" style={styles.path6}>
        <Path
          strokeWidth={0}
          fill="rgba(230,230,230,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M39.00 14.13 C36.50 17.94 32.19 20.16 27.64 20.00 C21.88 19.73 17.09 15.71 12.77 11.89 L0.00 0.61 L8.45 0.21 C14.53 -0.08 20.76 -0.36 26.55 1.52 C32.34 3.40 37.68 7.91 38.74 13.91 "
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
  path6: {
    height: 20,
    width: 39
  }
});

export default Path316;
