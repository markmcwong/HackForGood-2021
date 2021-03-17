import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path276(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.66 1.99" style={styles.path127}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.2}
          strokeOpacity={0.2}
          d="M0.00 0.00 L2.66 1.56 L2.03 1.99 L0.00 0.00 Z"
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
  path127: {
    height: 2,
    width: 3
  }
});

export default Path276;
