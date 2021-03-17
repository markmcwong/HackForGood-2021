import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path150(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 25.38 17.74" style={styles.path1}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M24.61 17.74 L0.00 3.42 L0.77 0.00 L25.38 14.33 L24.61 17.74 Z"
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
  path1: {
    height: 18,
    width: 25
  }
});

export default Path150;
