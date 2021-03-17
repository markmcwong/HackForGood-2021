import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path281(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 27.09 18.07" style={styles.path132}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
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
  path132: {
    height: 18,
    width: 27
  }
});

export default Path281;
