import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path50(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 127 21" style={styles.path13}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 21.00 L127.00 21.00 L127.00 0.00 L0.00 0.00 Z"
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
  path13: {
    height: 21,
    width: 127
  }
});

export default Path50;
