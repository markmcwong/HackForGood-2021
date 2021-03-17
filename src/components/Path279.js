import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path279(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 43 15.35" style={styles.path130}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 15.35 L30.74 0.00 L43.00 5.40 L0.00 15.35 Z"
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
  path130: {
    height: 15,
    width: 43
  }
});

export default Path279;
