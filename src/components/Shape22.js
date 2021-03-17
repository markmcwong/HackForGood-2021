import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Shape22(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 44 34.02" style={styles.shape}>
        <Path
          strokeWidth={0}
          fill="rgba(204,204,204,1)"
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
    height: 34,
    width: 44
  }
});

export default Shape22;
