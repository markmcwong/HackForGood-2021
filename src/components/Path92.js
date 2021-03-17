import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path92(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5 3" style={styles.path55}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M5.00 0.00 C5.00 0.00 -1.21 2.76 0.21 2.99 C1.62 3.22 5.00 0.00 5.00 0.00 Z"
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
  path55: {
    height: 3,
    width: 5
  }
});

export default Path92;
