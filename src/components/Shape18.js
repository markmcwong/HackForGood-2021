import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape18(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 66.93 57.19" style={styles.shape9}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
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
  shape9: {
    height: 57,
    width: 67
  }
});

export default Shape18;
