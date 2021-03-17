import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy12(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 74.03 75.01" style={styles.maskCopy3}>
        <Path
          strokeWidth={0}
          fill="transparent"
          fillOpacity={1}
          strokeOpacity={1}
          d="M37.01 75.01 C57.45 75.01 74.03 58.22 74.03 37.51 C74.03 16.79 57.45 0.00 37.01 0.00 C16.57 0.00 0.00 16.79 0.00 37.51 C0.00 58.22 16.57 75.01 37.01 75.01 Z"
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
  maskCopy3: {
    height: 75,
    width: 74
  }
});

export default MaskCopy12;
