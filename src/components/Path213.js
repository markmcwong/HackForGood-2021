import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path213(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6.07 3.09" style={styles.path64}>
        <Path
          strokeWidth={0}
          fill="rgba(245,245,245,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.07 1.17 C5.73 0.53 5.09 0.10 4.37 0.03 C3.32 -0.17 1.47 0.61 0.32 1.56 C0.10 1.74 -0.02 2.02 0.00 2.31 C0.03 2.59 0.19 2.85 0.45 2.99 L0.45 2.99 C0.76 3.16 1.15 3.12 1.42 2.88 C2.69 1.73 4.36 1.11 6.07 1.17 Z"
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
  path64: {
    height: 3,
    width: 6
  }
});

export default Path213;
