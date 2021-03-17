import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape19(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 74.03 55.36" style={styles.shape10}>
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
  shape10: {
    height: 55,
    width: 74
  }
});

export default Shape19;
