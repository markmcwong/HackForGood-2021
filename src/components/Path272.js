import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path272(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 37.16 12.16" style={styles.path123}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M37.16 0.00 L7.99 12.16 L0.00 7.46 L37.16 0.00 Z"
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
  path123: {
    height: 12,
    width: 37
  }
});

export default Path272;
