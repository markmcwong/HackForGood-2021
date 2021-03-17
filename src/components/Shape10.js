import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape10(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 45.36 70.59" style={styles.shape1}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
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
  shape1: {
    height: 71,
    width: 45
  }
});

export default Shape10;
