import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path151(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18.22 43" style={styles.path2}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M15.02 0.00 L0.13 41.16 C-0.59 42.61 1.83 43.41 2.91 42.79 C3.25 42.63 3.52 42.36 3.67 42.02 L3.67 42.02 L18.22 2.09 L15.02 0.00 Z"
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
  path2: {
    height: 43,
    width: 18
  }
});

export default Path151;
