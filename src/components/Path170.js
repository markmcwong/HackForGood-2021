import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path170(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8.03 5.22" style={styles.path21}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.76 5.15 C-0.08 4.77 -0.54 3.33 0.68 1.93 C2.15 0.45 4.22 -0.24 6.27 0.07 C8.11 0.45 8.57 1.89 7.34 3.30 C5.88 4.77 3.81 5.46 1.76 5.15 Z"
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
  path21: {
    height: 5,
    width: 8
  }
});

export default Path170;
