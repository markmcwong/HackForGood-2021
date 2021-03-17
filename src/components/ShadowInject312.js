import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function ShadowInject312(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 115.49 63.97" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M57.74 63.97 C89.63 63.97 115.49 49.65 115.49 31.99 C115.49 14.32 89.63 0.00 57.74 0.00 C25.85 0.00 0.00 14.32 0.00 31.99 C0.00 49.65 25.85 63.97 57.74 63.97 Z"
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
  path: {
    height: 64,
    width: 115
  }
});

export default ShadowInject312;
