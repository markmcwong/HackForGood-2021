import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Mask(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 28.7 28.5" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(38,194,129,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M14.35 28.50 C22.28 28.50 28.70 22.12 28.70 14.25 C28.70 6.38 22.28 0.00 14.35 0.00 C6.43 0.00 0.00 6.38 0.00 14.25 C0.00 22.12 6.43 28.50 14.35 28.50 Z"
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
    height: 29,
    width: 29
  }
});

export default Mask;
