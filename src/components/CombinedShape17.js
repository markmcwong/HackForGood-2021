import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CombinedShape17(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.68 -0.68 163.73 48.24" style={styles.combinedShape3}>
        <Path
          strokeWidth={1.365233644859813}
          fill="rgba(255,255,255,1)"
          stroke="rgba(245,166,35,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d=""
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
  combinedShape3: {
    height: 46,
    width: 161
  }
});

export default CombinedShape17;
