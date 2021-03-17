import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path275(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3.94 4.26" style={styles.path126}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 4.26 L3.94 1.56 L1.28 0.00 L0.00 4.26 Z"
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
  path126: {
    height: 4,
    width: 4
  }
});

export default Path275;
