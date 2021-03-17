import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path177(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.87 3.81" style={styles.path28}>
        <Path
          strokeWidth={0}
          fill="rgba(148,139,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.28 3.76 C-0.06 3.48 -0.40 2.43 0.52 1.41 C1.58 0.33 3.09 -0.17 4.59 0.05 C5.93 0.33 6.28 1.38 5.36 2.40 C4.29 3.48 2.78 3.98 1.28 3.76 Z"
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
  path28: {
    height: 4,
    width: 6
  }
});

export default Path177;
