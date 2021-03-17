import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Timeline(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 278 44" style={styles.timeline1}>
        <Path
          strokeWidth={0}
          fill="rgba(38,194,129,1)"
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
  timeline1: {
    height: 17,
    width: 188
  }
});

export default Timeline;
