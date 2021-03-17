import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy9(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 74.87 75.18" style={styles.maskCopy}>
        <Path
          strokeWidth={0}
          fill="transparent"
          fillOpacity={1}
          strokeOpacity={1}
          d="M37.43 75.18 C58.11 75.18 74.87 58.35 74.87 37.59 C74.87 16.83 58.11 0.00 37.43 0.00 C16.76 0.00 0.00 16.83 0.00 37.59 C0.00 58.35 16.76 75.18 37.43 75.18 Z"
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
  maskCopy: {
    height: 75,
    width: 75
  }
});

export default MaskCopy9;
