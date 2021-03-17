import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path24(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 27.27 27.08" style={styles.path4}>
        <Path
          strokeWidth={0}
          fill="rgba(38,194,129,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M13.63 0.00 C6.10 0.00 0.00 6.06 0.00 13.54 C0.00 21.01 6.10 27.07 13.63 27.07 C21.16 27.07 27.27 21.01 27.27 13.54 C27.26 6.06 21.16 0.01 13.63 0.00 Z"
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
  path4: {
    height: 27,
    width: 27
  }
});

export default Path24;
