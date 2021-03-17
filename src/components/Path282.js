import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path282(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 27.09 18.07" style={styles.path133}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.2}
          strokeOpacity={0.2}
          d="M27.09 0.00 L26.57 4.81 L0.00 18.07 L27.09 0.00 Z"
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
  path133: {
    height: 18,
    width: 27
  }
});

export default Path282;
