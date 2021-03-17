import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 14 14" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
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
    height: 14,
    width: 14
  }
});

export default Oval;
