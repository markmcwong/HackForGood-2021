import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape14(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7.18 7.11" style={styles.shape5}>
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
  shape5: {
    height: 7,
    width: 7
  }
});

export default Shape14;
