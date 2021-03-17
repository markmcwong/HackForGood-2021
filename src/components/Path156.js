import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path156(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 42.54 26.56" style={styles.path7}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.15}
          strokeOpacity={0.15}
          d="M0.00 24.59 L0.00 26.55 C0.29 26.56 0.57 26.49 0.83 26.36 L17.46 16.72 L41.71 2.56 C42.20 2.24 42.51 1.70 42.54 1.11 L42.54 0.81 C42.53 0.53 42.44 0.25 42.29 0.00 L0.00 24.59 Z"
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
    height: 27,
    width: 43
  }
});

export default Path156;
