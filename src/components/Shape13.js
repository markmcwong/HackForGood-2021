import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape13(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6.02 5.99" style={styles.shape4}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
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
  shape4: {
    height: 6,
    width: 6
  }
});

export default Shape13;
