import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CombinedShape23(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 325 44.52" style={styles.combinedShape9}>
        <Path
          strokeWidth={0}
          fill="rgba(255,159,0,1)"
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
  combinedShape9: {
    height: 45,
    width: 325
  }
});

export default CombinedShape23;
