import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CombinedShape8(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.68 -0.68 296.73 62.89" style={styles.combinedShape2}>
        <Path
          strokeWidth={1.365233644859813}
          fill="rgba(255,255,255,1)"
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
  combinedShape2: {
    height: 60,
    width: 294
  }
});

export default CombinedShape8;
