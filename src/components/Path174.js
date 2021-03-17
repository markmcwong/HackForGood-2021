import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path174(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.99 5.83" style={styles.path25}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.98 5.75 C-0.08 5.33 -0.62 3.72 0.78 2.16 C2.41 0.51 4.72 -0.26 7.02 0.08 C9.08 0.50 9.61 2.12 8.22 3.69 C6.59 5.33 4.27 6.10 1.98 5.75 Z"
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
  path25: {
    height: 6,
    width: 9
  }
});

export default Path174;
