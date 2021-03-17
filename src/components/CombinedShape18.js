import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CombinedShape18(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 111 45.51" style={styles.combinedShape4}>
        <Path
          strokeWidth={0}
          fill="rgba(208,208,208,1)"
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
  combinedShape4: {
    height: 46,
    width: 111
  }
});

export default CombinedShape18;
