import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy28(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 73.65 74.94" style={styles.maskCopy4}>
        <Path
          strokeWidth={0}
          fill="transparent"
          fillOpacity={1}
          strokeOpacity={1}
          d="M36.82 74.94 C57.16 74.94 73.65 58.17 73.65 37.47 C73.65 16.78 57.16 0.00 36.82 0.00 C16.49 0.00 0.00 16.78 0.00 37.47 C0.00 58.17 16.49 74.94 36.82 74.94 Z"
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
  maskCopy4: {
    height: 75,
    width: 74
  }
});

export default MaskCopy28;
