import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path67(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7 2" style={styles.path30}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M0.00 2.00 C0.00 2.00 5.88 0.00 6.91 0.00 C7.94 0.00 0.00 2.00 0.00 2.00 Z"
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
  path30: {
    height: 2,
    width: 7
  }
});

export default Path67;
