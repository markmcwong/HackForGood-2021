import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape6(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18 20" style={styles.shape}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={0.5}
          strokeOpacity={0.5}
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
    height: 20,
    width: 18
  }
});

export default Shape6;
