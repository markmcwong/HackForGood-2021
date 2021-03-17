import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Line10(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-1.5 -1.5 15 7" style={styles.line}>
        <Path
          strokeWidth={3}
          fill="transparent"
          stroke="rgba(115,101,255,1)"
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
  line: {
    height: 1,
    width: 9
  }
});

export default Line10;
