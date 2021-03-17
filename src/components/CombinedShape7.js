import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CombinedShape7(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.68 -0.68 194.73 47.25" style={styles.combinedShape1}>
        <Path
          strokeWidth={1.365233644859813}
          fill="rgba(255,255,255,0.6042181695257867)"
          stroke="rgba(38,194,129,1)"
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
  combinedShape1: {
    height: 45,
    width: 192
  }
});

export default CombinedShape7;
