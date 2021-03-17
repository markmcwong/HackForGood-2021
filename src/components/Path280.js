import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path280(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 27.09 25.02" style={styles.path131}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 25.02 L27.09 6.95 L22.24 0.00 L0.00 25.02 Z"
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
  path131: {
    height: 25,
    width: 27
  }
});

export default Path280;
