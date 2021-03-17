import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy13(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 65.79 66.07" style={styles.maskCopy4}>
        <Path
          strokeWidth={0}
          fill="transparent"
          fillOpacity={1}
          strokeOpacity={1}
          d="M32.90 66.07 C51.06 66.07 65.79 51.28 65.79 33.03 C65.79 14.79 51.06 0.00 32.90 0.00 C14.73 0.00 0.00 14.79 0.00 33.03 C0.00 51.28 14.73 66.07 32.90 66.07 Z"
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
    height: 66,
    width: 66
  }
});

export default MaskCopy13;
