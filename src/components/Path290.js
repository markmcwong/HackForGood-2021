import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path290(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 1 151" style={styles.path7}>
        <Path
          strokeWidth={0}
          fill="rgba(204,204,204,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.50 151.00 C0.22 151.00 0.00 150.76 0.00 150.46 L0.00 0.54 C0.00 0.24 0.22 0.00 0.50 0.00 C0.78 0.00 1.00 0.24 1.00 0.54 L1.00 150.46 C1.00 150.76 0.78 151.00 0.50 151.00 Z"
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
    height: 151,
    width: 1
  }
});

export default Path290;
