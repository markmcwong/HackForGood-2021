import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 149 64" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d=""
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
  path: {
    height: 64,
    width: 149
  }
});

export default Shape;
