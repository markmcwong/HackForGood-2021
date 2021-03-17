import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape11(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 10.35 13.14" style={styles.shape2}>
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
  shape2: {
    height: 13,
    width: 10
  }
});

export default Shape11;
