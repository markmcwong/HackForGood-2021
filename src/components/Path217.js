import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path217(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 14.24 35.6" style={styles.path68}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 19.74 L2.69 4.82 C2.69 4.82 10.13 4.16 14.24 0.00 C14.24 0.00 13.47 4.08 4.15 6.53 L1.47 21.63 L1.57 35.60 L0.00 19.74 Z"
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
  path68: {
    height: 36,
    width: 14
  }
});

export default Path217;
