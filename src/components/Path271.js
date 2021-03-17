import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path271(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 26.12 20.1" style={styles.path122}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M26.12 0.00 L7.99 20.10 L0.00 15.40 L26.12 0.00 Z"
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
  path122: {
    height: 20,
    width: 26
  }
});

export default Path271;
