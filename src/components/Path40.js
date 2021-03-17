import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path40(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 11 16" style={styles.path3}>
        <Path
          strokeWidth={0}
          fill="rgba(160,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M9.28 0.00 L11.00 15.24 L1.03 16.00 L0.00 0.00 L9.28 0.00 Z"
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
  path3: {
    height: 16,
    width: 11
  }
});

export default Path40;
