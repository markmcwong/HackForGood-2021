import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function LineCopy21(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-1.5 -1.5 15 7" style={styles.lineCopy2}>
        <Path
          strokeWidth={3}
          fill="transparent"
          stroke="rgba(216,216,216,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.50 2.00 L10.50 2.00 "
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
  lineCopy2: {
    height: 1,
    width: 9
  }
});

export default LineCopy21;
