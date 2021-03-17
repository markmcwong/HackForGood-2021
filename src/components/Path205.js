import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path205(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 11.38 19.43" style={styles.path56}>
        <Path
          strokeWidth={0}
          fill="rgba(230,194,167,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.92 16.34 C3.07 21.04 6.97 19.74 11.38 16.73 L10.61 0.00 L0.00 0.00 L0.92 16.34 Z"
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
  path56: {
    height: 19,
    width: 11
  }
});

export default Path205;
