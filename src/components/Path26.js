import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path26(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.3 -0.3 12.66 12.58" style={styles.path6}>
        <Path
          strokeWidth={0.5909090909090909}
          fill="rgba(255,255,255,1)"
          stroke="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M11.00 5.22 L6.22 5.22 L6.22 0.47 C6.22 0.21 6.00 0.00 5.74 0.00 C5.48 0.00 5.26 0.21 5.26 0.47 L5.26 5.22 L0.48 5.22 C0.21 5.22 0.00 5.44 0.00 5.70 C0.00 5.96 0.21 6.17 0.48 6.17 L5.26 6.17 L5.26 10.93 C5.26 11.19 5.48 11.40 5.74 11.40 C6.00 11.40 6.22 11.19 6.22 10.93 L6.22 6.17 L11.00 6.17 C11.27 6.17 11.48 5.96 11.48 5.70 C11.48 5.44 11.27 5.22 11.00 5.22 Z"
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
  path6: {
    height: 11,
    width: 11
  }
});

export default Path26;
