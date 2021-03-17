import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3.97 3.95" style={styles.shape}>
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
    height: 4,
    width: 4
  }
});

export default Shape2;
