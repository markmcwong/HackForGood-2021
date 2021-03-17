import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path193(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 4.12 7.64" style={styles.path44}>
        <Path
          strokeWidth={0}
          fill="rgba(242,143,143,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M3.61 0.00 L4.12 7.64 L0.00 6.77 L3.61 0.00 Z"
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
  path44: {
    height: 8,
    width: 4
  }
});

export default Path193;
