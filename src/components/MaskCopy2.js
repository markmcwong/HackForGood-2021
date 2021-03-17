import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 38 38" style={styles.maskCopy3}>
        <Path
          strokeWidth={0}
          fill="transparent"
          fillOpacity={1}
          strokeOpacity={1}
          d="M19.00 38.00 C29.49 38.00 38.00 29.49 38.00 19.00 C38.00 8.51 29.49 0.00 19.00 0.00 C8.51 0.00 0.00 8.51 0.00 19.00 C0.00 29.49 8.51 38.00 19.00 38.00 Z"
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
    height: 38,
    width: 38
  }
});

export default MaskCopy2;
