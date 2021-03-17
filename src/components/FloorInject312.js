import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function FloorInject312(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 354.82 205.04" style={styles.floorInject3121}>
        <Path
          strokeWidth={0}
          fill="rgba(245,245,245,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M177.41 205.04 C275.39 205.04 354.82 159.14 354.82 102.52 C354.82 45.90 275.39 0.00 177.41 0.00 C79.43 0.00 0.00 45.90 0.00 102.52 C0.00 159.14 79.43 205.04 177.41 205.04 Z"
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
  floorInject3121: {
    height: 205,
    width: 355
  }
});

export default FloorInject312;
