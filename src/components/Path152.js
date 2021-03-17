import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path152(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 24.04 16.72" style={styles.path3}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M23.27 16.72 L0.00 3.18 L1.16 0.00 L24.04 13.30 L23.27 16.72 Z"
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
    height: 17,
    width: 24
  }
});

export default Path152;
