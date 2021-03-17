import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path48(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 127 22" style={styles.path11}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 22.00 L127.00 22.00 L127.00 0.00 L0.00 0.00 Z"
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
  path11: {
    height: 22,
    width: 127
  }
});

export default Path48;
