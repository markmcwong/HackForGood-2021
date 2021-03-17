import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape9(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 11.46 14.23" style={styles.shape}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
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
  shape: {
    height: 14,
    width: 11
  }
});

export default Shape9;
