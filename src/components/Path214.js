import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path214(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6.74 3.14" style={styles.path65}>
        <Path
          strokeWidth={0}
          fill="rgba(245,245,245,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.74 1.04 C6.28 0.39 5.53 -0.00 4.73 0.00 C3.12 0.07 1.57 0.65 0.30 1.66 C0.09 1.84 -0.02 2.11 0.00 2.38 C0.03 2.66 0.18 2.90 0.42 3.04 L0.42 3.04 C0.73 3.21 1.11 3.16 1.37 2.93 C2.78 1.51 4.76 0.82 6.74 1.04 Z"
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
  path65: {
    height: 3,
    width: 7
  }
});

export default Path214;
