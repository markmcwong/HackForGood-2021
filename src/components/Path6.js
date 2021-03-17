import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path6(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5 14" style={styles.path7}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M5.00 14.00 L1.61 14.00 L0.00 0.00 L5.00 0.00 L5.00 14.00 Z"
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
  path7: {
    height: 14,
    width: 5
  }
});

export default Path6;
