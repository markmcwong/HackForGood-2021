import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy19(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 38 37" style={styles.maskCopy5}>
        <Path
          strokeWidth={0}
          fill="transparent"
          fillOpacity={1}
          strokeOpacity={1}
          d="M19.00 37.00 C29.49 37.00 38.00 28.72 38.00 18.50 C38.00 8.28 29.49 0.00 19.00 0.00 C8.51 0.00 0.00 8.28 0.00 18.50 C0.00 28.72 8.51 37.00 19.00 37.00 Z"
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
  maskCopy5: {
    height: 37,
    width: 38
  }
});

export default MaskCopy19;
