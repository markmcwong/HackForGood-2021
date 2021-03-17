import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path235(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7.77 1.41" style={styles.path86}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.68 0.64 C5.39 0.38 2.83 0.14 0.00 0.00 C0.06 0.25 0.12 0.51 0.18 0.77 C2.98 0.91 5.52 1.15 7.77 1.41 L7.68 0.64 Z"
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
  path86: {
    height: 1,
    width: 8
  }
});

export default Path235;
