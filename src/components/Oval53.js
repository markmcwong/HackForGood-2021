import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval53(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 37.23 37.23" style={styles.oval}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M18.58 37.23 C28.86 37.21 37.21 28.86 37.23 18.58 C37.25 8.30 28.93 -0.02 18.65 0.00 C8.37 0.02 0.02 8.37 0.00 18.65 C-0.02 28.93 8.30 37.25 18.58 37.23 Z"
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
  oval: {
    height: 37,
    width: 37
  }
});

export default Oval53;
