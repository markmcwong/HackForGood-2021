import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CombinedShape22(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18.77 28.5" style={styles.combinedShape8}>
        <Path
          strokeWidth={0}
          fill="rgba(245,166,35,1)"
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
  combinedShape8: {
    height: 29,
    width: 19
  }
});

export default CombinedShape22;
