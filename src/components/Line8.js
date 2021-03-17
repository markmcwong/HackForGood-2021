import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Line8(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.5 -0.5 338 3" style={styles.line1}>
        <Path
          strokeWidth={1}
          fill="transparent"
          stroke="rgba(209,209,209,0.4847847465034965)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.50 0.50 L335.50 0.50 "
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
  line1: {
    height: 1,
    width: 336
  }
});

export default Line8;
