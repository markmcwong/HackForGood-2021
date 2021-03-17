import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path43(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 19 20" style={styles.path6}>
        <Path
          strokeWidth={0}
          fill="rgba(160,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M3.73 0.00 C6.07 5.09 4.68 12.20 0.00 20.00 L19.00 11.27 L16.02 8.73 L16.76 1.45 L3.73 0.00 Z"
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
  path6: {
    height: 20,
    width: 19
  }
});

export default Path43;
